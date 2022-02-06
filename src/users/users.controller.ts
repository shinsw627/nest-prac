import { Controller, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUser() {
    return 'asdf';
  }

  @Get(':id')
  getOneUser() {
    return 'a';
  }

  @Post()
  createUser() {
    return 'asdf';
  }

  @Put(':id')
  updateUser() {
    return 'update';
  }

  @Post()
  loginUser() {
    return 'login';
  }
}
