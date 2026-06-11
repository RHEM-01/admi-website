"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!headerRef.current) return;

    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    navTween.fromTo(
      headerRef.current,
      { backgroundColor: "rgba(255, 255, 255, 0.1)" },
      {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        duration: 0.5,
        ease: "power1.inOut",
      },
    );

    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.8,
      ease: "expo.out",
    });
  }, []);

  return (
    <div className="fixed top-4 inset-x-0 flex justify-center z-50 px-4 pointer-events-none">
      <header
        ref={headerRef}
        className="pointer-events-auto w-full max-w-6xl rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden translate-y-[-120px] opacity-0"
      >
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-white/40 to-transparent dark:from-white/10 pointer-events-none" />

        <div className="px-6 py-3 relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="flex items-center justify-center gap-2">
                <Image
                  src="/admi-logo.png"
                  alt="ADMI"
                  width={36}
                  height={36}
                  className="drop-shadow-sm"
                />
                <span className="font-heading font-bold text-lg tracking-tight drop-shadow-sm">
                  ADMI
                </span>
              </Link>
            </div>

            <div className="flex items-center justify-between gap-8">
              <nav className="flex items-center gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="hover:text-primary transition-colors drop-shadow-sm"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors drop-shadow-sm"
                >
                  The Church
                </Link>
                <Link
                  href="/events"
                  className="hover:text-primary transition-colors drop-shadow-sm"
                >
                  Join Us
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors drop-shadow-sm"
                >
                  Contact
                </Link>
              </nav>

              <div>
                <Link
                  href=""
                  className={buttonVariants({size: "lg",
                    className: "shadow-md rounded-full px-6 text-lg",
                  })}
                >
                  Give Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
