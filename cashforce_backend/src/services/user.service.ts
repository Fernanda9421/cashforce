import Buyer from '../database/models/Buyer.model';
import Order from '../database/models/Order.model';
import Provider from '../database/models/Provider.model';
import User from '../database/models/User.model';

class UserService {
  public async getAll():Promise<User[]> {
    const users = await User.findAll();

    return users;
  }

  public async getById(id:number):Promise<User | null> {
    const user = await User.findByPk(id, {
      include:
        {
          model: Order,
          where: { userId: id },
          as: 'orders',
          include: [
            { model: Buyer, as: 'buyers' },
            { model: Provider, as: 'providers' },
          ],
        },
    });

    return user;
  }
}

export default UserService;
