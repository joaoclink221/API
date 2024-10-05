import * as db from "../../repository/canalRepository.js";

export default async function salvarCanal(canal) {
  let id = await db.inserirCanal(canal);

  return id;
}
