"use client";
import { useMain } from "@/clients/screens/root/hooks/useMain";

export default function RootMainScreen() {
	const { message } = useMain();
	return <div>{message && <div>{message}</div>}</div>;
}
