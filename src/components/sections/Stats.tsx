export default function Stats() {
	return (
		<div className="w-full max-w-screen min-h-[30vh] p-5">
			<div className="border-red-600 min-h-[325px] w-full max-w-[1000px] mx-auto border-2 rounded-xl flex justify-evenly items-center flex-wrap gap-y-5 py-5">
				<div className="flex items-center justify-center flex-col w-min">
					<h1 className="text-red-600 font-bebas text-[13rem] leading-none">12</h1>
					<p className="font-mono text-xl font-bold">Hours</p>
				</div>
				<div className="flex items-center justify-center flex-col w-min">
					<h1 className="text-red-600 font-bebas text-[13rem] leading-none">100</h1>
					<p className="font-mono text-xl font-bold">Hackers</p>
				</div>
				<div className="flex items-center justify-center flex-col w-min">
					<h1 className="text-red-600 font-bebas text-[13rem] leading-none">20+</h1>
					<p className="font-mono text-xl font-bold">Projects</p>
				</div>
			</div>
		</div>
	);
}
