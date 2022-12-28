import { NextFunction, Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public async getAll(_req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const orders = await this.service.getAll();

      return res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }

  public async getByUserId(req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const { userId } = req.params;

      const orders = await this.service.getByUserId(Number(userId));

      return res.status(200).json(orders);
    } catch (error) {
      next(error);
    }
  }
}

export default OrderController;
