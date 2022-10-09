import { IsNotEmpty } from 'class-validator';

export class CreateCommentsDto {
  @IsNotEmpty()
  board_id: string;

  @IsNotEmpty()
  comment: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  createdAt: Date;
}
