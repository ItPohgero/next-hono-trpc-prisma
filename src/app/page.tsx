"use client";
import { trpc } from "@/services/rpc/client";
import { useEffect, useState } from "react";

export default function Home() {
	const [message, setMessage] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const res = await trpc.api.test.satu.$get();
				const data = await res.json();
				setMessage(data.message);
			} catch {
				setMessage("Error fetching message");
			}
		})()
	}, []);

	return <div>{message && <div>{message}</div>}</div>;
}