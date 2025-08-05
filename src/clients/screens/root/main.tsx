"use client";
import { useMain } from "@/clients/screens/root/hooks/useMain";
import { Fragment } from "react";
import { Button } from "@/clients/components/ui/button";

export default function RootMainScreen() {
	const { users } = useMain();
	return (
		<Fragment>
			<Button>Button Components</Button>
			<pre>{JSON.stringify(users, undefined, 2)}</pre>
		</Fragment>
	);
}
