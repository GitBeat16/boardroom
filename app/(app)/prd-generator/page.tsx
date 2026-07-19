import { SectionHeader } from "@/components/shared/section-header";
import { PrdViewer } from "@/features/prd-generator/components/prd-viewer";

export default function PrdGeneratorPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Studio"
        title="PRD generator"
        description="A build-ready spec for whatever the board flagged as the highest-leverage fix."
      />
      <PrdViewer />
    </div>
  );
}
