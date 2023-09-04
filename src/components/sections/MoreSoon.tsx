import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function MoreSoon() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-red-600 text-white border-dashed border-white border-t">
			<h1 className="font-bebas text-6xl text-center">More Instructions Will Follow</h1>
			<h2>More here soon {":)"}</h2>
			<Link href="#">
				<button className="bg-white font-bebas text-2xl px-5 py-3 flex items-center gap-2 rounded relative text-red-600 mt-10">
					<span className="flex items-center gap-2 relative z-10">
						Register Interest
						<BsFillArrowRightCircleFill className="text-xl" />
					</span>
				</button>
			</Link>
		</section>
	);
}
