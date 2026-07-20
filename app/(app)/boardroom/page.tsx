import { MeetingControls } from "@/features/boardroom/components/meeting-controls";
import { SeatingGrid } from "@/features/boardroom/components/seating-grid";
import { TranscriptFeed } from "@/features/boardroom/components/transcript-feed";
import { ConsensusPanel } from "@/features/boardroom/components/consensus-panel";
import { PitchHistory } from "@/features/boardroom/components/pitch-history";

export default function BoardroomPage() {
  return (
    <div className="space-y-6">
      <MeetingControls />
      <SeatingGrid />
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <TranscriptFeed />
        <div className="space-y-6">
          <ConsensusPanel />
          <PitchHistory />
        </div>
      </div>
    </div>
  );
}
