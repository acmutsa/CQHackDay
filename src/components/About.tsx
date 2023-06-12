import DecodeHeader from "./DecodeHeader";
import { Balancer } from "react-wrap-balancer";
import Image from "next/image";

export default function About() {
	return (
		<section className="max-w-screen bg-gray-200 pt-[50vh] pb-[25vh] relative md:bg-[url('/img/landing/vaultmatrix.png')] bg-fixed bg-[length:50%] bg-no-repeat bg-right ">
			{/* <Image
				src={"/img/landing/vaultmatrix.png"}
				alt="A Red Dot Matrix Vault"
				fill={true}
				className="object-contain object-bottom max-h-[50%]"
			/> */}
			<div className="max-w-5xl mx-auto relative min-h-screen md:text-left text-center flex md:block flex-col items-center justify-center">
				<DecodeHeader>The Plan</DecodeHeader>
				<p className="md:mb-[40vh] mt-10 font-sans font-bold md:max-w-[50%] text-lg">
					<Balancer>
						<span className="text-red-600">CodeQuantum</span> is San Antonio's first 24-hour
						hackathon geared towards <span className="text-red-600">marginalized genders</span> to
						promote inclusivity and diversity! Organized by the ACM-W chapter at UTSA, CodeQuantum
						is dedicated to creating a safe hacking space for students in the tech field.
					</Balancer>
				</p>
				<Image
					src={"/img/landing/vaultmatrix.png"}
					alt="A Red Dot Matrix Vault"
					width={350}
					height={350}
					className="md:hidden object-contain object-center mx-auto my-10"
				/>
				<DecodeHeader>Who We Are</DecodeHeader>
				<p className="font-sans mt-10 font-bold md:max-w-[50%] text-lg">
					<Balancer>
						We are The{" "}
						<span className="text-red-600">
							Association of Computing Machinery - Women's Chapter
						</span>{" "}
						at the University of Texas at San Antonio! We are an all-inclusive organization focused
						on creating an engaging academic, professional, and social network for women and
						minorities in technology. Our purpose is to connect students with leaders and encourage
						them to pursue career opportunities in computing fields and to mentor for academic and
						professional success.
					</Balancer>
				</p>
			</div>
		</section>
	);
}
