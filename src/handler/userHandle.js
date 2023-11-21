import { prisma } from "../utils/database.js";

const getUsers = async (request) => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
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

const postNewAbsen = async (request) => {
  const dataRapat = request.rapat;
  const dataAbsensi = request.anggota;
  
  const createRapat = await prisma.rapat.create({
    data: dataRapat,
    select: {
      id: true,
    }
  });

  dataAbsensi.forEach(element => {
    element.rapat_id = createRapat.id;
  }); 

  console.log(dataAbsensi);

  const createAbsensi = await prisma.absensi.createMany({
    data: dataAbsensi
  });

  

  return createAbsensi
};

export default {
  getUsers,
  getUserById,
  postNewAbsen,
};
