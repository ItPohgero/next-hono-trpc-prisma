import { UserRepository } from "@/services/repositories/user.repository";

export const GetAllUsecase = () => {
	const { findAll } = new UserRepository();
	return findAll;
};
