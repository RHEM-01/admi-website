"use client"
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

export default function Home() {
  const tl = gsap.timeline({});
  useGSAP(() => {
    tl.to("#chuch-name", {
      opacity: 1,
      ease: "power1.inOut",
      duration: 2,
    });
  }, []);

  return (
    <main className="flex-1 min-h-screen bg-linear-to-br from-background via-background to-muted/50">
      {/* hero section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/80 z-0" />

        <div className="container flex flex-col items-center justify-center gap-1 max-w-3xl mx-auto text-center relative z-10">
          {/* radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] -z-10 pointer-events-none" />

          <h2 className="text-base text-white/90 font-semibold font-heading drop-shadow-sm">Welcome to</h2>
          <h1 id="church-name" className="opacity-0 text-4xl md:text-6xl font-bold font-heading tracking-tight text-white drop-shadow-lg">
            Arrow of Deliverance Ministries Int&apos;l
          </h1>
          <p className="text-lg text-white/80 leading-relaxed mt-2 drop-shadow-md">
            (A Guiding Light to the Nation)
          </p>
        </div>
      </section>
    </main>
  );
}
