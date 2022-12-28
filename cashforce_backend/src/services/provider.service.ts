import Provider from '../database/models/Provider.model';

class ProviderService {
  public async getAll():Promise<Provider[]> {
    const providers = await Provider.findAll();

    return providers;
  }
}

export default ProviderService;
