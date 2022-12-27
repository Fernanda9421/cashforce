import { Model, DataTypes } from 'sequelize';
import db from '.';
import Buyer from './Buyer.model';
import Cnpj from './Cnpj.model';
import Provider from './Provider.model';
import User from './User.model';

class Order extends Model {
  declare id: number;
  declare orderNfId: string;
  declare orderNumber: string;
  declare orderPath: string;
  declare orderFileName: string;
  declare orderOriginalName: string;
  declare emissionDate: string;
  declare pdfFile: string;
  declare emitedTo: string;
  declare nNf: string;
  declare CTE: string;
  declare value: string;
  declare createdAt: string;
  declare updatedAt: string;
  declare cnpjId: string;
  declare userId: string;
  declare buyerId: string;
  declare providerId: string;
  declare orderStatusBuyer: string;
  declare orderStatusProvider: string;
  declare deliveryReceipt: string;
  declare cargoPackingList: string;
  declare deliveryCtrc: number;
}

Order.init({
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  orderNfId: { type: DataTypes.STRING, allowNull: false, unique: true },
  orderNumber: { type: DataTypes.STRING, allowNull: false },
  orderPath: { type: DataTypes.STRING, unique: true },
  orderFileName: { type: DataTypes.STRING, unique: true },
  orderOriginalName: { type: DataTypes.STRING, unique: true },
  emissionDate: { type: DataTypes.STRING },
  pdfFile: { type: DataTypes.STRING },
  emitedTo: { type: DataTypes.STRING, allowNull: false },
  nNf: { type: DataTypes.STRING },
  CTE: { type: DataTypes.STRING },
  value: { type: DataTypes.STRING },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
  cnpjId: { type: DataTypes.INTEGER },
  userId: { type: DataTypes.INTEGER },
  buyerId: { type: DataTypes.INTEGER },
  providerId: { type: DataTypes.INTEGER },
  orderStatusBuyer: { type: DataTypes.STRING, defaultValue: '0' },
  orderStatusProvider: { type: DataTypes.STRING, defaultValue: '0' },
  deliveryReceipt: { type: DataTypes.STRING },
  cargoPackingList: { type: DataTypes.STRING },
  deliveryCtrc: { type: DataTypes.STRING },
}, {
  sequelize: db,
  modelName: 'Order',
  underscored: true,
});

Order.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyers' });
Order.belongsTo(Provider, { foreignKey: 'providerId', as: 'providers' });
Order.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpjs' });
Order.belongsTo(User, { foreignKey: 'userId', as: 'users' });

export default Order;
