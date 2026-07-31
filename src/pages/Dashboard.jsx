import DashboardShell from "../components/dashboard/DashboardShell";

/**
 * Checkpoint 1 placeholder — real sections (GreetingHero, Today's Focus,
 * Memory Snapshot, Growth Compass, Opportunity Feed, Business Timeline,
 * Quick Workspace, Today's Conversation) land here checkpoint by checkpoint.
 */
export default function Dashboard() {
  return (
    <DashboardShell>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 py-32 text-center">
        <p className="font-display italic text-display-sm text-ink-600">
          Her workspace is being drawn — one section at a time.
        </p>
      </div>
    </DashboardShell>
  );
}
