import { UserRepository } from "@/services/domain/test/repositories/user.repository";

export const GetAllUsecase = async () => {
	const repo = new UserRepository()
	return await repo.findAll();
};
