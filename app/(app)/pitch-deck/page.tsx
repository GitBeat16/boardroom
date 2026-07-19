import { SectionHeader } from "@/components/shared/section-header";
import { DeckViewer } from "@/features/pitch-deck/components/deck-viewer";

export default function PitchDeckPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Studio"
        title="Pitch deck"
        description="Restructured around what the board actually asked, not just your original outline."
      />
      <DeckViewer />
    </div>
  );
}
