import { HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number) {
    if (value < 0) {
      throw new HttpException('파라미터 값은 양수만 허용됩니다.', 400);
    }

    return;
  }
}
