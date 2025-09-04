import Link from "next/link";

export default function Work() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-10 bg-[#161616] text-[#f1f1f1] font-mono text-xl font-bold">
      <h1 className="text-4xl">MY WORK</h1>

      <ul>
        <li className="hover:text-[#bababa] duration-300">
          <Link href="/work/codebits">CODEBITS</Link>
        </li>

        <li className="hover:text-[#bababa] duration-300">
          <Link href="/work/vidron">VIDRON</Link>
        </li>

        <li className="hover:text-[#bababa] duration-300">
          <Link href="/work/weblog">WEBLOG</Link>
        </li>

        <li className="hover:text-[#bababa] duration-300">
          <Link href="/work/currency-converter">CURRENCY CONVERTER</Link>
        </li>

        <li className="hover:text-[#bababa] duration-300">
          <Link href="/work/brick-breaker">BRICK BREAKER</Link>
        </li>

        <li className="hover:text-[#bababa] duration-300">
          <Link href="/work/flappy-bird-clone">FLAPPY BIRD CLONE</Link>
        </li>

        <li className="hover:text-[#bababa] duration-300">
          <Link href="/work/hungry-snake">HUNGRY SNAKE</Link>
        </li>
      </ul>
    </div>
  );
}
