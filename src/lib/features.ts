// The Muse mechanics, each carrying its honest label — the same labels the
// announcement thread promised: RAILS EXIST / VIA INTEGRATION / VISION.
// Tags reflect the rails verification of 2026-11-03 (see the goal's
// v1-scope.md). A feature is never labeled RAILS EXIST on this site unless
// the rail was read on-chain or in program source.
//
// Every feature also carries:
// - proof: falsifiable pointers (program / config / mint / tx) a skeptic can
//   re-read independently — rendered as an expandable proof drawer.
// - doesNotProtect: what the mechanic does NOT do. Publishing the limits is
//   part of the mechanic.

export type RailTag = "RAILS EXIST" | "VIA INTEGRATION" | "VISION";

export interface ProofItem {
  label: string;
  value: string;
  href?: string;
}

export interface Feature {
  title: string;
  tags: { tag: RailTag; scope: string }[];
  blurb: string;
  evidence: string;
  proof: ProofItem[];
  doesNotProtect: string;
}

const solscanAccount = (a: string) => `https://solscan.io/account/${a}`;
const DBC = { label: "DBC program", value: "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN", href: solscanAccount("dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN") };
const SOL_CFG = { label: "SOL reference config", value: "B646J17uWbihX7GtAW3PJW7iNFFiHCTef2XfAWQBQgZW", href: solscanAccount("B646J17uWbihX7GtAW3PJW7iNFFiHCTef2XfAWQBQgZW") };
const WXMR_CFG = { label: "wXMR reference config", value: "FHWgd6phRkeNf6UvxkJc4P3xxjo4yPYxQo1bmrSR5axp", href: solscanAccount("FHWgd6phRkeNf6UvxkJc4P3xxjo4yPYxQo1bmrSR5axp") };
const WXMR_MINT_P = { label: "wXMR mint", value: "WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp", href: `https://solscan.io/token/WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp` };

