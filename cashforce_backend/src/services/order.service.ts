import Buyer from '../database/models/Buyer.model';
import Order from '../database/models/Order.model';
import Provider from '../database/models/Provider.model';

class OrderService {
  public async getAll():Promise<Order[]> {
    const orders = await Order.findAll();

    return orders;
  }

  public async getByUserId(userId:number):Promise<Order[]> {
    const orders = await Order.findAll({
      where: { userId },
      include: [
        { model: Buyer, as: 'buyers' },
        { model: Provider, as: 'providers' },
      ],
      order: [['nNf', 'ASC'], ['emissionDate', 'ASC']],
    });

    return orders;
  }
}

export default OrderService;
