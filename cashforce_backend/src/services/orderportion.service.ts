import Orderportion from '../database/models/Orderportion.model';

class OrderportionService {
  public async getAll():Promise<Orderportion[]> {
    const orderportions = await Orderportion.findAll();

    return orderportions;
  }
}

export default OrderportionService;
