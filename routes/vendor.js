import { Router } from 'express';
export const venderRouter = Router();
import { createVendor, getVendorById, updateVendor, deleteVendor, getAllVendors, getVendorByUserId } from '../controllers/vendor.js';

venderRouter.post('/', createVendor);
venderRouter.get('/:id', getVendorById);
venderRouter.put('/:id', updateVendor);
venderRouter.delete('/:id', deleteVendor);
venderRouter.get('/', getAllVendors);
venderRouter.get('/user/:userId', getVendorByUserId);



export default venderRouter;