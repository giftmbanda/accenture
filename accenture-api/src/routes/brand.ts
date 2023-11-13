// src/routes/brand.routes.ts
import { Router } from 'express';
import BrandController from '../controllers/brand';

const router = Router();

router.post('/brands', BrandController.createBrand);
router.get('/brands', BrandController.getBrands);
router.get('/brands/:id', BrandController.getBrandById); // Add a route to get a single brand by ID
router.put('/brands/:id', BrandController.updateBrand);
router.delete('/brands/:id', BrandController.deleteBrand);

export default router;
