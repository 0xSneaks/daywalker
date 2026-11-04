import type { Feature } from "@/lib/features";

// The proof drawer: every mechanic's label opens to the falsifiable pointers
// behind it (program / config / mint / transaction) plus an explicit
// "does not protect against" line. One component, used identically wherever
// a mechanic is presented.
export default function ProofDrawer({ feature }: { feature: Feature }) {
  return (
    <details className="group mt-3 rounded-xl border border-line bg-bg">
      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-bold marker:hidden">
        Proof &amp; limits <span className="font-normal text-dim">— open the receipts</span>
        <span className="float-right text-dim transition-transform group-open:rotate-180">▾</span>
      </summary>
      <div className="space-y-3 px-4 pb-4 text-sm">
        <p>
          <b>Why this label:</b> {feature.evidence}
        </p>
        {feature.proof.length > 0 ? (
          <ul className="space-y-1.5">
            {feature.proof.map((p) => (
              <li key={p.label + p.value} className="break-all">
                <span className="font-semibold">{p.label}:</span>{" "}
                {p.href ? (
                  <a className="font-mono text-[13px] text-accent" href={p.href} target="_blank" rel="noreferrer">
                    {p.value}
                  </a>
                ) : (
                  <span className="font-mono text-[13px]">{p.value}</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-dim">
            No on-chain proof exists yet — that is exactly why this mechanic is not labeled RAILS
            EXIST. When the rail or integration is live, its pointers appear here.
          </p>
        )}
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-red-900">
          <b>Does not protect against:</b> {feature.doesNotProtect}
        </p>
        <p className="text-xs text-dim">
          Values behind these pointers were read on-chain on 2026-11-03. The pointers are the
          proof — re-read them yourself; the chain, not this page, is the source of truth.
        </p>
      </div>
    </details>
  );
}
