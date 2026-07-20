"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { prdSections } from "@/features/prd-generator/mock";

export function PrdViewer() {
  const [activeId, setActiveId] = useState(prdSections[0]!.id);

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {prdSections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setActiveId(section.id)}
            className={cn(
              "shrink-0 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors lg:w-full",
              section.id === activeId ? "bg-primary/12 text-primary" : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground",
            )}
          >
            {section.title}
          </button>
        ))}
      </nav>

      <Card className="p-8">
        {prdSections
          .filter((section) => section.id === activeId)
          .map((section) => (
            <article key={section.id} className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-primary">PRD · Loadbay usage pricing</p>
              <h2 className="font-display text-2xl font-medium tracking-tight">{section.title}</h2>
              <p className="text-base leading-relaxed text-foreground/90">{section.content}</p>
            </article>
          ))}
      </Card>
    </div>
  );
}
