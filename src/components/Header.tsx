import Link from "next/link";
import WalletButton from "./WalletButton";
import SunMark from "./SunMark";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/mechanics", label: "Mechanics" },
  { href: "/how", label: "How it works" },
  { href: "/configs", label: "Configs" },
  { href: "/launch", label: "Launch" },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-panel/80">
      <div className="mx-auto max-w-4xl px-4 py-3">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-wide">
            <SunMark size={30} />
            DAY<span className="text-accent">WALKER</span>
          </Link>
          <WalletButton />
        </div>
        <nav className="mt-2 flex gap-0.5 overflow-x-auto text-[13px]">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="whitespace-nowrap rounded-lg px-2 py-1.5 text-dim hover:bg-bg hover:text-text"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
