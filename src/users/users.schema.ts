import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User extends Document {
  @ApiProperty({
    example: 'shinsw627@naver.com',
    description: '이메일',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'asdf1234!',
    description: '비밀번호 영문과 숫자와 특수문자 모두 포함된 8자 이상',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d#$@!%&*?]{8,}$/, {
    message:
      '영문과 숫자와 특수문자 모두 포함된 8자 이상의 비밀번호만 가능합니다.',
  })
  @Prop({
    required: true,
  })
  password: string;

  @ApiProperty({
    example: '신성웅',
    description: '이름',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '010-7544-2723',
    description: '전화번호',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @Prop()
  phone: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
    phone: string;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('readOnlyData').get(function (this: User) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    phone: this.phone,
  };
});
