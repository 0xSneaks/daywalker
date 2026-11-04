<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Daywalker — project rules

Daywalker is a Solana launchpad ("the launchpad that walks in daylight") built
on Meteora's Dynamic Bonding Curve program with its OWN partner configs.
Site v1 is **informational only**: no launch or trade functions are wired to
anything real. Scaffolded from the AnonPad codebase (Next 16 + Tailwind v4).

## Names and copy law
- Product name is **Daywalker**. Never "Ombro" (rug-associated). No brand/IP
  names on house coins.
- Every feature carries its honest label — RAILS EXIST / VIA INTEGRATION /
  VISION — exactly as tagged in `src/lib/features.ts`. A feature is never
  labeled RAILS EXIST unless the rail was read on-chain or in program source.
- No fake "first" claims (12 DBC wXMR pools and Ombro's 46 pump coins already
  exist). No APY figures. No payout promises that haven't paid.
- Fee figures are never hand-typed into copy: they come from config reads.
  Until Daywalker's own configs exist, the Configs page shows live REFERENCE
  configs, labeled as such, plus the honest "not created yet" state.
- Risk banner on every page (exact string in `src/lib/constants.ts`):
  "bridged/quote assets carry operator risk where applicable. Meme coins can
  go to zero. Only use what you can lose."
- Footer (exact string in constants): independent-interface line, no implied
  endorsements.

## Hard stops
- Any on-chain transaction or spend (config creation, pool creation, launch),
  domain purchase/connection, production deploy promotion, and any public post
  needs Sneaks's explicit yes for that specific action.
- Non-custodial: Phantom + Solflare wallet-adapter only. Never hold, ask for,
  or transmit user keys or seed phrases. No server-side keys, no send paths in
  v1 code at all.

## Verified facts (muse, 2026-11-03 — goal files v1-scope.md)
- DBC program `dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN`. Config creation
  is permissionless (program source); the only gate is a quote-mint quality
  check. Config account rent ≈ 0.00597 SOL.
- Anti-bundle tax is the config's native fee scheduler (cliff → floor,
  linear/exponential), decoded live: SOL ref config 99.0% → 0.50% in 1
  slot-period; wXMR ref config 49.99% → 1.00% over 3 seconds.
- mogz's XMR config pointer `HVo5h…` does NOT exist on-chain; the live wXMR
  config is `FHWgd6phRkeNf6UvxkJc4P3xxjo4yPYxQo1bmrSR5axp` (operator unknown).
- wXMR mint `WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp`, 12 decimals.
  Mint authority SET (bridge operator `2yy692…jZuE`); **freeze authority is
  NONE** — older AnonPad copy claiming a freeze authority exists is wrong.
- Daywalker's fee wallet, config parameters, and first pairs are Sneaks's
  open decisions (see goal GOAL.md). Until he decides, no config constants.
