import Card2 from "../Card2";
import { BellIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function ReminderCard({ items }) {
  return (
    <Card2
      tint="bg-v2-warmwhite"
      radius="rounded-[22px]"
      pad="p-5 lg:p-6"
      className="flex flex-col h-full"
      {...fadeUp(0.25)}
    >
      <div className="flex items-center gap-2">
        <BellIcon className="w-5 h-5 text-terracotta" />
        <p className="font-display2 font-semibold text-v2-text text-[16px]">Upcoming reminders</p>
      </div>
      <p className="font-body2 text-[12.5px] text-v2-text/55 mt-1">Sakhi won&apos;t let you miss out</p>

      <div className="flex flex-col mt-5 flex-1">
        {items.map((it, i) => (
          <div
            key={it.title}
            className={`flex items-center gap-3.5 py-3.5 ${i > 0 ? "border-t border-v2-text/8" : ""}`}
          >
            <div className="shrink-0 w-14 h-14 rounded-xl bg-v2-peach/30 flex flex-col items-center justify-center">
              <p className="font-display2 font-bold text-v2-text text-[18px] leading-none">{it.day}</p>
              <p className="font-body2 text-[10.5px] text-v2-text/55 mt-0.5">{it.month}</p>
            </div>
            <div className="min-w-0">
              <p className="font-body2 font-semibold text-v2-text text-[13.5px] leading-snug">{it.title}</p>
              <p className="font-body2 text-[12px] text-v2-text/55 mt-0.5">{it.time}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#companion"
        className="inline-flex items-center gap-1.5 font-body2 font-semibold text-[13px] text-v2-text mt-4 hover:gap-2.5 transition-all"
      >
        View calendar →
      </a>
    </Card2>
  );
}
