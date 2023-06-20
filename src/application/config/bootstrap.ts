import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import setupRoutes from "@/application/config/routes";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

setupRoutes(app);

export default app;
