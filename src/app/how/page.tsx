import { DBC_PROGRAM, WXMR_FACTS, WXMR_MINT } from "@/lib/constants";

export const metadata = {
  title: "How it works — Daywalker",
  description: "How a Daywalker launch works end to end: published configs, bonding-curve trading with a step-down anti-bundle tax, and graduation to DAMM v2.",
};

export default function HowPage() {
  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold sm:text-3xl">How it works</h1>
        <p className="mt-2 max-w-2xl text-dim">
          Daywalker is an interface on Meteora&apos;s Dynamic Bonding Curve program
          (<span className="font-mono text-sm">{DBC_PROGRAM}</span>) with its own partner configs.
          There is no custom Daywalker program and no hidden machinery: if a mechanic matters, it
          lives in a config account you can read.
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-panel p-6">
        <h2 className="font-extrabold">1 · Everything starts with a config</h2>
        <p className="mt-2 text-dim">
          A config fixes, in advance and on-chain: the quote asset (SOL, wXMR, or another standard
          token), the bonding-curve shape, the trade-tax schedule, creator and pad fee shares,
          liquidity vesting, and the graduation threshold. Configs are immutable once created — a
          different mechanic means a new config, published before anything launches on it.
        </p>
        <h2 className="mt-5 font-extrabold">2 · The anti-bundle tax runs the first moments</h2>
        <p className="mt-2 text-dim">
          When a pool activates, the trade tax starts at its cliff — on live configs today that is
          as high as 99% — and steps down automatically, period by period, to the floor fee. The
          schedule (start, step size, period length, floor) is in the config, so anyone can compute
          the exact tax at any moment. Bundlers pay for the first slots; patient buyers pay the
          floor. Said plainly: anyone — bundler included — who is willing to wait out the short
          window pays the floor too. The tax prices immediacy; it does not ban bundles.
        </p>
        <h2 className="mt-5 font-extrabold">3 · Fees split exactly as published</h2>
        <p className="mt-2 text-dim">
          The config carries the creator&apos;s share of the trading fee; the remainder splits
          between the pad and the Meteora protocol. Creator and pad fees are claimed on-chain
          against the config — there is no off-chain ledger to trust. Holder-rewards mode adds a
          distributor on top and ships only after a full payout cycle has been executed and linked
          as proof.
        </p>
        <h2 className="mt-5 font-extrabold">4 · Graduation</h2>
        <p className="mt-2 text-dim">
          When a pool&apos;s reserves reach the config&apos;s graduation threshold, it migrates to a
          full Meteora DAMM v2 pool. The threshold was in the config from before the coin existed.
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-panel p-6">
        <h2 className="font-extrabold">About wXMR quotes</h2>
        <p className="mt-2 text-dim">
          wXMR (<span className="font-mono text-sm">{WXMR_MINT}</span>) is Monero wrapped on
          Solana by a single custodial bridge operator. {WXMR_FACTS.readNote} That means wXMR
          carries operator risk that SOL does not: the operator can mint, and the bridge&apos;s
          custody is the backing. Daywalker quotes in wXMR because the rail is real and the demand
          is real — and labels the risk on every page rather than hiding it.
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-panel p-6">
        <h2 className="font-extrabold">The honesty rules</h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-dim">
          <li>Every feature labeled RAILS EXIST / VIA INTEGRATION / VISION — on the site, not in a footnote.</li>
          <li>Fee figures come from config reads, never from marketing copy.</li>
          <li>No &ldquo;first&rdquo; claims that aren&apos;t true, no implied endorsements, no APY numbers without a live integration behind them.</li>
          <li>No payout mode is advertised before a real payout has been executed and can be linked.</li>
        </ul>
      </section>
    </div>
  );
}
