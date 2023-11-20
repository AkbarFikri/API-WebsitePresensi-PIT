import { prisma } from "../utils/database.js";

const getUsers = async (request) => {
  const result = await prisma.user.findMany({
    select: {
      nama: true,
      role: true,
    },
  });
  return result;
};

const getUserById = async (request) => {
  const result = await prisma.user.findUnique({
    where: {
      id: Number(request.id),
    },
    select: {
      nama: true,
      role: true,
    },
  });
  return result;
};

export default {
  getUsers,
  getUserById,
};
