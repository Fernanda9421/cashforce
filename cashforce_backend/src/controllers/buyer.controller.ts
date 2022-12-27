import { NextFunction, Request, Response } from 'express';
import BuyerService from '../services/buyer.service';

class BuyerController {
  private service: BuyerService;

  constructor() {
    this.service = new BuyerService();
  }

  public async getAll(req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const buyers = await this.service.getAll();

      return res.status(200).json(buyers);
    } catch (error) {
      next(error);
    }
  }
}

export default BuyerController;
