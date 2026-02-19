import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const revalidate = 60;
export default async function ProjectsPage() {

  return (
    <div className="relative pb-12 sm:pb-16">
      <Navigation />
      <div className="px-3 sm:px-4 md:px-6 pt-16 sm:pt-20 mx-auto space-y-6 sm:space-y-8 max-w-7xl lg:px-8 md:space-y-12 lg:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl sm:text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
            Projects
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-sm md:text-base text-zinc-400">
            Some of the projects I've worked on.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href="/" target="_blank">
              <article className="relative w-full h-full p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sm text-zinc-100">
                    <time dateTime={new Date().toISOString()}>
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date())}
                    </time>
                  </div>
                </div>

                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-white lg:text-4xl font-display">
                  Portfolio Website
                </h2>
                <p className="mt-2 sm:mt-3 md:mt-4 leading-6 sm:leading-7 md:leading-8 duration-150 text-sm sm:text-sm md:text-base text-zinc-400 group-hover:text-zinc-300">
                  A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Featuring a beautiful particle animation background and project showcase.
                </p>
                <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8">
                  <p className="hidden text-sm sm:text-sm text-zinc-200 hover:text-zinc-50 lg:block">
                    Visit <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
