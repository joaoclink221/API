import * as db from "../repository/tvrepository.js";
import { Router } from "express";

const endpoint = Router();

//inserir canal
endpoint.post("/canal", async (req, resp) => {
  try {
    let canal = req.body;
    let id = await db.inserirCanal(canal);
    resp.send({
      id: id
    });
  } catch (err) {
    logError(err)
    resp.status(400).send(criarErro(err))
  }
});

export default endpoint;
