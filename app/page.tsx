"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black" style={{ overscrollBehavior: 'none' }}>
      <nav className="mt-0 mb-1 sm:my-2 md:my-4 lg:my-6 animate-fade-in">
        <ul className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base sm:text-base md:text-lg lg:text-xl duration-500 text-zinc-100 hover:text-zinc-300 px-2 py-1 sm:px-3 sm:py-1.5"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={isMobile ? 30 : 150}
      />
      <h1 className="py-2 sm:py-3 md:py-3.5 px-4 sm:px-0.5 z-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text">
        argyk
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="mt-1 mb-0 sm:my-2 md:my-4 lg:my-6 text-center animate-fade-in">
        <h2 className="text-base sm:text-base md:text-lg lg:text-xl text-zinc-100 px-4">
            Quietly upgrading.
        </h2>
      </div>
    </div>
  );

}
