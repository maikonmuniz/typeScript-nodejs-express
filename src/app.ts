// 1 - init project

import express, {Request, Response} from "express";
import router from "./router";

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(5000, async () => {
    console.log("App in 5000");
});