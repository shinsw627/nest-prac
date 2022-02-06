import {
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { PositiveIntPipe } from 'src/positiveInt.pipe';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseFilters(HttpExceptionFilter)
  getAllUser() {
    throw new HttpException('api error test', 401);
    return 'asdf';
  }

  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
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
