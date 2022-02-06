import {
  Controller,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { UsersService } from './users.service';

@Controller('users')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(SuccessInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUser() {
    // throw new HttpException('api error test', 401);
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
