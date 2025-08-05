import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.user.createMany({
        data: [
            { email: 'alice@example.com', name: 'Alice' },
            { email: 'bob@example.com', name: 'Bob' },
            { email: 'carol@example.com', name: 'Carol' },
        ],
    });
    console.log('Seed data inserted');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });