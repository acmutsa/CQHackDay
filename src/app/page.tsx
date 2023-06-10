import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function Page() {
	return (
		<main className="min-h-screen w-screen bg-zinc-950 flex items-center justify-center">
			<div className="h-[80vh] aspect-square relative">
				<div className="w-full h-full absolute vault-border rounded-full mix-blend-color-dodge " />
				<div className="w-full h-full absolute flex items-center justify-center flex-col z-10 text-white">
					<h1 className="font-sans font-black text-4xl">
						CodeQuantum <span className="text-red-600">2023</span>
					</h1>
					<h2 className="font-bebas text-[16rem] leading-none">heist</h2>
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
