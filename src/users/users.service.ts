import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserRequestDto } from './dtos/users.request.dto';
import { User } from './users.schema';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signUp(body: UserRequestDto) {
    const { email, password, name, phone } = body;
    const isUserExist = await this.usersRepository.existsByEmail(email);

    if (isUserExist) {
      throw new ConflictException('해당 유저는 이미 존재합니다.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersRepository.create({
      email,
      password: hashedPassword,
      name,
      phone,
    });

    return user.readOnlyData;
  }
}
