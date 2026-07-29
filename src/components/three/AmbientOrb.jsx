import { useMemo, useRef } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "framer-motion";
import { useMediaQuery } from "../../lib/useMediaQuery";
import OrbFallback from "./OrbFallback";

/**
 * Sakhi's living presence — not a logo, an ambient companion. A soft,
 * glowing, slowly morphing sphere: a noise-distorted glass core (drei's
 * MeshDistortMaterial) wrapped in a hand-written fresnel rim-glow shell.
 * It breathes on its own clock, drifts its light source, cycles gently
 * through the pastel palette, and leans/distorts a little more when the
 * cursor comes near — sensed rather than clicked.
 */

const FresnelMaterial = shaderMaterial(
  { color: new THREE.Color("#CBBBE6"), power: 2.4, intensity: 0.85 },
  /* vertex */ `
    varying vec3 vNormal;
    varying vec3 vViewDir;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewDir = normalize(-mvPosition.xyz);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  /* fragment */ `
    uniform vec3 color;
    uniform float power;
    uniform float intensity;
    varying vec3 vNormal;
    varying vec3 vViewDir;
    void main() {
      float fresnel = pow(1.0 - clamp(dot(normalize(vNormal), normalize(vViewDir)), 0.0, 1.0), power);
      gl_FragColor = vec4(color, fresnel * intensity);
    }
  `
);
extend({ FresnelMaterial });

const PALETTE = [
  new THREE.Color("#D6B87E"), // champagne deep
  new THREE.Color("#E6C0B9"), // blush deep
  new THREE.Color("#CBBBE6"), // lavender mist deep
];

function cycleColor(target, phase) {
  const n = PALETTE.length;
  const scaled = (((phase % 1) + 1) % 1) * n;
  const i = Math.floor(scaled);
  const localT = scaled - i;
  target.lerpColors(PALETTE[i], PALETTE[(i + 1) % n], localT);
}

function OrbCore({ richMode, reduced }) {
  const coreRef = useRef();
  const materialRef = useRef();
  const shellRef = useRef();
  const light1 = useRef();
  const light2 = useRef();
  const tilt = useRef({ x: 0, y: 0 });
  const distort = useRef(0.3);

  const segments = richMode ? 96 : 64;

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    const damp = reduced ? 0 : 1;

    if (coreRef.current) {
      const breathe = 1 + Math.sin(t * 0.25) * 0.04 * damp;
      coreRef.current.scale.setScalar(breathe);

      if (richMode) {
        const targetX = pointer.y * 0.15 * damp;
        const targetY = pointer.x * 0.15 * damp;
        tilt.current.x = THREE.MathUtils.lerp(tilt.current.x, targetX, 0.05);
        tilt.current.y = THREE.MathUtils.lerp(tilt.current.y, targetY, 0.05);
        coreRef.current.rotation.x = tilt.current.x;
        coreRef.current.rotation.y = tilt.current.y;
      }
    }

    if (materialRef.current) {
      cycleColor(materialRef.current.color, t * 0.02);
      cycleColor(materialRef.current.emissive, t * 0.02 + 0.15);
      if (richMode) {
        const proximity = Math.min(1, Math.hypot(pointer.x, pointer.y));
        const target = 0.28 + (1 - proximity) * 0.14 * damp;
        distort.current = THREE.MathUtils.lerp(distort.current, target, 0.05);
        materialRef.current.distort = distort.current;
      }
    }

    if (shellRef.current) {
      cycleColor(shellRef.current.color, t * 0.02 + 0.3);
    }

    if (light1.current) {
      light1.current.position.set(
        Math.cos(t * 0.45) * 1.6,
        Math.sin(t * 0.45) * 1.6,
        1
      );
    }
    if (light2.current) {
      light2.current.position.set(
        Math.cos(t * 0.3 + 2) * 1.4,
        Math.sin(t * 0.3 + 2) * 1.4,
        -1
      );
    }
  });

  return (
    <group>
      {richMode && (
        <mesh scale={1.3}>
          <sphereGeometry args={[1, 32, 32]} />
          <fresnelMaterial
            ref={shellRef}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            power={2.4}
            intensity={0.8}
          />
        </mesh>
      )}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1, segments, segments]} />
        <MeshDistortMaterial
          ref={materialRef}
          speed={reduced ? 0 : 1.3}
          distort={0.3}
          radius={1}
          roughness={0.2}
          metalness={0}
          emissive="#E3DBF0"
          emissiveIntensity={0.5}
          clearcoat={0.5}
          clearcoatRoughness={0.25}
        />
      </mesh>
      <ambientLight intensity={0.55} />
      <pointLight ref={light1} intensity={1.1} color="#F0D7D2" distance={3} />
      {richMode && (
        <pointLight ref={light2} intensity={0.55} color="#E8D2A6" distance={3} />
      )}
    </group>
  );
}

export default function AmbientOrb({
  className = "",
  size = 44,
  variant = "mark",
  proximitySource = null,
}) {
  const reduced = useReducedMotion();
  const isCoarse = useMediaQuery("(pointer: coarse)");
  const isSmall = useMediaQuery("(max-width: 640px)");
  const wrapperRef = useRef(null);

  const dpr = useMemo(
    () => (variant === "presence" ? [1, 1.5] : [1, 1]),
    [variant]
  );

  // Hard safety valve: very small + coarse-pointer devices skip WebGL entirely.
  if (variant === "presence" && isCoarse && isSmall) {
    return <OrbFallback className={className} size={size} />;
  }

  const richMode = variant === "presence" && !isCoarse;

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ width: size, height: size, position: "relative" }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 2.6], fov: 40 }}
        dpr={dpr}
        gl={{ alpha: true, antialias: true }}
        eventSource={proximitySource || wrapperRef}
      >
        <OrbCore richMode={richMode} reduced={reduced} />
      </Canvas>
    </div>
  );
}
