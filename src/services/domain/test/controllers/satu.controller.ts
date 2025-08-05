import type { Context } from "hono";
import prisma from "@/services/lib/prisma";

export const TestSatuController = async (c: Context) => {
	try {
		const results = await prisma.user.findMany();
		return c.json(results, 200);
	} catch (error) {
		return c.json(
			{
				message: "An error occurred while processing your request.",
				error: error instanceof Error ? error.message : "Unknown error",
			},
			500,
		);
	}
};
