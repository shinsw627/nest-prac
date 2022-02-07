import { OmitType } from '@nestjs/swagger';
import { User } from '../users.schema';

export class UserRequestDto extends OmitType(User, ['id']) {}
