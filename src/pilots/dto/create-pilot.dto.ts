import { ApiProperty } from '@nestjs/swagger';

export class CreatePilotDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({ nullable: true })
  email: string;
}
