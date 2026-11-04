// Daywalker — constants.
// Fee figures and config facts in this file come from on-chain reads performed
// 2026-11-03 (Solana mainnet, slot 465,108,709). They are reference configs —
// Daywalker's own configs do not exist yet, and this file must not pretend
// otherwise. When Daywalker's configs are created, their addresses replace
// the NOT_CREATED state below and the decoded values get re-read from chain.

export const RISK_BANNER =
  "bridged/quote assets carry operator risk where applicable. Meme coins can go to zero. Only use what you can lose.";

export const FOOTER_LINE =
  "Daywalker is an independent launchpad interface built on Meteora's Dynamic Bonding Curve program. Not affiliated with Meteora or mogz. Nothing here is financial advice.";

export const DBC_PROGRAM = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN";
export const WXMR_MINT = "WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp";
export const SOL_MINT = "So11111111111111111111111111111111111111112";

export const WXMR_FACTS = {
  mintAuthority: "2yy692W8JX511d63i5BdKHqULJCnQyBYrfnkavnzjZuE",
  freezeAuthority: null as string | null,
  decimals: 12,
  readNote: "Read on-chain 2026-11-03: mint authority is set (held by the bridge operator); freeze authority is none.",
};

export interface ReferenceConfig {
  label: string;
  operator: string;
  address: string;
  quoteSymbol: string;
  quoteMint: string;
  feeClaimer: string;
  cliffFee: string;
  floorFee: string;
  schedule: string;
  creatorFeeShare: string;
  graduationThreshold: string;
  migration: string;
  dynamicFee: string;
}

// Live production configs, decoded 2026-11-03 from the DBC program's own
// account layout. They prove the rails; they are NOT Daywalker's configs.
export const REFERENCE_CONFIGS: ReferenceConfig[] = [
  {
    label: "SOL quote — reference config",
    operator: "operated by mogz (reference only — not Daywalker's)",
    address: "B646J17uWbihX7GtAW3PJW7iNFFiHCTef2XfAWQBQgZW",
    quoteSymbol: "SOL",
    quoteMint: SOL_MINT,
    feeClaimer: "W55q6P8rJESfavd1RVDxYb4QVbLpCsrwD2EoEEj2PG2",
    cliffFee: "99.0%",
    floorFee: "0.50%",
    schedule: "Linear step-down — 1 period × 1 slot from the pool's activation",
    creatorFeeShare: "75% of the post-protocol fee share",
    graduationThreshold: "≈ 84.95 SOL",
    migration: "DAMM v2",
    dynamicFee: "off",
  },
  {
    label: "wXMR quote — reference config",
    operator: "operator unknown (reference only — not Daywalker's)",
    address: "FHWgd6phRkeNf6UvxkJc4P3xxjo4yPYxQo1bmrSR5axp",
    quoteSymbol: "wXMR",
    quoteMint: WXMR_MINT,
    feeClaimer: "GWcWWfkwh8HnTgcz74ACjqokyZpGgUC8zXbSSRTeHP1x",
    cliffFee: "49.99%",
    floorFee: "1.00%",
    schedule: "Linear step-down — 3 periods × 1 second from the pool's activation",
    creatorFeeShare: "75% of the post-protocol fee share",
    graduationThreshold: "13 wXMR",
    migration: "DAMM v2",
    dynamicFee: "off",
  },
];

export const CONFIGS_READ_NOTE =
  "Decoded from live on-chain config accounts on 2026-11-03 (Solana slot 465,108,709), using the DBC program's published account layout. Verify any figure yourself from the config address — that is the point of this page.";

export const DAYWALKER_CONFIGS_CREATED = false;
