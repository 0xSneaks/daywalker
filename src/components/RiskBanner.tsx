import { RISK_BANNER } from "@/lib/constants";

export default function RiskBanner() {
  return (
    <div className="border-b border-banner-line bg-banner-bg px-4 py-2 text-center text-[13px] font-medium text-banner-text">
      ⚠ {RISK_BANNER}
    </div>
  );
}
