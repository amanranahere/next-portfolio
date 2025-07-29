import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-5 right-5 flex gap-x-5 mix-blend-difference font-bold font-mono text-white">
      <Link href="/">HOME</Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/capabilities">CAPABILITIES</Link>
      <Link href="/work">WORK</Link>
    </div>
  );
}
