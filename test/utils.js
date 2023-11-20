import { prisma } from "../src/utils/database";

export const createTestUser = async () => {
    await prisma.user.create({
        data: {
            nama: "test",
            role: "staffmuda"
        }
    })
}

export const deleteTestUser = async () => {
    await prisma.user.deleteMany({
        where: {
            nama: "test"
        }
    })
}