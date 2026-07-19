import type { ExecutiveRole } from "@/components/shared/executive-card";
import type { AvatarPresence } from "@/components/ui/avatar";

export interface SeatedExecutive {
  id: string;
  name: string;
  role: ExecutiveRole;
  presence: AvatarPresence;
  vote?: "yes" | "no" | "conditional";
}

export interface TranscriptMessage {
  id: string;
  speaker: string;
  role: ExecutiveRole | "Founder";
  message: string;
  timestamp: string;
}

export interface PastSession {
  id: string;
  startupName: string;
  oneLiner: string;
  date: string;
  status: "completed" | "in-progress" | "scheduled";
  investmentScore?: number;
}

export interface FollowUpReply {
  executiveId: string;
  speaker: string;
  role: ExecutiveRole;
  message: string;
}
