import Hero from "@/components/Hero";
import UIMask from "@/components/UIMask";
import About from "@/components/About";
import MoreSoon from "@/components/MoreSoon";
import Disclosure from "@/components/Disclosure";

export default function Page() {
	return (
		<>
			<UIMask />
			<Hero />
			<About />
			<MoreSoon />
			<Disclosure />
		</>
	);
}
