"use client";
import { useScroll, useSpring, useTransform, motion, useMotionTemplate } from "framer-motion";
import { useRef, Fragment } from "react";
import Image from "next/image";
import About from "@/components/sections/About";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Stats from "@/components/sections/Stats";
import Marquee from "@/components/sections/Marquee";

export default function Page() {
	const heroRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		offset: ["start start", "end start"],
		target: heroRef,
	});
	const springyScrollProg = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
	// const vaultTransformation = useTransform(springyScrollProg, [0, 1], ["150%", "300%"]);
	// const vaultOpacityTransformation = useTransform(springyScrollProg, [0, 0.4], ["100%", "0%"]);
	const boxTransformX = useTransform(springyScrollProg, [0, 1], ["32vw", "95vw"]);
	const borderTransformX = useMotionTemplate`calc((100vw - (${boxTransformX} + 10px)) / 2)`;
	const borderTransformY = useMotionTemplate`max(calc((100vh - ((${boxTransformX} * 11 / 16) - 2px)) / 2), calc(2.5vh + 1px))`;
	return (
		<Fragment>
			<svg
				className="pointer-events-none fixed isolate z-50 mix-blend-soft-light"
				width="100%"
				height="100%"
			>
				<filter id="pedroduarteisalegend">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.80"
						numOctaves="4"
						stitchTiles="stitch"
					></feTurbulence>
				</filter>
				<rect width="100%" height="100%" filter="url(#pedroduarteisalegend)"></rect>
			</svg>
			<div className="min-h-screen w-full max-w-screen flex items-center justify-center fixed pointer-events-none z-40">
				<motion.div
					className="border-white aspect-[16/11] min-w-[32vw] max-w-[95vw] max-h-[95vh] border box-content"
					style={{ width: boxTransformX }}
				/>
			</div>
			<div className="min-h-screen w-full max-w-screen flex items-center justify-center fixed pointer-events-none z-30 overflow-hidden">
				<motion.div
					className="aspect-[16/11] min-w-[32vw] max-w-[95vw] max-h-[95vh] overflow-hidden border-red-600 box-content"
					style={{
						width: boxTransformX,
						borderRightWidth: borderTransformX,
						borderLeftWidth: borderTransformX,
						borderTopWidth: borderTransformY,
						borderBottomWidth: borderTransformY,
					}}
				/>
			</div>
			<main
				ref={heroRef}
				className="w-full max-w-screen min-h-screen bg-red-600 flex items-center justify-center flex-col text-white"
			>
				<h1 className="font-sans font-black md:text-4xl text-xl">CodeQuantum 2023</h1>
				<h2 className="font-bebas md:text-[16rem] text-[11rem] leading-none mb-[-2rem] h-min">
					heist
				</h2>
				<h3 className="font-mono font-extrabold text-lg">Nov. 18 - 19th @ UTSA San Pedro I</h3>
			</main>
			<div className="bg-red-600 min-h-[50vh] w-full max-w-screen"></div>
			<About />
			<Stats />
			<WhoWeAre />
			<Image
				src="/img/sticker/moneybag.svg"
				alt="A Money Bag Sticker"
				width={125}
				height={125}
				className="absolute top-[160vh] right-[70%] -translate-x-[70%] -rotate-12 hover:scale-110 duration-300"
			/>
			<Image
				src="/img/sticker/coins.svg"
				alt="A Coin Stack Sticker"
				width={125}
				height={125}
				className="absolute top-[195vh] left-[85%] -translate-x-[85%] rotate-12 hover:scale-110 duration-300"
			/>
			<Image
				src="/img/sticker/safe2.svg"
				alt="A Safe Sticker"
				width={125}
				height={125}
				className="absolute top-[210vh] right-[78%] -translate-x-[78%] -rotate-12 hover:scale-110 duration-300"
			/>
			<div className="bg-red-600 font-mono text-xs w-min whitespace-nowrap absolute top-[160vh] left-[85%] -translate-x-[85%]">
				Opening vault...
				<br />
				Decoding security...
				<br />
				Running {"(code)"}quantum decryption...
				<br />
				<div className="animate-pulse">&gt;</div>
			</div>
		</Fragment>
	);
}
