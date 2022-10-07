import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  webtoon: string;
}
