import express from "express";
import "dotenv/config";
import cors from "cors";
import adicionarRota from "./rotas.js";

const servidor = express();
servidor.use(express.json());
servidor.use(cors())
adicionarRota(servidor);

servidor.listen(process.env.PORT, () =>
  console.log(`subiu na ${process.env.PORT} (￣o￣) . z Z`)
);
