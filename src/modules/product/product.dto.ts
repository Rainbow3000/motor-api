import {
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  size: string;

  @IsString()
  price: string;

  @IsNumber()
  @IsOptional()
  sold: number;

  @IsNumber()
  categoryId: number;
}

export class UpdateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsString()
  size: string;

  @IsString()
  price: string;

  @IsNumber()
  @IsOptional()
  sold: number;

  @IsNumber()
  categoryId: number;
}

export class GetListProductDto {
  @IsOptional()
  @IsNumber()
  page: number;

  @IsNumber()
  @IsOptional()
  limit: number;

  @IsString()
  @IsOptional()
  q?: string;

  @IsNumberString()
  @IsOptional()
  categoryId?: number;

  @IsString()
  @IsOptional()
  price?: string;
}
