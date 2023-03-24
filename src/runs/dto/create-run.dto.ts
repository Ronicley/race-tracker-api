import { ApiProperty } from '@nestjs/swagger';

export class CreateRunDto {
  @ApiProperty()
  pilot: number;

  @ApiProperty()
  category: number;

  @ApiProperty()
  time: string;

  @ApiProperty()
  name: string;
}
