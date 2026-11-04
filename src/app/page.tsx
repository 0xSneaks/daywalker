import Link from "next/link";
import SunMark from "@/components/SunMark";
import Chip from "@/components/Chip";
import { FEATURES } from "@/lib/features";
import { REFERENCE_CONFIGS } from "@/lib/constants";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-line bg-panel p-6 sm:p-10">
        <div className="flex items-center gap-3">
          <SunMark size={44} />
          <span className="rounded-full border border-notice-line bg-notice-bg px-3 py-1 text-xs font-bold tracking-wide text-notice-text">
            BUILDING NOW — LAUNCHES NOT OPEN YET
          </span>
        </div>
        <h1 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
          The launchpad that walks in <span className="text-accent">daylight</span>.
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-dim">
          Pair anything with anything. Every mechanic on-chain, every fee published, every config
          verified before it&apos;s called a feature. No fake firsts. No dark mechanics. No payouts
          promised that haven&apos;t paid.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/mechanics" className="rounded-xl bg-accent px-5 py-3 font-bold text-stone-900">
            Read the mechanics
          </Link>
          <Link href="/configs" className="rounded-xl border border-line bg-bg px-5 py-3 font-bold">
            See the verified configs
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-extrabold">The Muse mechanics</h2>
        <p className="mt-1 text-dim">
          Every feature carries its honest label — the rail is real, it arrives through an
          integration, or it is still vision. Nothing in between.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <article key={f.title} className="rounded-2xl border border-line bg-panel p-5">
              <h3 className="font-bold">{f.title}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {f.tags.map((t) => (
                  <Chip key={t.tag + t.scope} tag={t.tag} scope={t.scope} />
                ))}
              </div>
              <p className="mt-3 text-[15px] text-dim">{f.blurb}</p>
              <Link href="/mechanics" className="mt-3 inline-block text-sm font-semibold text-accent">
                Proof &amp; limits →
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-3 text-sm text-dim">
          Evidence and full detail for every label: <Link className="font-semibold text-accent" href="/mechanics">Mechanics</Link>.
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-panel p-6">
        <h2 className="text-xl font-extrabold">How it works</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-2xl font-extrabold text-accent">1</p>
            <p className="mt-1 font-bold">A config is published</p>
            <p className="mt-1 text-[15px] text-dim">
              Quote asset, curve, fee schedule, vesting, graduation target — all written into an
              on-chain config account before any coin exists on it.
            </p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-accent">2</p>
            <p className="mt-1 font-bold">Coins launch on the curve</p>
            <p className="mt-1 text-[15px] text-dim">
              The anti-bundle tax starts high and steps down on the published schedule. Every trade
              pays the published fee, split exactly as the config says.
            </p>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-accent">3</p>
            <p className="mt-1 font-bold">Graduation to DAMM v2</p>
            <p className="mt-1 text-[15px] text-dim">
              At the config&apos;s graduation threshold, the pool migrates to a full Meteora DAMM v2
              pool. The threshold was public from the start.
            </p>
          </div>
        </div>
        <Link href="/how" className="mt-4 inline-block font-semibold text-accent">
          The full walkthrough →
        </Link>
      </section>

      <section className="rounded-2xl border border-line bg-panel p-6">
        <h2 className="text-xl font-extrabold">Published schedules, not promises</h2>
        <p className="mt-1 text-dim">
          The anti-bundle fee scheduler is live in production today. These are the real schedules
          decoded from live on-chain configs — Daywalker&apos;s own configs publish here before its
          first coin exists.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {REFERENCE_CONFIGS.map((c) => (
            <div key={c.address} className="rounded-xl border border-line bg-bg p-4">
              <p className="font-bold">{c.quoteSymbol} quote</p>
              <p className="mt-1 text-[15px]">
                Tax starts at <b>{c.cliffFee}</b>, steps down to a <b>{c.floorFee}</b> floor.
              </p>
              <p className="mt-1 text-sm text-dim">{c.schedule}.</p>
            </div>
          ))}
        </div>
        <Link href="/configs" className="mt-4 inline-block font-semibold text-accent">
          Verify them yourself on the Configs page →
        </Link>
      </section>
    </div>
  );
}
