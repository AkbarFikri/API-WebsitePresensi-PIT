import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.get("/", userController.homePage);
router.get("/users", userController.getUsers);
router.post("/absensi", userController.postNewAbsen);
router.get("/rapat/:rapat_id/absensi", userController.getDataAbsensiByRapat);
router.get("/rapat", userController.getRapat);

export default router;
