"use client";
import { useEffect, useState } from "react";
import { trpc } from "@/services/rpc/client";
import { User } from "@prisma/client";

export function useMain() {
	const [users, setUsers] = useState<User[]>([]);
	useEffect(() => {
		(async () => {
			try {
				const res = await trpc.api.test.satu.$get();
				const result = await res.json();
				setUsers(result as User[]);
			} catch {
				setUsers([]);
			}
		})();
	}, []);
	return { users };
}