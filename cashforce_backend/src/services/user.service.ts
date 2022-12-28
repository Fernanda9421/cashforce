import User from '../database/models/User.model';

class UserService {
  public async getAll():Promise<User[]> {
    const users = await User.findAll();

    return users;
  }

  public async getById(id:number):Promise<User | null> {
    const user = await User.findByPk(id);

    return user;
  }
}

export default UserService;
