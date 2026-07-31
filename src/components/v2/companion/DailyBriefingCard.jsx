import Card2 from "../Card2";
import { SunIcon, SalesIcon, FolderStarIcon, CalendarCheckIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const UPDATES = [
  { icon: SalesIcon, title: "Sales update", subtitle: "↑ 18% from yesterday" },
  { icon: FolderStarIcon, title: "New opportunities", subtitle: "5 new matches found" },
  { icon: CalendarCheckIcon, title: "Reminders", subtitle: "2 tasks due today" },
];

export default function DailyBriefingCard() {
  return (
    <Card2
      tint="bg-v2-warmwhite"
      radius="rounded-[22px]"
      pad="p-5 lg:p-6"
      className="relative overflow-hidden flex flex-col h-full"
      {...fadeUp(0.15)}
    >
      <span
        className="hidden sm:block absolute -top-1 right-4 w-11 h-5 bg-v2-peach/55 rotate-[10deg]"
        style={{ boxShadow: "0 2px 4px rgba(111,87,72,0.15)" }}
        aria-hidden="true"
      />

      <div className="flex items-center gap-2">
        <SunIcon className="w-5 h-5 text-terracotta" />
        <p className="font-display2 font-semibold text-v2-text text-[16px]">Daily briefing</p>
      </div>
      <p className="font-body2 text-[12.5px] text-v2-text/55 mt-1">Your business updates</p>

      <div className="flex flex-col gap-4 mt-5 flex-1">
        {UPDATES.map((u) => (
          <div key={u.title} className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-v2-peach/35 text-[#8B5E34] shrink-0"
              aria-hidden="true"
            >
              <u.icon className="w-5 h-5" />
            </span>
            <div>
              <p className="font-body2 font-semibold text-v2-text text-[13.5px]">{u.title}</p>
              <p className="font-body2 text-[12px] text-v2-text/55 mt-0.5">{u.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#companion"
        className="inline-flex items-center gap-1.5 font-body2 font-semibold text-[13px] text-v2-text mt-5 hover:gap-2.5 transition-all"
      >
        View all updates →
      </a>
    </Card2>
  );
}
