import { produto } from "../model/produto.js";
import { fornecedor } from "../model/fornecedor.js";

import {
    buscarPorId as buscarProdutoPorId, vincularFornecedor, removerFornecedor
} from "../repository/fornecedorRepository.js";

export async function vincularFornecedorAoProduto(req, res) {
    try { 
        const idProduto = Number(req.params.idProduto);
        const idFornecedor = Number(req.params.idFornecedor);
    
        produto.validarId(idProduto, "produto");
        fornecedor.validarId(idFornecedor);

        const produto = await buscarProdutoPorId(idProduto);
        const fornecedor = await buscarFornecedorId(idFornecedor);

        if (!produto || !fornecedor) {
            return res.status(404).json ({
                mensagem: "Produto ou fornecedor não encontrado"
            });
        }
    await vincularFornecedor(idProduto, idFornecedor);
    
    return res.status(200).json ({
        mensagem: "Fornecedor vinculado com sucesso",
        id_produto: idProduto,
        fk_id_fornecedor: idFornecedor
    });
    } catch (erro) {
        return res.status (400).json ({
            mensagem: erro.mensagem
        });
    }
}
export async function removerFornecedorDoProduto(req, res) {
    try { 
        const idProduto = Number(req.params.idProduto);

        produto.validarId(idProduto, "produto");

        const produto = await buscarProdutoPorId(idProduto);

        if (!produto) {
            return res.status(404).json ({
                mensagem: "Produto não encontrado"
            });
        }
        await removerFornecedor(idProduto);
        return res.status(200).json ({
            mensagem: "Fornecedor removido do produto com sucesso"
        });
    }catch (erro) { 
        return res.status(400).json ({
            mensagem: erro.mensage
        })
    }
}
