import app from "./app";

import cors from "cors";

const port = process.env.PORT;

app.use(
  cors({ origin: "*", methods: "GET, POST, PUT, DELETE", credentials: true })
);
app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
