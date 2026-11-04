import type { RailTag } from "@/lib/features";

const STYLES: Record<RailTag, string> = {
  "RAILS EXIST": "border-emerald-600/40 bg-emerald-50 text-emerald-800",
  "VIA INTEGRATION": "border-sky-600/40 bg-sky-50 text-sky-800",
  VISION: "border-violet-600/40 bg-violet-50 text-violet-800",
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
