import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ObjectId } from 'mongoose';

export class AuthCredentialDto {
  authToken: string;
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

  myWebtoon: string[];
}

export class NicknameDto {
  @IsString()
  @MinLength(2)
  @MaxLength(10)
  @IsNotEmpty()
  nickname: string;
}
