import { forwardRef } from "react";
import Link from "next/link";

export default forwardRef<HTMLElement>(function WorkWithUs(props, ref) {
	return (
		<section ref={ref} className="min-h-screen bg-red-600">
			<div className="grid grid-cols-1 md:grid-cols-2 max-w-[1000px] gap-x-5 mx-auto min-h-screen">
				<div className="leading-[0.8] md:hidden md:text-[14rem] text-5xl font-bebas flex flex-col justify-center text-white">
					<h1 className="block md:hidden text-center">Work With Us</h1>
				</div>
				<div className="flex flex-col justify-center gap-3 gap-y-7 px-2">
					<div className="bg-white md:aspect-[16/10] aspect-[16/14] w-full rounded-tl-2xl rounded-br-2xl border-red-500 border-2 px-5 shadow-2xl">
						<h2 className="bg-white font-mono border-red-500 border-2 rounded-full py-2 px-3 w-min text-red-600 font-bold -translate-y-[50%]">
							Students
						</h2>
						<h1 className="text-4xl font-bebas text-red-600">Interested in helping?</h1>
						<p className="font-sans font-bold mt-2">
							We are always looking for volunteers and mentors to help us make CodeQuantum the best
							hackathon around! If you are interested in becoming a volunteer or mentor, be on the
							lookout for our signup form coming soon!
						</p>
					</div>
					<div className="bg-white md:aspect-[16/10] aspect-[16/14] w-full rounded-tl-2xl rounded-br-2xl border-red-500 border-2 px-5 shadow-2xl">
						<h2 className="bg-white border-red-500 border-2 rounded-full py-2 px-3 w-min text-red-600 font-mono font-bold -translate-y-[50%]">
							Companies
						</h2>
						<h1 className="text-4xl font-bebas text-red-600">Interested in partnering?</h1>
						<p className="font-sans font-bold mt-2 my-4">
							CodeQuantum would not be possible without our incredible partners! If you or a group
							you represent are interested in partnering, please click below to view our Partner
							Packet.
						</p>
						<Link href="#">
							<button className="bg-red-600 hover:bg-red-500 rounded px-3 text-white font-bold py-3 transition-colors duration-150">
								Partner Packet
							</button>
						</Link>
					</div>
				</div>
				<div className="leading-[0.8] hidden md:text-[14rem] text-5xl font-bebas md:flex flex-col justify-center text-white">
					<h1>Work</h1>
					<h1>With</h1>
					<h1>Us</h1>
				</div>
			</div>
		</section>
	);
});
