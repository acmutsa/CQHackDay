import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });

export const metadata = {
	title: "CodeQuantum 2023",
	description:
		"CodeQuantum is San Antonio's first 24-hour hackathon geared towards marginalized genders to promote inclusivity and diversity!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="max-w-screen overflow-x-hidden">
			<body className={bebas.variable + " max-w-screen overflow-x-hidden"}>{children}</body>
		</html>
	);
}
