import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUsersById);
router.post("/absensi", userController.postNewAbsen);


export default router;
