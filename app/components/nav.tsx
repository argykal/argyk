"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-3 sm:p-4 md:p-6 mx-auto">
					<div className="flex justify-between gap-4 sm:gap-6 md:gap-8">
						<Link
							href="/projects"
							className="text-base sm:text-base md:text-lg font-bold duration-200 text-white hover:text-zinc-300 px-2 py-1 sm:px-3 sm:py-1.5"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="text-base sm:text-base md:text-lg font-bold duration-200 text-white hover:text-zinc-300 px-2 py-1 sm:px-3 sm:py-1.5"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
					</Link>
				</div>
			</div>
		</header>
	);
};
