import { NextFunction, Request, Response } from 'express';
import ProviderService from '../services/provider.service';

class ProviderController {
  private service: ProviderService;

  constructor() {
    this.service = new ProviderService();
  }

  public async getAll(_req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const providers = await this.service.getAll();

      return res.status(200).json(providers);
    } catch (error) {
      next(error);
    }
  }
}

export default ProviderController;
