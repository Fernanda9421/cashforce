import { NextFunction, Request, Response } from 'express';
import OfferService from '../services/offer.service';

class OfferController {
  private service: OfferService;

  constructor() {
    this.service = new OfferService();
  }

  public async getAll(_req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const offers = await this.service.getAll();

      return res.status(200).json(offers);
    } catch (error) {
      next(error);
    }
  }
}

export default OfferController;
