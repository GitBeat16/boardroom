import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScoreCard } from "@/components/shared/score-card";
import { seatedExecutives } from "@/features/boardroom/mock";

export function ConsensusPanel() {
  const votes = seatedExecutives.filter((e) => e.vote);
  const yes = votes.filter((v) => v.vote === "yes").length;
  const no = votes.filter((v) => v.vote === "no").length;
  const conditional = votes.filter((v) => v.vote === "conditional").length;
  const score = Math.round((yes / votes.length) * 100);

  return (
    <Card className="p-0">
      <CardHeader>
        <CardTitle className="text-base">Consensus so far</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-6">
        <ScoreCard label="Running score" score={score} verdict={`${yes} yes · ${conditional} conditional · ${no} no`} size="md" />
        <div className="grid w-full grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-surface-elevated p-2.5">
            <p className="font-mono text-base font-semibold text-success">{yes}</p>
            <p className="text-[0.7rem] text-muted-foreground">Yes</p>
          </div>
          <div className="rounded-lg bg-surface-elevated p-2.5">
            <p className="font-mono text-base font-semibold text-warning">{conditional}</p>
            <p className="text-[0.7rem] text-muted-foreground">Conditional</p>
          </div>
          <div className="rounded-lg bg-surface-elevated p-2.5">
            <p className="font-mono text-base font-semibold text-destructive">{no}</p>
            <p className="text-[0.7rem] text-muted-foreground">No</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
