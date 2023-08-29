"use client";
import { useScroll, useSpring, useTransform, motion, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const sectionCount = 3;

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
		<>
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
			<section className="w-full max-w-screen min-h-screen flex items-center justify-center flex-col p-5 gap-y-5">
				<h1 className="text-red-600 font-black text-6xl border-b-2 pb-1 border-dashed border-red-600">
					The Plan
				</h1>
				<p className="max-w-[500px] text-center font-bold text-xl">
					<span className="text-red-600">CodeQuantum</span> is San Antonio's first 24-hour hackathon
					geared towards <span className="text-red-600">marginalized genders</span> to promote
					inclusivity and diversity! Organized by the ACM-W chapter at UTSA, CodeQuantum is
					dedicated to creating a safe hacking space for students in the tech field.
				</p>
				<div className="relative max-w-[600px] w-full aspect-video">
					<Image src={"/img/landing/collab.svg"} alt="People Collaborating" fill />
				</div>
			</section>
			<section className="w-full max-w-screen min-h-screen flex items-center justify-center flex-col p-5 gap-y-5">
				<h1 className="text-red-600 font-black text-6xl border-b-2 pb-1 border-dashed border-red-600">
					Who We Are
				</h1>
				<p className="max-w-[500px] text-center font-bold text-xl">
					We are{" "}
					<span className="text-red-600">
						The Association of Computing Machinery - Women's Chapter
					</span>{" "}
					at the University of Texas at San Antonio! We are an all-inclusive organization focused on
					creating an engaging academic, professional, and social network for women and minorities
					in technology. Our purpose is to connect students with leaders and encourage them to
					pursue career opportunities in computing fields and to mentor for academic and
					professional success.
				</p>
				<div className="relative max-w-[400px] w-full aspect-square">
					<Image src={"/img/logo/acmw-logo.svg"} alt="People Collaborating" fill />
				</div>
			</section>
		</>
	);
}
