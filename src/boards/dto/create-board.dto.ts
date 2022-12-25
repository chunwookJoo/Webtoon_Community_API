import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  webtoon: string;

  @IsNotEmpty()
  service: string;
}
