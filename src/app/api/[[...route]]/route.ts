import { Hono } from "hono";
import { handle } from "hono/vercel";
import TestApp from "@/services/domain/test/routes";

const app = new Hono()
	// .use("*", LoggerMiddleware)
	// .use("*", ErrorMiddleware)
	// .use(prettyJSON())
	// .use(
	//     "*",
	//     secureHeaders({
	//         xFrameOptions: false,
	//         xXssProtection: false,
	//     }),
	// )
	.basePath("/api")
	.route("/test", TestApp);

export const GET = handle(app);
export const POST = handle(app);
export type AppType = typeof app;
