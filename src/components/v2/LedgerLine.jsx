import { motion } from "framer-motion";

/**
 * A torn fragment of a ledger page — faint ruled lines, a handwritten
 * entry. The account-book artifact, distinct from a printed receipt.
 */
export default function LedgerLine({ entry, amount, rotate = -2, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        boxShadow: "0 10px 24px -14px rgba(111,87,72,0.3)",
        backgroundImage:
          "repeating-linear-gradient(rgba(111,87,72,0.14) 0 1px, transparent 1px 17px)",
      }}
      className={`bg-v2-warmwhite px-3.5 pt-3 pb-2.5 w-[168px] ${className}`}
    >
      <p className="font-script text-base text-v2-text leading-[17px]">{entry}</p>
      {amount && <p className="font-body2 text-xs text-v2-brown/80 mt-0.5">{amount}</p>}
    </motion.div>
  );
}
