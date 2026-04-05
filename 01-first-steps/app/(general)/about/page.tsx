import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Mauro",
	description: "Page about of Mauro",
	keywords: ["About Page", "Mauro", "information", "..."],
};

export default function AboutPage() {
	return (
		<>
			<span className="text-7xl">About Page</span>
		</>
	);
}
