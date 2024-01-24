import "./globals.css";
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });

export const metadata: Metadata = {
	title: "CodeQuantum 2024",
	description:
		"CodeQuantum is San Antonio's hackathon dedicated to creating a safe hacking space for students in the tech field hosted at UTSA!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="max-w-screen overflow-x-hidden">
			<body className={bebas.variable + " max-w-screen overflow-x-hidden"}>{children}</body>
		</html>
	);
}
