// src/controllers/brand.controller.ts
import { Request, Response } from 'express';
import BrandModel from '../models/brand';
import JSONResponse from '../utils/JSONResponse';

class BrandController {

  //create a brand 
  public static async createBrand(req: Request, res: Response): Promise<void> {
    try {
      const { brandName, brandUrl } = req.body;
      const brand = new BrandModel({ brandName, brandUrl });
      const savedBrand = await brand.save();
      res.json(savedBrand);
    } catch (error) {
      JSONResponse.serverError(res, 'Internal Server Error');
    }
  }


  //get a brand by brand id
  public static async getBrandById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const brand = await BrandModel.findById(id);
      if (!brand) {
        JSONResponse.notFound(res, 'Brand not found');
        return;
      }
      res.json(brand);
    } catch (error) {
      JSONResponse.serverError(res, 'Internal Server Error');
    }
  }


  //get all brands or filtered brands
  public static async getBrands(req: Request, res: Response): Promise<void> {
    try {
      const { brandName, brandUrl } = req.query;
      // Build a filter object based on the provided query parameters
      const filter: { [key: string]: any } = {};
      if (brandName) filter.brandName = brandName;
      if (brandUrl) filter.brandUrl = brandUrl;

      // Check if the filter object is empty
      const noFilters = Object.keys(filter).length === 0;

      // Use the filter object in the find query or return all brands if no filters are provided
      const brands = noFilters ? await BrandModel.find() : await BrandModel.find(filter);

      res.json(brands);
    } catch (error) {
      JSONResponse.serverError(res, 'Internal Server Error');
    }
  }

  //update a brand by brand id
  public static async updateBrand(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { brandName, brandUrl } = req.body;
      const updatedBrand = await BrandModel.findByIdAndUpdate(id, { brandName, brandUrl }, { new: true });
      res.json(updatedBrand);
    } catch (error) {
      JSONResponse.serverError(res, 'Internal Server Error');
    }
  }

  //delete a brand by brand id
  public static async deleteBrand(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await BrandModel.findByIdAndDelete(id);
      res.json({ message: 'Brand deleted successfully' });
    } catch (error) {
      JSONResponse.serverError(res, 'Internal Server Error');
    }
  }
}

export default BrandController;
