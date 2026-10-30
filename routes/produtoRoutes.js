import { Router } from "express";

import {
    vincularFornecedorAoProduto,
    removerFornecedorDoProduto
} from "../controller/produtoController.js";

const router = Router();

router.patch (
    "/:idProduto/fornecedor/:idFornecedor",
    vincularFornecedorAoProduto
);

router.patch (
    "/:idProduto/fornecedor",
    removerFornecedorDoProduto
);  

export default router;
