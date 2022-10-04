import { IsNotEmpty } from 'class-validator';

export class CreateCommentsDto {
  id: string;

  @IsNotEmpty()
  comment: string;

  author: string;

  createAt: Date;
}
