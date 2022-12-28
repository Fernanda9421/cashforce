import Sponsor from '../database/models/Sponsor.model';

class SponsorService {
  public async getAll():Promise<Sponsor[]> {
    const sponsors = await Sponsor.findAll();

    return sponsors;
  }
}

export default SponsorService;
