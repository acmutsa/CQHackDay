import ReactMarquee from "react-fast-marquee";
import Image from "next/image";

export default function Marquee() {
	return (
		<div className="">
			<ReactMarquee autoFill speed={15}>
				<Image
					src={"/img/logo/acmw-logo.svg"}
					alt="People Collaborating"
					className="mx-2"
					height={60}
					width={60}
				/>
			</ReactMarquee>
			<ReactMarquee autoFill direction="right" speed={15}>
				<Image
					src={"/img/logo/acmw-logo.svg"}
					className="mx-2"
					alt="People Collaborating"
					height={60}
					width={60}
				/>
			</ReactMarquee>
			<ReactMarquee autoFill speed={15}>
				<Image
					src={"/img/logo/acmw-logo.svg"}
					className="mx-2"
					alt="People Collaborating"
					height={60}
					width={60}
				/>
			</ReactMarquee>
		</div>
	);
}
