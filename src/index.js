import express from "express";
import router from "./router/userRoute.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(router);

app.listen(9090, () => {
  console.log("Server started!");
});
