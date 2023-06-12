export default function UIMask() {
	return (
		<div className="w-screen h-screen fixed hidden md:block select-none pointer-events-none z-50">
			{/* Right Side FX */}
			{/* <div className="right-[10px] dark:bg-red-600 bg-slate-950 w-[3px] h-[10vh] absolute top-[5vh]" />
			<div className="right-[10px] dark:bg-red-600 bg-slate-950 w-[5px] h-[12vh] absolute top-[25vh]" />
			<div className="right-[10px] dark:bg-red-600 bg-slate-950 w-[10px] h-[3vh] absolute top-[44vh]" />
			<div className="right-[10px] dark:bg-red-600 bg-slate-950 w-[5px] h-[5vh] absolute top-[48vh]" />
			<div className="right-[10px] dark:bg-red-600 bg-slate-950 w-[5px] h-[10vh] absolute top-[80vh]" />
			<div className="right-[10px] dark:bg-red-600 bg-slate-950 w-[5px] h-[5vh] absolute top-[95vh]" /> */}
			{/* Left Side FX */}
			<div className="bg-red-600 w-[3px] h-[10vh] absolute top-[5vh]" />
			<div className="bg-red-600 w-[3px] h-[12vh] absolute top-[25vh]" />
			<div className="bg-red-600 w-[10px] h-[3vh] absolute top-[44vh]" />
			<div className="bg-red-600 w-[3px] h-[5vh] absolute top-[48vh]" />
			<div className="bg-red-600 w-[3px] h-[10vh] absolute top-[80vh]" />
			<div className="bg-red-600 w-[3px] h-[5vh] absolute top-[95vh]" />
		</div>
	);
}
