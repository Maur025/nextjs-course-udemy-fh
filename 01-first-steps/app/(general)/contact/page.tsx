import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Mauro",
	description: "Page contact of Mauro",
	keywords: ["contact", "Mauro"],
};

export default function ContactPage() {
	return (
		<>
			<span className="text-7xl">Contact Page</span>
		</>
	);
}
