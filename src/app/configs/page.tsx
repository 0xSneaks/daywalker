import { CONFIGS_READ_NOTE, DAYWALKER_CONFIGS_CREATED, DBC_PROGRAM, REFERENCE_CONFIGS, type ReferenceConfig } from "@/lib/constants";

export const metadata = {
  title: "Configs — Daywalker",
  description: "The on-chain configs behind the mechanics: addresses, fee schedules, and graduation thresholds, decoded from live chain reads.",
};

function solscan(address: string) {
  return `https://solscan.io/account/${address}`;
}

function ConfigCard({ c }: { c: ReferenceConfig }) {
  const rows: [string, string][] = [
    ["Operator", c.operator],
    ["Quote mint", c.quoteMint],
    ["Fee claimer", c.feeClaimer],
    ["Tax at activation (cliff)", c.cliffFee],
    ["Floor fee", c.floorFee],
    ["Step-down schedule", c.schedule],
    ["Creator fee share", c.creatorFeeShare],
    ["Graduation threshold", c.graduationThreshold],
    ["Migration target", c.migration],
    ["Dynamic (volatility) fee", c.dynamicFee],
  ];
  return (
    <article className="rounded-2xl border border-line bg-panel p-6">
      <h2 className="text-lg font-extrabold">{c.label}</h2>
      <p className="mt-1 break-all font-mono text-sm">
        <a className="text-accent" href={solscan(c.address)} target="_blank" rel="noreferrer">
          {c.address}
        </a>
      </p>
      <dl className="mt-4 space-y-2">
        {rows.map(([k, v]) => (
          <div key={k} className="flex flex-wrap gap-x-3 text-[15px]">
            <dt className="w-52 shrink-0 font-semibold">{k}</dt>
            <dd className="min-w-0 break-all text-dim">{v}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export default function ConfigsPage() {
  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-line bg-panel p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold sm:text-3xl">Configs — read them yourself</h1>
        <p className="mt-2 max-w-2xl text-dim">
          A launchpad config is an account on the Meteora DBC program (
          <span className="font-mono text-sm">{DBC_PROGRAM}</span>) that fixes a quote asset, a fee
          schedule, fee shares, and a graduation threshold before any coin launches on it. This page
          exists so nobody has to take Daywalker&apos;s word for any number: every figure below is
          decoded from the config account itself.
        </p>
        <p className="mt-3 rounded-xl bg-bg px-4 py-3 text-sm">{CONFIGS_READ_NOTE}</p>
      </section>

      {!DAYWALKER_CONFIGS_CREATED && (
        <section className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
          <h2 className="font-extrabold text-amber-900">Daywalker&apos;s own configs: not created yet</h2>
          <p className="mt-1 text-amber-900/80">
            Daywalker has not created its configs yet, so there are no Daywalker fee numbers to
            publish. When they are created, their addresses and full decoded schedules appear on
            this page — before the first coin launches on them. The two configs below are live
            production configs run by others; they are shown as references because they prove the
            rails this site describes.
          </p>
        </section>
      )}

      {REFERENCE_CONFIGS.map((c) => (
        <ConfigCard key={c.address} c={c} />
      ))}
    </div>
  );
}
