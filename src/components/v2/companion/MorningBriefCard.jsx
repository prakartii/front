import Card2 from "../Card2";
import WomanIllustration from "./WomanIllustration";
import { CalendarCheckIcon, DocumentIcon, MegaphoneIcon, BoxIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const TASKS = [
  { icon: CalendarCheckIcon, title: "3 follow-ups pending" },
  { icon: DocumentIcon, title: "New scheme you may qualify for" },
  { icon: MegaphoneIcon, title: "Festival season is approaching" },
  { icon: BoxIcon, title: "Stock running low: Dupatta" },
];

export default function MorningBriefCard() {
  return (
    <Card2
      tint="bg-v2-warmwhite"
      radius="rounded-[26px]"
      pad="p-6 lg:p-7"
      className="h-full"
      {...fadeUp(0.05)}
    >
      <p className="font-display2 font-semibold text-v2-text text-[19px] flex items-center gap-2">
        Good morning, <span aria-hidden="true">👋</span>
      </p>
      <p className="font-body2 text-[13px] text-v2-text/55 mt-1">Here&apos;s what&apos;s important today.</p>

      <div className="flex gap-4 lg:gap-6 mt-6">
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex flex-col gap-4">
            {TASKS.map((t) => (
              <div key={t.title} className="flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-v2-peach/45 text-[#8B5E34] shrink-0"
                  aria-hidden="true"
                >
                  <t.icon className="w-[18px] h-[18px]" />
                </span>
                <p className="font-body2 font-medium text-v2-text text-[13.5px] leading-snug">{t.title}</p>
              </div>
            ))}
          </div>
          <a
            href="#companion"
            className="inline-flex items-center gap-1.5 font-body2 font-semibold text-[13px] text-v2-text mt-6 hover:gap-2.5 transition-all"
          >
            View all tasks →
          </a>
        </div>

        <div className="relative w-[190px] h-[230px] shrink-0 hidden md:block">
          <div
            className="absolute inset-x-0 top-2 mx-auto w-[180px] h-[180px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(224,193,150,0.4), rgba(224,193,150,0) 72%)",
            }}
            aria-hidden="true"
          />
          <WomanIllustration width={170} height={210} className="relative z-10 mx-auto block" />

          <div
            className="absolute -bottom-4 -left-3 w-[210px] rounded-xl bg-v2-cream px-4 pt-4 pb-3 z-20"
            style={{ boxShadow: "0 18px 34px -18px rgba(111,87,72,0.4)" }}
          >
            <span className="font-display2 text-[26px] leading-none text-terracotta/70" aria-hidden="true">
              &ldquo;
            </span>
            <p className="font-script text-[15.5px] leading-tight text-ink-900 -mt-2">
              I&apos;ve noted your goals.
              <br />
              Let&apos;s take the next
              <br />
              right step together.
            </p>
            <p className="font-script text-[14px] text-ink-900/80 text-right mt-1">— Sakhi</p>
          </div>
        </div>
      </div>
    </Card2>
  );
}
