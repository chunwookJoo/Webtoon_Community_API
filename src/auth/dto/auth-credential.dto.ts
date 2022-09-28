import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ObjectId } from 'mongoose';
import { Webtoon } from 'src/webtoons/schemas/webtoon.schema';

export class AuthCredentialDto {
  kakaoToken: string;
  naverToken: string;
  id: string;
  email: string;
  profileImage: string;

  @IsString()
  @MinLength(2)
  @MaxLength(12)
  nickname: string;

  @IsString()
  age: string;

  @IsString()
  gender: string;

  myWebtoon: Webtoon;

  // @IsString()
  // @MinLength(4)
  // @MaxLength(20)
  // @Matches(/^[a-zA-Z0-9]*$/, {
  //   message: '비밀번호는 영문 또는 숫자만 가능합니다.',
  // })
  // password: string;
}

export class NicknameDto {
  @IsString()
  @MinLength(2)
  @MaxLength(10)
  @IsNotEmpty()
  nickname: string;
}
