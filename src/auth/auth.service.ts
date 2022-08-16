import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { User } from './schema/user.schema';

// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectRepository(UserRepository)
//     private userRepository: UserRepository,
//     private jwtService: JwtService,
//   ) {}

//   async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
//     return this.userRepository.createUser(authCredentialDto);
//   }

//   async signIn(
//     authCredentialDto: AuthCredentialDto,
//   ): Promise<{ accessToken: string }> {
//     const { username, password } = authCredentialDto;
//     const user = await this.userRepository.findOne({ username });

//     if (user && (await bcrypt.compare(password, user.password))) {
//       // 유저 토큰 생성
//       const payload = { username };
//       const accessToken = await this.jwtService.sign(payload);

//       return { accessToken: accessToken };
//     } else {
//       throw new UnauthorizedException('로그인 실패');
//     }
//   }
// }

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  //   async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
  //     return this.userRepository.createUser(authCredentialDto);
  //   }
  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;
    return this.userRepository.createUser({
      id: uuidv4(),
      username,
      password,
    });
  }

  async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialDto;
    const user = await this.userRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성
      const payload = { username };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken: accessToken };
    } else {
      throw new UnauthorizedException('로그인 실패');
    }
  }
}
