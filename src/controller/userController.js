import userHandle from "../handler/userHandle.js";

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

const getUsersById = async (req, res, next) => {
  try {
    const response = await userHandle.getUserById(req.params);
    res.status(200).json({
      data: response,
    });
  } catch (e) {
    next(e);
  }
};

const postNewAbsen = async (req, res, next) => {
    try {
        const response = await userHandle.postNewAbsen(req.body);
        res.status(200).json({
            status: 200,
            data: response,
        })
    } catch (e) {
        next(e);
    }
};

export default {
  getUsers,
  getUsersById,
  postNewAbsen,
};
