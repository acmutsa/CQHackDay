"use client";
import { useInView } from "react-hook-inview";
import { useState, useEffect, useRef } from "react";
import cn from "@/lib/cn";

export default function DecodeHeader({
	children,
	classname = "",
}: {
	children: string;
	classname?: string;
}) {
	const charArr =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890\"',./-_=+?!@£$%&;:|()[]{}~`<>".split(
			""
		);
	const childrenArr = useRef(children.split(""));
	const [decodedText, setDecodedText] = useState("");
	const [encodedText, setEncodedText] = useState(children);
	const [ref, isVisible] = useInView({
		threshold: 1,
		unobserveOnEnter: true,
	});

	useEffect(() => {
		if (!isVisible) {
			setEncodedText(
				childrenArr.current.map(() => charArr[Math.floor(Math.random() * charArr.length)]).join("")
			);
		} else {
			childrenArr.current
				.map((char) => charArr[Math.floor(Math.random() * charArr.length)])
				.join("");
			let interval = setInterval(() => {
				if (childrenArr.current.length == 0) {
					clearInterval(interval);
					return;
				}

				const charToAdd = childrenArr.current.shift();
				setDecodedText((prev) => prev + charToAdd);
				setEncodedText(
					childrenArr.current
						.map(() => charArr[Math.floor(Math.random() * charArr.length)])
						.join("")
				);
			}, 800 / children.length);
			return () => clearInterval(interval);
		}
	}, [isVisible]);

	return (
		<div className={cn("flex flex-col w-min", classname)} ref={ref}>
			<h1 className="font-bebas text-black text-8xl whitespace-nowrap leading-none">
				{decodedText + encodedText}
			</h1>
			<div
				className={`flex transition-opacity duration-1000 ${
					encodedText.length == 0 ? "opactiy-100" : "opacity-0"
				}`}
			>
				<div className="bg-black h-[7.5px] w-[10%] mr-[2.5%]" />
				<div className="bg-black h-[7.5px] w-[15%]" />
				<div className="bg-black h-[7.5px] w-[75%] ml-[2.5%]" />
			</div>
		</div>
	);
}
