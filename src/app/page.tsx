"use client";
import { useScroll, useSpring, useTransform, motion, useMotionTemplate } from "framer-motion";
import { useRef, Fragment } from "react";
import Image from "next/image";
import About from "@/components/sections/About";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Stats from "@/components/sections/Stats";
import WorkWithUs from "@/components/sections/WorkWithUs";
import MoreSoon from "@/components/sections/MoreSoon";
import Disclosure from "@/components/Disclosure";
import { Suspense } from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill, BsCalendar } from "react-icons/bs";

export default function Page() {
	const heroRef = useRef<HTMLDivElement>(null);
	const dropPicRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress: scrollYProgressHero } = useScroll({
		offset: ["start start", "end start"],
		target: heroRef,
	});
	const { scrollYProgress: scrollYProgressDropPic } = useScroll({
		offset: ["start end", "end end"],
		target: dropPicRef,
	});

	const springyScrollProgHero = useSpring(scrollYProgressHero, { stiffness: 400, damping: 90 });

	const picture_y_nopad = useTransform(springyScrollProgHero, [0, 0.7], ["20vh", "100vh"]);
	const picture_y = useMotionTemplate`max(calc(${picture_y_nopad} - min(5vw, 60px)), 400px)`;

	const picture_x_nopad = useTransform(springyScrollProgHero, [0, 0.7], ["20vw", "100vw"]);
	const picture_x = useMotionTemplate`min(max(calc(${picture_x_nopad} - min(10vw, 60px)), 600px), 100vw)`;

	const borderTransformY = useMotionTemplate`calc((100vh - ${picture_y}) / 2)`;
	const borderTransformX = useMotionTemplate`calc(((100vw - ${picture_x}) / 2))`;

	const slideOut = useTransform(scrollYProgressDropPic, [0, 1], ["0vh", "-100vh"]);

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
			<div className="min-h-screen w-screen max-w-screen md:flex items-center justify-center fixed pointer-events-none z-40 hidden">
				<motion.div
					className="border-white border box-content block"
					style={{ width: picture_x, height: picture_y, y: slideOut }}
				/>
			</div>
			<div className="min-h-screen max-w-screen md:flex hidden items-center justify-center fixed pointer-events-none z-30 overflow-hidden">
				<motion.div
					className="overflow-hidden border-red-600 box-content"
					style={{
						width: picture_x,
						height: picture_y,
						borderRightWidth: borderTransformX,
						borderLeftWidth: borderTransformX,
						borderTopWidth: borderTransformY,
						borderBottomWidth: borderTransformY,
						y: slideOut,
					}}
				/>
			</div>
			<main
				ref={heroRef}
				className="w-full max-w-screen min-h-screen bg-red-600 flex items-center justify-center flex-col text-white"
			>
				<h1 className="font-sans font-black md:text-4xl text-xl">CQ Hack Day</h1>
				<h2 className="font-bebas md:text-[16rem] text-[11rem] leading-none mb-[-2rem] h-min">
					heist
				</h2>
				<h3 className="font-mono font-extrabold text-lg">February 3rd 2024 @ UTSA</h3>
				<span className={"flex items-center gap-5"}>
					 <Link href="https://form.cqhacks.org/register">
						  <button className="bg-white font-bebas text-2xl px-5 py-3 flex items-center gap-2 rounded relative text-red-600 mt-3">
							  <span className="flex items-center gap-2 relative z-10">
								   Register
								   <BsFillArrowRightCircleFill className="text-xl" />
							  </span>
						  </button>
					 </Link>
					<Link href={"/schedule"}>
						<button className={"bg-white font-bebas text-2xl px-5 py-3 flex items-center gap-2 rounded relative text-red-600 mt-3"}>
							<span className={"flex items-center gap-2 relative z-10"}>
								Schedule
								<BsCalendar className={"text-xl"}/>
							</span>
						</button>
					</Link>
				</span>
			</main>
			<div className="bg-red-600 min-h-[50vh] w-full max-w-screen"></div>
			<About />
			<Stats />
			<WhoWeAre />
			<WorkWithUs ref={dropPicRef} />
			<MoreSoon />
			<Suspense>
				<Disclosure />
			</Suspense>
			<Image
				src="/img/sticker/moneybag.svg"
				alt="A Money Bag Sticker"
				width={125}
				height={125}
				className="absolute top-[160vh] right-[70%] -translate-x-[70%] -rotate-12 hover:scale-110 duration-300 hidden md:block"
			/>
			<Image
				src="/img/sticker/coins.svg"
				alt="A Coin Stack Sticker"
				width={125}
				height={125}
				className="absolute top-[195vh] left-[85%] -translate-x-[85%] rotate-12 hover:scale-110 duration-300 hidden md:block"
			/>
			<Image
				src="/img/sticker/safe2.svg"
				alt="A Safe Sticker"
				width={125}
				height={125}
				className="absolute top-[210vh] right-[78%] -translate-x-[78%] -rotate-12 hover:scale-110 duration-300 hidden md:block"
			/>
			<div className="bg-red-600 font-mono text-xs w-min whitespace-nowrap absolute top-[160vh] left-[85%] -translate-x-[85%] hidden md:block">
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
