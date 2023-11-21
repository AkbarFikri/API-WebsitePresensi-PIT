import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.get("/users", userController.getUsers);
router.post("/absensi", userController.postNewAbsen);
router.get("/absensi/:rapat_id", userController.getDataAbsensiByRapat);
router.get("/rapat", userController.getRapat);

export default router;
