import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/HttpException';

function errorMiddleware(error:HttpException, _req:Request, res:Response, _next:NextFunction):void {
  const status = error.status || 500;
  const message = error.message || 'Internal server error!';

  res.status(status).send({ message });
}

export default errorMiddleware;
