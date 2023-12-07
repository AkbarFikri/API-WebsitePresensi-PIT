import userHandle from "../handler/userHandle.js";

const homePage = async (req, res, next) => {
  try {
    res.status(200).json({
      admin : "NGAPAIN KE API HAHHHHH😡😠"
    })
  } catch (e) {
    next(e)
  }
}

const getUsers = async (req, res, next) => {
  try {
    const response = await userHandle.getUsers(req.body);
    res.status(200).json({
      status: 200,
      data: response,
    });
  } catch (e) {
    next(e);
  }
};

const postNewAbsen = async (req, res, next) => {
    try {
        const response = await userHandle.postNewAbsen(req.body);
        res.status(201).json({
            status: 201,
            data: {
              rapat_id: response,
              massage: "Data berhasil ditambahkan",
            },
        })
    } catch (e) {
        next(e);
    }
};

const getRapat = async (req, res, next) => {
  try {
    const response = await userHandle.getRapat(req.boy)
    res.status(200).json({
      status: 200,
      data: response
    })
  } catch (e) {
    next(e);
  }
}

const getDataAbsensiByRapat = async (req, res, next) => {
  try {
    const response = await userHandle.getDataAbsensiByRapat(req.params)
    res.status(200).json({
      status: 200,
      data: response
    })
  } catch (e) {
    next(e);
  }
}

export default {
  getUsers,
  postNewAbsen,
  getRapat,
  getDataAbsensiByRapat,
  homePage
};
