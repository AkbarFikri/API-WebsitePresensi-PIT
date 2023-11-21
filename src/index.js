import express from 'express';
import router from './router/userRoute.js';


const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("JALAN CUY")
})

export default {
  app
}