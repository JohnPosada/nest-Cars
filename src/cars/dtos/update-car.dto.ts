import { IsOptional, IsString, IsUUID } from 'class-validator';

export class updateCarDto {
  @IsString({ message: 'make must be a string' })
  @IsOptional()
  readonly make?: string;
  @IsOptional()
  @IsString({ message: 'model must be a string' })
  readonly model?: string;
}
