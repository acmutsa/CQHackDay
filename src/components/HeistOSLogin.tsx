"use client";

import Image from "next/image";

export default function HeistOSLogin() {
	return (
		<div className="aspect-video bg-white rounded-xl w-full shadow-2xl p-2 pb-6 relative">
			<div className="rounded-xl h-full w-full bg-red-500 flex gap-y-2 flex-col items-center justify-center">
				<Image
					height={64}
					width={64}
					src="/img/os/hacker-signin.png"
					alt="A Pixelated Image of a Dollar Sign"
				/>
				<p className="text-white text-xs font-bold">B3stHe1st3r</p>
				<input className="bg-white text-center rounded text-sm" placeholder="password" />
				<button className="bg-white text-red-500 rounded font-bold mt-3 px-2">Login</button>
			</div>
			<p className="font-bold absolute bottom-0 text-center w-full">
				Heist<span className="text-red-500">OS</span>
			</p>
		</div>
	);
}
