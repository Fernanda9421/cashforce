import { Model, DataTypes } from 'sequelize';
import db from '.';
import Order from './Order.model';

class Orderportion extends Model {
  declare id: number;
  declare nDup: string;
  declare dVenc: string;
  declare vDup: string;
  declare availableToMarket: number;
  declare createdAt: string;
  declare updatedAt: string;
  declare orderId: number;
}

Orderportion.init({
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  nDup: { type: DataTypes.STRING, allowNull: false },
  dVenc: { type: DataTypes.STRING, allowNull: false },
  vDup: { type: DataTypes.STRING, allowNull: false },
  availableToMarket: { type: DataTypes.TINYINT, defaultValue: 1 },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
  orderId: { type: DataTypes.INTEGER },
}, {
  sequelize: db,
  modelName: 'Orderportion',
  underscored: true,
});

Orderportion.belongsTo(Order, { foreignKey: 'orderId', as: 'orders' });

export default Orderportion;
