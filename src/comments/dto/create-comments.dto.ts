import { IsNotEmpty } from 'class-validator';

export class CreateCommentsDto {
  id: string;

  board_id: string;

  @IsNotEmpty()
  comment: string;

  author: string;

  createdAt: Date;
}
