import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export class UserRepository {
	async create(data: { email: string; name?: string }): Promise<User> {
		return prisma.user.create({ data });
	}

	async findById(id: number): Promise<User | null> {
		return prisma.user.findUnique({ where: { id } });
	}

	async findAll(): Promise<User[]> {
		return prisma.user.findMany();
	}

	async update(
		id: number,
		data: { email?: string; name?: string },
	): Promise<User> {
		return prisma.user.update({ where: { id }, data });
	}

	async delete(id: number): Promise<User> {
		return prisma.user.delete({ where: { id } });
	}
}
