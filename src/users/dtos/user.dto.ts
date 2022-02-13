import { ApiProperty, PickType } from '@nestjs/swagger';
import { User } from '../users.schema';

export class ReadOnlyCatDto extends PickType(User, [
  'email',
  'name',
  'phone',
] as const) {
  @ApiProperty({
    example: 'asdf32f34w3r',
    description: 'id',
  })
  id: string;
}
