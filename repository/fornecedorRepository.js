import conecao from '../database/conexao.js';
 
export async function buscarPorId(id) {
    const sql =  "SELECT * FROM fornecedor WHERE id_fornecedor = ?";
    const [fornecedores] = await conecao.execute(sql, [id]);

    return fornecedores[0];
}