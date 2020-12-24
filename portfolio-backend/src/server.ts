import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});

// import express from "express";
// import cors from "cors";
// import routes from "./routes";
// // import { config } from "dotenv";

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(routes);

// app.listen(3333);
