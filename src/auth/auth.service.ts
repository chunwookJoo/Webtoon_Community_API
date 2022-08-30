import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto, NicknameDto } from './dto/auth-credential.dto';
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

  /**
   * 카카오 유저 회원가입
   * @param body
   * @returns kakaoToken
   */
  async kakaoSignUp(body: AuthCredentialDto): Promise<any> {
    try {
      this.userRepository.createKakaoUser(body);

      // 유저 토큰 생성
      const { id } = body;
      const payload = { id };
      const jwtToken = this.jwtService.sign(payload);
      const data: object = {
        RESULT: 200,
        message: '카카오 회원가입 성공',
        user_data: body,
        jwtToken: jwtToken,
      };
      return data;
    } catch (error) {
      return {
        RESULT: 400,
        message: '회원가입 실패',
      };
    }
  }

  /**
   * 닉네임 중복 체크
   * @param body
   * @returns
   */
  async nicknameCheck(body: NicknameDto): Promise<any> {
    const { nickname } = body;
    const user = await this.userRepository.findOne({ nickname });

    // 닉네임이 없으면
    if (!user) {
      const data: object = {
        RESULT: 200,
        message: '사용할 수 있는 닉네임입니다.',
      };
      return data;
    } else {
      const data: object = {
        RESULT: 403,
        message: '이미 사용중인 닉네임입니다.',
      };
      return data;
    }
  }

  /**
   * 카카오 유저 로그인
   * @param param
   * @returns
   */
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
        /**
         * 카카오에서 준 id가 DB에 저장되있는지 확인
         */
        if (responseUserInfo.status === 200) {
          const id = responseUserInfo.data.id;
          const user = await this.userRepository.findOne({ id });

          if (user) {
            // 유저 토큰 생성
            const payload = { id };
            const jwtToken = this.jwtService.sign(payload);

            const data: object = {
              access_token: response.data.access_token,
              user_data: user,
              jwtToken: jwtToken,
            };
            return data;
          } else {
            const data: object = {
              access_token: response.data.access_token,
              user_data: responseUserInfo.data,
            };
            return data;
          }
        } else {
          throw new UnauthorizedException('로그인 실패');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getUserByToken(token: string): Promise<User> {
    return this.userRepository.findOne({ token });
  }

  // async userLogout(body): Promise<any> {
  //   const { access_token, admin_key } = body;
  //   console.log(access_token);
  //   console.log(admin_key);

  //   const kakaoLogoutUrl = 'https://kapi.kakao.com/v1/user/logout';

  //   try {
  //     const response = await axios({
  //       method: 'POST',
  //       url: kakaoLogoutUrl,
  //       headers: {
  //         Authorization: `Bearer ${access_token}/KakaoAK ${admin_key}`,
  //       },
  //     });
  //     console.log(response);

  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
