import con from "./connection.js";

export async function inserirCanal(canal) {
  const comando = `INSERT INTO tb_canal (nm_canal, nr_canal, bt_aberto) 
     VALUES (?, ?, ?)`;

  const resposta = await con.query(comando, [
    canal.nome,
    canal.numero,
    canal.aberto,
  ]);

  let info = resposta[0];

  let idCanal = info.insertId;

  return idCanal;
}
