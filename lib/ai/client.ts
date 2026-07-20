/**
 * The one place the app calls out to an LLM. `board-orchestrator.ts`
 * calls `generateExecutiveReply` once per seated executive; nothing else
 * in the app should import an AI SDK directly.
 *
 * ── This is a stub. Wire up a real call below. ───────────────────────────
 *
 *   1. `npm install @anthropic-ai/sdk`
 *   2. Replace the body of `generateExecutiveReply` with:
 *
 *      import Anthropic from "@anthropic-ai/sdk";
 *      import { serverEnv } from "@/lib/server/env";
 *
 *      const anthropic = new Anthropic({ apiKey: serverEnv.anthropicApiKey });
 *
 *      export async function generateExecutiveReply(input: ExecutiveReplyInput) {
 *        const response = await anthropic.messages.create({
 *          model: "claude-sonnet-4-6",
 *          max_tokens: 400,
 *          system: input.systemPrompt,
 *          messages: input.conversation.map((m) => ({
 *            role: m.role === "founder" ? "user" : "assistant",
 *            content: m.content,
 *          })),
 *        });
 *        const textBlock = response.content.find((b) => b.type === "text");
 *        return textBlock && textBlock.type === "text" ? textBlock.text : "";
 *      }
 */

export interface ExecutiveReplyInput {
  /** Built from the executive's persona — see lib/ai/executives.ts. */
  systemPrompt: string;
  /** Prior transcript, oldest first. */
  conversation: Array<{ role: "founder" | "executive"; content: string }>;
}

export async function generateExecutiveReply(_input: ExecutiveReplyInput): Promise<string> {
  throw new Error(
    "generateExecutiveReply() is a stub — wire up @anthropic-ai/sdk in lib/ai/client.ts before calling this.",
  );
}
