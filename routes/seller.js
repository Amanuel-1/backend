import { Router } from 'express';
import { createSeller, deleteSeller, getAllSellers, getSellerById, getSellerByUserId, updateSeller } from '../controllers/seller.js'
export const sellerRouter = Router();


sellerRouter.post('/', createSeller);
sellerRouter.get('/:id', getSellerById);
sellerRouter.put('/:id', updateSeller);
sellerRouter.delete('/:id', deleteSeller);
sellerRouter.get('/', getAllSellers);
// sellerRouter.get('/user/:sellerId', getSellerByUserId);
sellerRouter.get('/user/:userId', getSellerByUserId);






export default sellerRouter;