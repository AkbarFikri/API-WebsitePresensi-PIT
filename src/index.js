import express from 'express';
import router from './router/userRoute.js';

const app = express();
app.use(cors({
  origin: '*'
}))
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server started!")
})

export default {
  app
}