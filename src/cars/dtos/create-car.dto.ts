import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'make must be a string' })
  readonly make: string;
  @IsString({ message: 'model must be a string' })
  readonly model: string;
}
