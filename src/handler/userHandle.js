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
    },
  });

  dataAbsensi.forEach((element) => {
    element.rapat_id = createRapat.id;
  });

  const createAbsensi = await prisma.absensi.createMany({
    data: dataAbsensi,
  });

  return createRapat.id;
};

const getRapat = async (request) => {
  const result = await prisma.rapat.findMany({
    select: {
      id: true,
      ke: true,
      tanggal: true,
      tempat: true,
    },
  });

  return result;
};

const getDataAbsensiByRapat = async (request) => {
  const dataRapat = await prisma.rapat.findUnique({
    where: {
      id: Number(request.rapat_id),
    },
    select: {
      id: true,
      ke: true,
      tanggal: true,
      tempat: true,
      link: true,
    },
  });
  
  const dataAbsensi = await prisma.absensi.findMany({
    where: {
      rapat_id: Number(request.rapat_id),
    },
    select: {
      user_id: true,
      status: true,
    },
  });
  
  for (const absen of dataAbsensi) {
    const user = await prisma.user.findUnique({
      where:{
        id: absen.user_id
      },
      select:{
        nama: true,
        role: true,
      }
    })
    absen.nama = user.nama
    absen.role = user.role
  }

  const result = {};
  result.rapat = dataRapat;
  result.absensi = dataAbsensi;
  return result;
};

export default {
  getUsers,
  getUserById,
  postNewAbsen,
  getRapat,
  getDataAbsensiByRapat,
};
