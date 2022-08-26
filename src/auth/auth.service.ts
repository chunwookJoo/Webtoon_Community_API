import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { UserRepository } from './user.repository';
// import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { v4 as uuidv4 } from 'uuid';
import { User } from './schema/user.schema';
import axios from 'axios';
import * as qs from 'qs';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  /**
   * 카카오 유저 회원가입
   * @param authCredentialDto
   * @returns
   */
  async kakaoSignUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { kakaoToken, id, email, nickname, age, gender } = authCredentialDto;
    return this.userRepository.createKakaoUser({
      kakaoToken,
      id,
      email,
      nickname,
      age,
      gender,
    });
  }

  /**
   * 네이버 유저 회원가입
   * @param authCredentialDto
   * @returns
   */
  // async naverSignUp(authCredentialDto: AuthCredentialDto): Promise<void> {
  //   const { naverToken, id, email, nickname, age, gender } = authCredentialDto;
  //   return this.userRepository.createNaverUser({
  //      naverToken,
  //      id,
  //      email,
  //      nickname,
  //      age,
  //      gender,
  //   });
  // }

  // async signIn(
  //   authCredentialDto: AuthCredentialDto,
  // ): Promise<{ accessToken: string }> {
  //   const { username, password } = authCredentialDto;
  //   const user = await this.userRepository.findOne({ username });

  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     // 유저 토큰 생성
  //     const payload = { username };
  //     const accessToken = await this.jwtService.sign(payload);

  //     return { accessToken: accessToken };
  //   } else {
  //     throw new UnauthorizedException('로그인 실패');
  //   }
  // }

  async kakaoLogin(param: {
    rest_api_key: string;
    auth_code: string;
    domain: string;
  }): Promise<any> {
    const { rest_api_key, auth_code, domain } = param;
    const kakaoKey = rest_api_key;
    const kakaoTokenUrl = 'https://kauth.kakao.com/oauth/token';
    const kakaoUserInfoUrl = 'https://kapi.kakao.com/v2/user/me';

    const body = {
      grant_type: 'authorization_code',
      client_id: kakaoKey,
      redirect_uri: `${domain}/kakaoLogin/callback`,
      code: auth_code,
    };
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    };
    try {
      const response = await axios({
        method: 'POST',
        url: kakaoTokenUrl,
        timeout: 30000,
        headers,
        data: qs.stringify(body),
      });
      if (response.status === 200) {
        const headerUserInfo = {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          Authorization: 'Bearer ' + response.data.access_token,
        };
        const responseUserInfo = await axios({
          method: 'GET',
          url: kakaoUserInfoUrl,
          timeout: 30000,
          headers: headerUserInfo,
        });
        if (responseUserInfo.status === 200) {
          const data: object = {
            access_token: response.data.access_token,
            user_data: responseUserInfo.data,
          };

          return data;
        } else {
          throw new UnauthorizedException();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
