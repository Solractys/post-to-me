import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    credentials: false,
  })
);

app.use(bodyParser.json());

app.use("/api", routes);

export default app;
