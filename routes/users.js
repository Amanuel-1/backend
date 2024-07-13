import { Router } from 'express';
export const venderRouter = Router();
import { createVendor, getVendorById, updateVendor, deleteVendor, getAllVendors, getVendorByUserId } from '../controllers/vendor.js';

router.post('/', createVendor);
router.get('/:id', getVendorById);
router.put('/:id', updateVendor);
router.delete('/:id', deleteVendor);
router.get('/', getAllVendors);
router.get('/user/:userId', getVendorByUserId);

