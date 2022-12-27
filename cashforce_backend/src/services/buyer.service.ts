import Buyer from '../database/models/Buyer.model';

class BuyerService {
  public async getAll():Promise<Buyer[]> {
    const buyers = await Buyer.findAll();

    return buyers;
  }
}

export default BuyerService;
