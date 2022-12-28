import Offer from '../database/models/Offer.model';

class OfferService {
  public async getAll():Promise<Offer[]> {
    const offers = await Offer.findAll();

    return offers;
  }
}

export default OfferService;
