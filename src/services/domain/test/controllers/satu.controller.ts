import type { Context } from "hono";
import {GetAllUsecase} from "@/services/domain/test/usecases/get-all.usecase";

export const TestSatuController = async (c: Context) => {
	try {
		const results = await GetAllUsecase();
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
