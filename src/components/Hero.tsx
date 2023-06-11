import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Hero() {
	return (
		<main className="min-h-screen w-screen overflow-hidden dark:bg-zinc-950 bg-gray-100 flex items-center justify-center">
			<div className="h-[85vh] aspect-square relative">
				<div className="w-full h-full absolute dark:vault-border-dark vault-border-light rounded-full dark:mix-blend-color-dodge " />
				<div className="w-full h-full absolute flex items-center justify-center flex-col z-10 text-white">
					<h1 className="font-sans font-black text-4xl dark:text-white text-gray-800">
						CodeQuantum <span className="text-red-600">2023</span>
					</h1>
					<h2 className="font-bebas text-[16rem] leading-none dark:text-white text-gray-800">
						heist
					</h2>
					<Link href="#">
						<button className="bg-red-700 font-bebas text-2xl px-5 py-3 flex items-center gap-2 rounded relative">
							<div className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 bg-red-700 opacity-50 blur-[30px]"></div>
							<span className="flex items-center gap-2 relative z-10">
								Register Interest
								<BsFillArrowRightCircleFill className="text-xl" />
							</span>
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
