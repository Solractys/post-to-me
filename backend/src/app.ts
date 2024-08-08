import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use('/api', routes);

export default app;
