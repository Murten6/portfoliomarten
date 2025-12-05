"use client";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white px-6 md:px-20">
      <nav className="absolute top-0 right-0 w-full p-6 flex justify-end gap-8 text-lg font-semibold">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Hallo!</h1>
        <p className="text-xl">Ik ben [jouw naam], dit is mijn portfolio.</p>
      </div>
    </section>
  );
}
