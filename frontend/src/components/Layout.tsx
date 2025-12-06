import React from "react";
import Header from "./Header";

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<main className="layout-root">
			<Header />
			<section className="dashboard-shell">{children}</section>
		</main>
	);
}
