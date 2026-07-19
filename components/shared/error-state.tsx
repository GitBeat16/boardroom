import { AlertTriangle, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  retryLabel?: string;
  compact?: boolean;
  className?: string;
}

/**
 * Errors state what happened and how to fix it — never "Oops!" or vague
 * apologies. Every ErrorState should offer a retry action where one is
 * meaningful; if it isn't, say what to do instead via `description`.
 */
export function ErrorState({
  title = "This section didn't load",
  description = "Check your connection and try again. If it keeps happening, the board's data service may be delayed.",
  onRetry,
  retryLabel = "Retry",
  compact,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-xl border border-destructive/30 bg-destructive/5 text-center",
        compact ? "p-6" : "p-12",
        className,
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-full bg-destructive/15 text-destructive">
        <AlertTriangle className="size-5" />
      </span>
      <div className="space-y-1">
        <p className="font-medium text-foreground">{title}</p>
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      </div>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          <RotateCw className="size-3.5" />
          {retryLabel}
        </Button>
      )}
    </div>
  );
}
