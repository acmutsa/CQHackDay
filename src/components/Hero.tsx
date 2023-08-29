import { useRef } from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import HeistOSLogin from "./HeistOSLogin";

export default function Hero() {
	// let contentWrapperRef = useRef(null);
	// const { scrollYProgress } = useScroll({
	// 	target: contentWrapperRef,
	// 	offset: ["start start", "end start"],
	// });
	// const springyScrollProg = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
	// const vaultTransformation = useTransform(springyScrollProg, [0, 1], ["150%", "300%"]);
	// const vaultOpacityTransformation = useTransform(springyScrollProg, [0, 0.4], ["100%", "0%"]);

	return (
		<>
			<div className="absolute top-0 mt-2 bg-white rounded-3xl overflow-hidden w-full left-[50%] translate-x-[-50%] max-w-[800px] h-14 z-10 grid grid-cols-3 pl-5">
				<div className="flex items-center">
					<h1 className="text-3xl font-sans font-black">
						CQ<span className="text-red-500">23</span>
					</h1>
				</div>
				<div></div>
				<div className="flex items-center justify-end h-full">
					<Link href="#">
						<button className="bg-red-600 h-full font-bebas text-2xl px-4 py-2 flex items-center gap-2 rounded-3xl relative text-white">
							<span className="flex items-center gap-2 relative z-10">
								Register Interest
								<BsFillArrowRightCircleFill className="text-md" />
							</span>
						</button>
					</Link>
				</div>
			</div>
			<main className="h-screen max-w-screen w-full bg-red-600 relative">
				<div className="max-w-6xl mx-auto h-full w-full grid grid-cols-2 gap-x-28 z-20 relative">
					<div className="flex items-center justify-center flex-col text-white drop-shadow-2xl">
						<h1 className="font-sans font-black md:text-4xl text-xl">CodeQuantum 2023</h1>
						<h2 className="font-bebas md:text-[16rem] text-[11rem] leading-none mb-[-2rem] h-min">
							heist
						</h2>
						<h3 className="font-sans font-extrabold text-lg">Nov. 18 - 19th @ UTSA San Pedro I</h3>
					</div>
					<div className="z-20 flex items-center justify-center w-full h-full relative">
						<div className="relative max-w-[75%] w-full aspect-square">
							<Image
								src={"/img/logo/cq.svg"}
								fill
								alt="The CodeQuantum Logo"
								className="drop-shadow-2xl hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer"
							/>
						</div>
					</div>
				</div>
				<Image fill src={"/img/landing/map.svg"} alt="" className="opacity-10 object-cover" />
			</main>
		</>
	);
}
