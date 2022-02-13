import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRequestDto } from './dtos/users.request.dto';
import { User } from './users.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async existsByEmail(email: string): Promise<Pick<User, '_id'>> {
    try {
      const result = await this.userModel.exists({ email });
      return result;
    } catch (error) {
      throw new HttpException('디비 오류', 400);
    }
  }

  async create(userInfo: UserRequestDto): Promise<User> {
    return await this.userModel.create(userInfo);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    return user;
  }
}
