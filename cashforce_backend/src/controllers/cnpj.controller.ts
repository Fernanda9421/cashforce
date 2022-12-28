import { NextFunction, Request, Response } from 'express';
import CnpjService from '../services/cnpj.service';

class CnpjController {
  private service: CnpjService;

  constructor() {
    this.service = new CnpjService();
  }

  public async getAll(_req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const cnpjs = await this.service.getAll();

      return res.status(200).json(cnpjs);
    } catch (error) {
      next(error);
    }
  }
}

export default CnpjController;
