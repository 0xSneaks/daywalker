import Link from "next/link";
import Chip from "@/components/Chip";
import ProofDrawer from "@/components/ProofDrawer";
import { FEATURES } from "@/lib/features";

export const metadata = {
  title: "Launch — Daywalker",
  description: "Daywalker launches are not open yet. What creators will control, labeled honestly.",
};

export default function LaunchPage() {
  const creatorControls = FEATURES.find((f) => f.title === "Creator controls");
  const feeModes = FEATURES.find((f) => f.title.startsWith("Fee modes"));
  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
        <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold tracking-wide text-amber-800">
          NOT OPEN YET
        </span>
        <h1 className="mt-4 text-2xl font-extrabold sm:text-3xl">Launches are not open yet</h1>
        <p className="mt-2 max-w-2xl text-dim">
          Daywalker&apos;s own configs have not been created, so there is nothing to launch on —
          and this page will not pretend otherwise. When the configs exist, their addresses and
          complete fee schedules publish on the{" "}
          <Link className="font-semibold text-accent" href="/configs">Configs page</Link> first.
          Only then does this page become a launch form.
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-panel p-6">
        <h2 className="font-extrabold">What creators will control</h2>
        {creatorControls && (
          <>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {creatorControls.tags.map((t) => (
                <Chip key={t.tag + t.scope} tag={t.tag} scope={t.scope} />
              ))}
            </div>
            <p className="mt-3 text-dim">{creatorControls.blurb}</p>
            <ProofDrawer feature={creatorControls} />
          </>
        )}
        {feeModes && (
          <>
            <h3 className="mt-5 font-bold">Fee mode at launch</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {feeModes.tags.map((t) => (
                <Chip key={t.tag + t.scope} tag={t.tag} scope={t.scope} />
              ))}
            </div>
            <p className="mt-3 text-dim">{feeModes.blurb}</p>
            <ProofDrawer feature={feeModes} />
          </>
        )}
      </section>

      <section className="rounded-2xl border border-line bg-panel p-6">
        <h2 className="font-extrabold">What it will cost</h2>
        <p className="mt-2 text-dim">
          Creating a config costs about 0.00597 SOL in account rent — that is a Solana network
          figure, read from live config accounts, not a Daywalker fee. Per-launch costs publish
          with the configs, before the first launch, in the same place.
        </p>
      </section>
    </div>
  );
}
