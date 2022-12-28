import Cnpj from '../database/models/Cnpj.model';

class CnpjService {
  public async getAll():Promise<Cnpj[]> {
    const cnpjs = await Cnpj.findAll();

    return cnpjs;
  }
}

export default CnpjService;
