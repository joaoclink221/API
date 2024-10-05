import { Router } from "express";
import salvarCanal from "../service/canal/salvarCanalService.js";

const endpoint = Router();

//inserir canal
endpoint.post("/canal", async (req, resp) => {
  try {
    let canal = req.body;
    let id = salvarCanal(canal)
    resp.send({
      id: id
    });
  } catch (err) {
    logError(err)
    resp.status(400).send(criarErro(err))
  }
});

export default endpoint;
