import express from "express";
import userController from "../controller/userController.js";
import userMiddleware from "../middleware/userMiddleware.js";

const router = express.Router();

router.get("/", userMiddleware.authKey, userController.homePage);
router.get("/users", userMiddleware.authKey, userController.getUsers);
router.post("/absensi", userMiddleware.authKey, userController.postNewAbsen);
router.get("/rapat/:rapat_id/absensi", userMiddleware.authKey, userController.getDataAbsensiByRapat);
router.get("/rapat", userMiddleware.authKey, userController.getRapat);

export default router;
