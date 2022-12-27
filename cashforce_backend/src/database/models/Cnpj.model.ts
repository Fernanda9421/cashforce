import { Model, DataTypes } from 'sequelize';
import db from '.';

class Cnpj extends Model {
  declare id: number;
  declare cnpj: string;
  declare companyType: string;
  declare createdAt: string;
  declare updatedAt: string;
}

Cnpj.init({
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  cnpj: { type: DataTypes.STRING, allowNull: false, unique: true },
  companyType: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, allowNull: false },
  updatedAt: { type: DataTypes.DATE, allowNull: false },
}, {
  sequelize: db,
  modelName: 'Cnpj',
  tableName: 'cnpjs',
});

export default Cnpj;
