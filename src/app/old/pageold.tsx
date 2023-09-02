import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="grid grid-cols-2 px-5">
			<div className="min-h-screen flex flex-col justify-center">
				<h1 className="text-3xl font-sans font-black text-red-600">CodeQuantum 2023</h1>
				<div className="relative">
					<h2 className="font-bebas text-[18rem] text-red-600 leading-none font-extrabold relative z-10 tracking-wide">
						HEIST
					</h2>
					<h2 className="font-bebas text-[18rem] leading-none font-extrabold absolute top-0 translate-x-2 translate-y-2 tracking-wide">
						HEIST
					</h2>
				</div>

				<Link href="#">
					<button className="py-2 px-5 bg-red-600 text-2xl font-bold rounded text-white">
						Register Interest
					</button>
				</Link>
			</div>
		</main>
	);
}
