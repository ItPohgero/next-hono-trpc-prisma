import type { Context } from "hono";

export const TestSatuController = async (c: Context) => {
	try {
		return c.json(
			{
				message: "Hello Hono API Test! DARI API TEST SATU",
				data: {
					name: "Hono",
					version: "2.0.0",
				},
			},
			200,
		);
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
