import { Model, DataTypes } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare phoneNumber: string;
  declare mobile: string;
  declare departament: string;
  declare verificationCode: string;
  declare emailChecked: number;
  declare createdAt: string;
  declare updatedAt: string;
  declare cashforceAdm: number;
}

User.init({
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phoneNumber: { type: DataTypes.STRING },
  mobile: { type: DataTypes.STRING },
  departament: { type: DataTypes.STRING },
  verificationCode: { type: DataTypes.STRING },
  emailChecked: { type: DataTypes.TINYINT, defaultValue: 0 },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
  cashforceAdm: { type: DataTypes.TINYINT, defaultValue: 0 },
}, {
  sequelize: db,
  modelName: 'User',
  tableName: 'users',
});

export default User;
