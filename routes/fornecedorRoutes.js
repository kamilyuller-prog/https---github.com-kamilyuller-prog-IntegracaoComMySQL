import { Router } from 'express';
import { 
    postFornecedor, 
    getFornecedores, 
    getFornecedorById, 
    patchFornecedor, 
    deleteFornecedor 
} from '../controller/fornecedorController.js';

const router = Router();

router.post('/fornecedor', postFornecedor);
router.get('/fornecedor', getFornecedores);
router.get('/fornecedor/:id', getFornecedorById);
router.patch('/fornecedor/:id', patchFornecedor);
router.delete('/fornecedor/:id', deleteFornecedor);

export default router;