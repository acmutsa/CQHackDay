export default function Header({ children }: { children: string }) {
	return (
		<div className="flex flex-col w-min">
			<h1 className="font-bebas text-black text-8xl whitespace-nowrap leading-none">{children}</h1>
			<div className="flex">
				<div className="bg-black h-[7.5px] w-[10%] mr-[2.5%]" />
				<div className="bg-black h-[7.5px] w-[15%]" />
				<div className="bg-black h-[7.5px] w-[75%] ml-[2.5%]" />
			</div>
		</div>
	);
}
