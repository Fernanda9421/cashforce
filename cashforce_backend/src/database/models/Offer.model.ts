import { Model, DataTypes } from 'sequelize';
import db from '.';
import Order from './Order.model';
import Sponsor from './Sponsor.model';

class Offer extends Model {
  declare id: number;
  declare tax: string;
  declare tariff: string;
  declare adValorem: string;
  declare float: string;
  declare iof: string;
  declare expiresIn: string;
  declare paymentStatusSponsor: number;
  declare paymentStatusProvider: number;
  declare createdAt: string;
  declare updatedAt: string;
  declare orderId: number;
  declare sponsorId: number;
}

Offer.init({
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  tax: { type: DataTypes.STRING, allowNull: false },
  tariff: { type: DataTypes.STRING, allowNull: false },
  adValorem: { type: DataTypes.STRING, allowNull: false },
  float: { type: DataTypes.STRING, allowNull: false },
  iof: { type: DataTypes.STRING, allowNull: false },
  expiresIn: { type: DataTypes.DATE, allowNull: false },
  paymentStatusSponsor: { type: DataTypes.TINYINT, defaultValue: 0 },
  paymentStatusProvider: { type: DataTypes.TINYINT, defaultValue: 0 },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
  orderId: { type: DataTypes.INTEGER },
  sponsorId: { type: DataTypes.INTEGER },
}, {
  sequelize: db,
  modelName: 'Offer',
  tableName: 'offers',
});

Offer.belongsTo(Order, { foreignKey: 'orderId', as: 'orders' });
Offer.belongsTo(Sponsor, { foreignKey: 'sponsorId', as: 'sponsors' });

export default Offer;
