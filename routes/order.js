import { Router } from 'express';
import { createProduct, deleteProduct, getAllProducts, getProductById, getProductsBySellerId, updateProduct } from '../controllers/product.js';
export const productRouter = Router();

productRouter.post('/', createProduct);
productRouter.get('/:id', getProductById);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/user/:sellerId', getProductsBySellerId);
productRouter.get('/user/:userId', getProductsBySellerId);






export default productRouter;