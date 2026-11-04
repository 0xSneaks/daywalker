import { RISK_BANNER } from "@/lib/constants";

export default function RiskBanner() {
  return (
    <div className="border-b border-amber-300 bg-amber-100 px-4 py-2 text-center text-[13px] font-medium text-amber-900">
      ⚠ {RISK_BANNER}
    </div>
  );
}
