import Chip from "@/components/Chip";
import ProofDrawer from "@/components/ProofDrawer";
import { FEATURES } from "@/lib/features";

export const metadata = {
  title: "Mechanics — Daywalker",
  description: "Every Daywalker mechanic with its honest label: RAILS EXIST, VIA INTEGRATION, or VISION — and the evidence behind each label.",
};

export default function MechanicsPage() {
  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold sm:text-3xl">Mechanics, labeled honestly</h1>
        <p className="mt-2 max-w-2xl text-dim">
          Most launchpads advertise mechanics nobody can check. Daywalker&apos;s rule is the
          opposite: a feature is called real only when its rail has been verified — read on-chain
          or in the program&apos;s source. Everything else is labeled with what it actually is.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-lg bg-bg px-3 py-2"><b>RAILS EXIST</b> — verified on-chain or in program source.</span>
          <span className="rounded-lg bg-bg px-3 py-2"><b>VIA INTEGRATION</b> — arrives through a named integration, wired before it is advertised.</span>
          <span className="rounded-lg bg-bg px-3 py-2"><b>VISION</b> — the direction, not a feature. No availability is claimed.</span>
        </div>
      </section>

      {FEATURES.map((f) => (
        <article key={f.title} className="rounded-2xl border border-line bg-panel p-6">
          <h2 className="text-lg font-extrabold">{f.title}</h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {f.tags.map((t) => (
              <Chip key={t.tag + t.scope} tag={t.tag} scope={t.scope} />
            ))}
          </div>
          <p className="mt-3 text-dim">{f.blurb}</p>
          <ProofDrawer feature={f} />
        </article>
      ))}

      <article className="rounded-2xl border border-line bg-panel p-6">
        <h2 className="text-lg font-extrabold">The Receipts</h2>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Chip tag="VISION" scope="per-token terms-vs-chain diff" />
        </div>
        <p className="mt-3 text-dim">
          The design pillar this site is being built toward: every coin page shows the coin&apos;s
          published launch terms beside its actual on-chain config — fee mode, the tax schedule and
          its live step-down state, the creator&apos;s customs — with any mismatch flagged red,
          automatically. A launchpad&apos;s claims stop being copy and become a diff anyone can
          audit.
        </p>
        <p className="mt-3 rounded-xl bg-bg px-4 py-3 text-sm">
          <b>Why this label:</b> there are no Daywalker coins yet, so there is nothing to diff.
          The Receipts surface ships with the first launch, against the configs published on the
          Configs page — not before, and not as a mock-up dressed as data.
        </p>
      </article>
    </div>
  );
}
