"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Single composition point for every provider the app needs. As real
 * providers are added later (query client, auth session, websocket for
 * live boardroom transcripts) they should be composed here, not in
 * `app/layout.tsx`, so the root layout never grows into a junk drawer.
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={150}>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
