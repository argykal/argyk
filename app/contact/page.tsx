"use client";
import { Github, Mail, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/argyris-kalampoukas-86510b3a8",
		label: "LinkedIn",
		handle: "Argyris kalampoukas",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://instagram.com/argyris_kal",
		label: "Instagram",
		handle: "@argykal",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:argyris.kalampoukas@gmail.com",
		label: "Email",
		handle: "argyris.kalampoukas@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/argykal",
		label: "Github",
		handle: "argykal",
	},
];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />

			<main className="container px-3 sm:px-4 mx-auto min-h-screen flex items-center justify-center pt-24">
				<div className="grid w-full grid-cols-1 gap-6 sm:gap-8 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 xl:gap-16">
					{socials.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 relative flex flex-col items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 duration-700 group py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-12 sm:h-12 text-base sm:text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
							<div className="z-10 flex flex-col items-center max-w-full px-2 sm:px-3">
								{s.label === "Email" ? (
									<span className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display text-center leading-tight">
										argyris.kalampoukas
										<br />
										@gmail.com
									</span>
								) : (
									<span className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display truncate max-w-xs">
										{s.handle}
									</span>
								)}
								<span className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</main>
		</div>
	);
}