import { PrismaClient } from '@prisma/client'
import Forms from '../app/components/Form'

const prisma = new PrismaClient()

const user_data = Forms.data;

async function main() {
    await prisma.user.create({
        user_data
    });
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

