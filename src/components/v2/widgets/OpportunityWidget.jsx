import Card2 from "../Card2";
import PaperFold from "../PaperFold";

/**
 * The Opportunity widget — a soft-coral card styled like a single
 * marketplace notification: tag chip, one-line headline, meta. Flatter and
 * wider than the other widgets so the collage doesn't repeat a template.
 */
export default function OpportunityWidget({ lead, className = "" }) {
  return (
    <Card2 tint="bg-v2-coral" radius="rounded-[24px]" pad="p-5" lift className={`relative w-[280px] ${className}`}>
      <span className="inline-block font-body2 font-semibold text-[10px] uppercase tracking-[0.14em] text-v2-warmwhite bg-v2-brown/80 px-2.5 py-1 rounded-full">
        {lead.tag}
      </span>
      <p className="font-display2 text-lg text-v2-text mt-3 leading-snug">{lead.headline}</p>
      <p className="font-body2 text-[11px] text-v2-text/70 mt-2 uppercase tracking-[0.08em]">{lead.meta}</p>
      <PaperFold size={18} shade="rgba(111,87,72,0.28)" className="absolute bottom-0 right-0" />
    </Card2>
  );
}
