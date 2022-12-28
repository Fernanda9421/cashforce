import { NextFunction, Request, Response } from 'express';
import SponsorService from '../services/sponsor.service';

class SponsorController {
  private service: SponsorService;

  constructor() {
    this.service = new SponsorService();
  }

  public async getAll(_req:Request, res:Response, next:NextFunction):Promise<Response | void> {
    try {
      const sponsors = await this.service.getAll();

      return res.status(200).json(sponsors);
    } catch (error) {
      next(error);
    }
  }
}

export default SponsorController;
