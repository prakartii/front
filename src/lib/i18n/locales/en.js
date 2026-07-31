// Emphasis within a headline line is marked with *asterisks* — the
// component parses this into a styled span, so translators can place the
// emphasis wherever it falls naturally in their language rather than at a
// fixed word index. See src/lib/text.js.
export default {
  nav: {
    memory: "Memory",
    growth: "Growth",
    stories: "Stories",
    cta: "Begin her journey",
  },
  hero: {
    eyebrow: "For the entrepreneur building alone",
    headline: [
      "She never stopped",
      "shaping it.",
      "Now something shapes it",
      "*with* her.",
    ],
    subhead:
      "Sakhi remembers every decision in your business, senses what's coming next, and quietly hands you the opportunity before you'd have found it yourself.",
    ctaPrimary: "Begin her journey",
    ctaSecondary: "See how she remembers",
    annotation: "she's already three steps ahead",
    chip1: "she remembers the pattern",
    chip2: "an opportunity, quietly held",
    scrollCue: "Her memory begins below",
    sectionIndex: "01 — Memory",
  },
  memory: {
    eyebrow: "Memory",
    heading: "She used to keep it all in her head.",
    subhead:
      "Every pivot, every promise, every quiet decision made at midnight — Sakhi holds what you'd otherwise have to remember alone.",
    entries: [
      {
        label: "First quarter",
        moment:
          "You changed your pricing twice before you found the number that felt honest.",
        sakhi: "She remembers which one worked, and why.",
      },
      {
        label: "A slow month",
        moment: "You almost folded the offer that hadn't launched yet.",
        sakhi: "She remembers you didn't, and what changed your mind.",
      },
      {
        label: "Right now",
        moment:
          "You're building the next thing before the last thing has even settled.",
        sakhi: "She's already holding both.",
      },
    ],
    closing: "This is where memory starts becoming momentum.",
    voiceNote: {
      label: "Voice note · 11:42pm",
      transcript: "\"remind me what I decided about the wholesale price—\"",
      sakhi: "She already has.",
    },
    receipt: {
      label: "Wholesale invoice",
      amount: "₹4,200",
      sakhi: "Filed the moment it arrived.",
    },
    reminder: {
      text: "Call the fabric supplier back.",
      sakhi: "Already rescheduled twice — she didn't let it drop.",
    },
    journal: "Some days it's just her and the ledger.",
  },
  growth: {
    eyebrow: "Growth Signals",
    heading: "She isn't guessing anymore.",
    subhead:
      "Sakhi reads the pattern in your business before you've named it — and hands you the next right move.",
    signals: [
      {
        value: "3",
        unit: "",
        label: "quiet openings",
        detail: "spotted in your slow months before you noticed them yourself",
      },
      {
        value: "48",
        unit: "hrs",
        label: "her lead time",
        detail: "on the average opportunity, before it reaches the crowd",
      },
      {
        value: "12",
        unit: "×",
        label: "signals held",
        detail: "at once, so you only ever act on the one that matters",
      },
    ],
    chartCaption: "The shape of a year she's already seen coming.",
    extraNodes: [
      { label: "Seasonality", detail: "Festive demand, arriving six weeks before the rush." },
      { label: "Funding", detail: "A working-capital window, still open." },
    ],
    closing: "Foresight isn't magic. It's memory, pointed forward.",
  },
  opportunity: {
    eyebrow: "Opportunity Feed",
    heading: "What's worth her attention this week.",
    subhead:
      "Not a dashboard of everything — the handful of things Sakhi decided you should actually see.",
    lead: {
      tag: "Marketplace",
      headline: "A festive-season buyer is hunting for exactly what you make.",
      body: "Three sourcing calls closed this quarter on less proof than you already have.",
      meta: "Opens in 4 days",
    },
    mentor: {
      tag: "Mentor Match",
      headline: "Someone who solved your exact pricing problem, two years ago.",
      body: "Sakhi found her in a network you're not in yet.",
      meta: "Introduction ready",
    },
    scheme: {
      tag: "Government Scheme",
      headline: "A working-capital scheme closing its window this month.",
      body: "Eligibility already checked against your numbers.",
      meta: "Deadline: this month",
    },
    footerLink: "See what else she's watching",
  },
  action: {
    eyebrow: "Sakhi in Action",
    heading: "This is what it sounds like to be remembered.",
    subhead: "A real exchange, the kind that happens between two decisions — not a demo.",
    messages: [
      { from: "her", text: "I don't know if I should raise prices before the festive rush or after." },
      { from: "sakhi", text: "Last time you waited, you lost three weeks of margin waiting for ‘the right moment.’" },
      { from: "sakhi", text: "Raise it now, quietly. I'll tell you if anyone notices." },
      { from: "her", text: "Okay. Watching with you." },
    ],
    listening: "Listening",
    closing: "No dashboards. No forms. Just the conversation you'd have with someone who remembers everything.",
  },
  stories: {
    eyebrow: "Success Stories",
    heading: "Before it was a milestone, it was a Tuesday.",
    subhead:
      "The ordinary moments behind the wins — told the way they actually happened, not the way they look on a slide.",
    quotes: [
      {
        quote: "I stopped re-explaining my own business every time a decision needed making.",
        attribution: "A textile maker, three seasons in",
      },
      {
        quote: "She remembered the mentor call I'd forgotten I needed.",
        attribution: "A home-bakery founder, Pune",
      },
      {
        quote: "The scheme deadline I would have missed found me instead.",
        attribution: "A handloom weaver, Coimbatore",
      },
    ],
  },
  multilingual: {
    eyebrow: "Multilingual Experience",
    heading: "She speaks the way you actually think.",
    subhead: "Not translated after the fact — present in your language from the very first word.",
    line: "She remembers, in your own words.",
    closing: "Ten languages. One memory.",
  },
  start: {
    eyebrow: "For everything that comes next",
    headline: ["Stop carrying it", "*alone.*"],
    subhead: "Everything you've built deserves to be remembered on purpose.",
    ctaPrimary: "Begin her journey",
    annotation: "she's already listening",
  },
  footer: {
    tagline: "An AI growth partner, for the entrepreneur building alone.",
    copyright: "© 2026 Sakhi.",
  },
  lang: {
    selectorLabel: "Language",
  },
  login: {
    eyebrow: "Welcome back",
    heading: "What should Sakhi call you?",
    subhead: "No password, no forms — just tell her who's here, and she'll pick up exactly where you left off.",
    nameLabel: "Your name",
    namePlaceholder: "Seema",
    businessLabel: "Your business (optional)",
    businessPlaceholder: "Seema Silks",
    cta: "Enter your workspace",
    backToSite: "← Back to sakhi.ai",
  },
  dashboard: {
    shell: {
      logout: "Log out",
      nav: "Workspace",
    },
  },
};
