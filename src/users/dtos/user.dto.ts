import { ApiProperty, OmitType } from '@nestjs/swagger';
import { User } from '../users.schema';

export class ReadOnlyCatDto extends OmitType(User, ['password'] as const) {
  @ApiProperty({
    example: 'asdf32f34w3r',
    description: 'id',
  })
  id: string;
}
