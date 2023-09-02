import Image from "next/image";

export default function About() {
	return (
		<section className="w-full max-w-screen min-h-screen flex items-center justify-center flex-col p-5 gap-y-5">
			<h1 className="text-red-600 font-black text-6xl border-b-2 pb-1 border-dashed border-red-600">
				The Plan
			</h1>
			<p className="max-w-[500px] text-center font-bold text-xl">
				<span className="text-red-600">CodeQuantum</span> is San Antonio's first 24-hour hackathon
				geared towards <span className="text-red-600">marginalized genders</span> to promote
				inclusivity and diversity! Organized by the ACM-W chapter at UTSA, CodeQuantum is dedicated
				to creating a safe hacking space for students in the tech field.
			</p>
			<div className="relative max-w-[600px] w-full aspect-video">
				<Image src={"/img/landing/collab.svg"} alt="People Collaborating" fill />
			</div>
		</section>
	);
}
