import { IsNumber, IsObject } from 'class-validator';

export class CreateDetailsDto {
  @IsNumber()
  productId: number;

  @IsObject()
  description: any;
}

export class UpdateDetailsDto {
  @IsNumber()
  productId: number;

  @IsObject()
  description: any;
}
