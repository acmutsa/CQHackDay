"use client";
import {
	useScroll,
	useSpring,
	useTransform,
	motion,
	useMotionTemplate,
	useMotionValue,
} from "framer-motion";
import { useRef, Fragment } from "react";
import Image from "next/image";
import About from "@/components/sections/About";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Stats from "@/components/sections/Stats";
import Marquee from "@/components/sections/Marquee";

export default function Page() {
	const heroRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress: scrollYProgressHero } = useScroll({
		offset: ["start start", "end start"],
		target: heroRef,
	});

	const springyScrollProgHero = useSpring(scrollYProgressHero, { stiffness: 400, damping: 90 });

	const picture_y_nopad = useTransform(springyScrollProgHero, [0, 0.7], ["20vh", "100vh"]);
	const picture_y = useMotionTemplate`max(calc(${picture_y_nopad} - min(5vw, 60px)), 400px)`;

	const picture_x_nopad = useTransform(springyScrollProgHero, [0, 0.7], ["20vw", "100vw"]);
	const picture_x = useMotionTemplate`min(max(calc(${picture_x_nopad} - min(5vw, 60px)), 600px), 100vw)`;

	const borderTransformY = useMotionTemplate`calc((100vh - ${picture_y}) / 2)`;
	const borderTransformX = useMotionTemplate`calc(((100vw - ${picture_x}) / 2))`;

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
			<div className="min-h-screen w-screen max-w-screen flex items-center justify-center fixed pointer-events-none z-40">
				<motion.div
					className="border-white border box-content block"
					style={{ width: picture_x, height: picture_y }}
				/>
			</div>
			<div className="min-h-screen max-w-screen  flex items-center justify-center fixed pointer-events-none z-30 overflow-hidden">
				<motion.div
					className="overflow-hidden border-red-600 box-content"
					style={{
						width: picture_x,
						height: picture_y,
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
