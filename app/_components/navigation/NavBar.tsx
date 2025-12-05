import Link from "next/link";

interface NavBarProps {
  className?: string; // optional, only used for extra styling
}

export default function NavBar({ className }: NavBarProps) {
  return (
    <nav className={`flex gap-6 text-white font-semibold ${className ?? ""}`}>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
