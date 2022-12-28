import { NextFunction, Request, Response } from 'express';
import OrderportionService from '../services/orderportion.service';

class OrderportionController {
  private service: OrderportionService;

  constructor() {
    this.service = new OrderportionService();
  }

  public async getAll(_req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const orderportions = await this.service.getAll();

      return res.status(200).json(orderportions);
    } catch (error) {
      next(error);
    }
  }
}

export default OrderportionController;
