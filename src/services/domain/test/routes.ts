import { Hono } from "hono";
import { TestSatuController } from "@/services/domain/test/controllers/satu.controller";

const TestApp = new Hono().get("/satu", (c) => TestSatuController(c));

export default TestApp;
