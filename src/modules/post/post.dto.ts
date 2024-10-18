import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsArray()
  content: any;

  @IsOptional()
  @IsString()
  image: string;
}

export class UpdatePostDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsArray()
  content: any;

  @IsOptional()
  @IsString()
  image: string;
}
