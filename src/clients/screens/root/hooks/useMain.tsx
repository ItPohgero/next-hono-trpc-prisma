"use client";
import { useEffect, useState } from "react";
import { trpc } from "@/services/rpc/client";

export function useMain() {
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
		})();
	}, []);
	return { message };
}
