import type { RailTag } from "@/lib/features";

const STYLES: Record<RailTag, string> = {
  "RAILS EXIST": "border-chip-green-line bg-chip-green-bg text-chip-green-text",
  "VIA INTEGRATION": "border-chip-blue-line bg-chip-blue-bg text-chip-blue-text",
  VISION: "border-chip-violet-line bg-chip-violet-bg text-chip-violet-text",
};

export default function Chip({ tag, scope }: { tag: RailTag; scope?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold tracking-wide ${STYLES[tag]}`}
    >
      {tag}
      {scope ? <span className="font-medium normal-case tracking-normal opacity-80">· {scope}</span> : null}
    </span>
  );
}
