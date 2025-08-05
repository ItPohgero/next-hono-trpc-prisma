"use client";
import { useMain } from "@/clients/screens/root/hooks/useMain";
import { Fragment } from "react";
import { Button } from "@/clients/components/ui/button";

export default function RootMainScreen() {
	const { message } = useMain();
	return (
		<Fragment>
			<Button>Button Components</Button>
			<div>{message && <div>{message}</div>}</div>
		</Fragment>
	);
}
