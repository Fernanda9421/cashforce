import Order from '../database/models/Order.model';

class OrderService {
  public async getAll():Promise<Order[]> {
    const orders = await Order.findAll();

    return orders;
  }
}

export default OrderService;