export const FEATURES: Feature[] = [
  {
    title: "Pair anything with anything",
    tags: [
      { tag: "RAILS EXIST", scope: "SOL · wXMR · standard SPL quotes" },
      { tag: "VISION", scope: "tokenized stocks · RWA · prediction quotes" },
    ],
    blurb:
      "Every launch chooses its quote asset, and a launchpad config is created per quote on Meteora's Dynamic Bonding Curve program — a coin can be priced in SOL, in wXMR, or in another standard token. One boundary is deliberate: launches happen only on Daywalker's own published configs, so the quote list is closed and readable on the Configs page — a creator cannot pair against an arbitrary token they control and call it verified. Exotic quotes — tokenized or synthetic versions of off-chain assets — are a vision item only: no availability is claimed for them anywhere on this site.",
    evidence:
      "Verified 2026-11-03: live configs exist with wrapped SOL and with wXMR as the quote mint, and creating a new config is a permissionless instruction in the DBC program — no venue deal required.",
    proof: [DBC, SOL_CFG, WXMR_CFG, WXMR_MINT_P],
    doesNotProtect:
      "a quote asset's own operator or issuer. wXMR's bridge operator holds its mint authority and custody — Daywalker cannot verify or insure the bridge. Nor does a published quote list make any quote asset safe; it makes the list auditable.",
  },
  {
    title: "Custom taxes on every launch",
    tags: [{ tag: "RAILS EXIST", scope: "per-config trade tax" }],
    blurb:
      "The trade tax is not a pad-wide constant. It is a parameter of the launch's config, chosen before the coin exists, written into an on-chain account anyone can read, and immutable for that config afterwards. What was published is what runs.",
    evidence:
      "The tax lives in the config account's base-fee fields, decoded from two live configs on 2026-11-03. A different tax means a different config — publicly, in advance.",
    proof: [SOL_CFG, WXMR_CFG],
    doesNotProtect:
      "traders from a tax that is published but simply bad for them. Publishing makes a tax visible, not fair — read the schedule on the Configs page before trading a coin.",
  },
  {
    title: "The anti-bundle tax",
    tags: [{ tag: "RAILS EXIST", scope: "DBC fee scheduler, decoded live" }],
    blurb:
      "The tax starts HIGH at the moment a pool activates and steps down on a schedule published before the coin exists. Bundlers and snipers who need the first slots pay for the privilege; real buyers wait a beat and pay the floor fee. The schedule is part of the config — it cannot be changed after launch, by anyone. The tax is a fee like any other: it splits between creator, pad, and protocol exactly as the config publishes. It is not burned.",
    evidence:
      "Live today on the reference configs on the Configs page: the SOL config steps 99.0% down to a 0.50% floor in a single slot-period; the wXMR config steps 49.99% down to a 1.00% floor over three one-second periods.",
    proof: [SOL_CFG, WXMR_CFG],
    doesNotProtect:
      "against a patient bundler. The window is short by design — anyone willing to wait it out pays the floor fee like everyone else. The tax prices immediacy; it does not ban bundles, and it does not stop insiders who simply wait.",
  },
  {
    title: "Creator controls",
    tags: [
      { tag: "RAILS EXIST", scope: "curve · vesting · anti-sniper window · fee split · graduation target" },
      { tag: "VISION", scope: "whitelists" },
    ],
    blurb:
      "Creators control the bonding curve shape, the liquidity vesting schedule, the anti-sniper window (the fee schedule above), the fee split, and the graduation target. Each control is a config field, set before launch and readable by anyone. Whitelists have no rail in the underlying program today, so they are labeled vision rather than promised.",
    evidence:
      "Curve (20-point distribution), partner/creator vesting, fee split, and migration threshold are all fields of the on-chain config account, read from program source and live accounts on 2026-11-03.",
    proof: [DBC, SOL_CFG, WXMR_CFG],
    doesNotProtect:
      "against a creator's other wallets, or against settings that favor the creator inside the published fields — vesting can be set to zero and a split can favor the creator. A vesting schedule shows locked supply; it says nothing about supply the creator holds elsewhere. The protection is that all of it is readable before you buy, not that it is generous.",
  },
  {
    title: "Fee modes: creator, holders, split",
    tags: [
      { tag: "RAILS EXIST", scope: "creator · split" },
      { tag: "VIA INTEGRATION", scope: "holders" },
    ],
    blurb:
      "The trading fee can flow to the creator, be split between creator and pad, or be routed to holders. Creator and split modes are native: the split percentages sit in the config and fees are claimed on-chain. Holders mode needs a distributor that collects and pays out pro-rata — it ships on Daywalker only after one full distribution has been executed end-to-end and can be linked as proof. No payouts promised that haven't paid.",
    evidence:
      "Holders mode is already proven on partner rails — a coin launched in holders mode on mogz on 2026-11-03 (POLY, mint CdLQQNftR6up9eSBHBm14d4pktz58zQk8SPSwnXGmogz). Daywalker's own distributor is the integration work.",
    proof: [
      { label: "POLY mint (holders mode, live on partner rails)", value: "CdLQQNftR6up9eSBHBm14d4pktz58zQk8SPSwnXGmogz", href: "https://solscan.io/token/CdLQQNftR6up9eSBHBm14d4pktz58zQk8SPSwnXGmogz" },
      { label: "POLY creation transaction", value: "5posjk8Zx6nBc5L7W2j5sPigCqGWP9dPGD4VAQNYt7jUogzJhMoJb8AvD5g2LVHM1SqXfUrBcBLSPg872tvfw47L", href: "https://solscan.io/tx/5posjk8Zx6nBc5L7W2j5sPigCqGWP9dPGD4VAQNYt7jUogzJhMoJb8AvD5g2LVHM1SqXfUrBcBLSPg872tvfw47L" },
      SOL_CFG,
    ],
    doesNotProtect:
      "against a creator farming their own holders mode by holding supply through other wallets, or against a distributor being trusted before its first proven payout. On Daywalker the mode stays labeled VIA INTEGRATION until a distribution record exists to link here.",
  },
  {
    title: "House-token pairing",
    tags: [
      { tag: "RAILS EXIST", scope: "pairing new launches against a base token" },
      { tag: "VISION", scope: "automatic exposure for every holder" },
    ],
    blurb:
      "New launches can be paired against a base token, the way wXMR-quoted coins are paired against wXMR today. What is not claimed: that holding the base token automatically delivers a piece of every new launch. That distribution machinery does not exist yet, so it is labeled vision until it is built and shown working with real distributions — mechanics shown, not sloganned.",
    evidence:
      "Pairing against a non-SOL quote is proven by the live wXMR config and its pools. No distribution contract or completed holder distribution exists yet — hence the split label.",
    proof: [
      WXMR_CFG,
      { label: "A live wXMR pool bound to that config", value: "Hg2gP7Lpk68TarQDmrCxJgT5TWBk3gLjXkuQ5zgHuL2", href: solscanAccount("Hg2gP7Lpk68TarQDmrCxJgT5TWBk3gLjXkuQ5zgHuL2") },
    ],
    doesNotProtect:
      "against the base token's own market risk, or against new launches failing. Pairing is pricing, not endorsement — a launch paired against a base token can still go to zero.",
  },
  {
    title: "Staking",
    tags: [{ tag: "VIA INTEGRATION", scope: "named integration, not yet wired" }],
    blurb:
      "Staking arrives through a named integration, wired and verified before it is advertised. There are no APY figures on this site, and there will not be until a live integration produces real ones.",
    evidence: "No staking rail exists in the DBC program itself; this label stays until an integration is live.",
    proof: [],
    doesNotProtect:
      "against anything yet — it is not live. No staking claim anywhere on this site describes a working feature.",
  },
];
