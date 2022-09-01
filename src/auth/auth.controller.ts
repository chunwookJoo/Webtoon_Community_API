import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto, NicknameDto } from './dto/auth-credential.dto';
import { Request, Response } from 'express';
import { User } from './schema/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // 카카오 회원가입
  @Post('/kakaoSignUp')
  async kakaoSignUp(@Body(ValidationPipe) body: AuthCredentialDto, @Res() res) {
    try {
      const result = await this.authService.kakaoSignUp(body);
      res.send(result);
    } catch (error) {
      res.send({
        RESULT: 400,
        message: '카카오 회원가입 실패',
      });
    }
  }

  // 네이버 회원가입
  @Post('/naverSignUp')
  async naverSignUp(@Body(ValidationPipe) body: AuthCredentialDto, @Res() res) {
    try {
      const result = await this.authService.naverSignUp(body);
      res.send(result);
    } catch (error) {
      res.send({
        RESULT: 400,
        message: '네이버 회원가입 실패',
      });
    }
  }

  // 카카오 로그인
  @Post('/kakaoLogin')
  async kakaoLogin(@Body() param: any, @Res() res: Response): Promise<any> {
    try {
      const { rest_api_key, auth_code, domain } = param;
      if (!auth_code || !domain) {
        res.send({
          RESULT: 400,
          message: '카카오 로그인 정보가 없습니다.',
        });
      }
      const kakao = await this.authService.kakaoLogin({
        rest_api_key,
        auth_code,
        domain,
      });

      if (kakao.jwtToken) {
        return res.send({
          user: kakao,
          RESULT: 200,
          message: '로그인 성공',
        });
      } else {
        return res.send({
          user: kakao,
          RESULT: 401,
          message: '로그인 실패',
        });
      }
    } catch (error) {
      console.log(error);
      res.send({ RESULT: 500 });
    }
  }

  @Post('/naverLogin')
  async naverLogin(@Body() param: any, @Res() res: Response): Promise<any> {
    try {
      const { access_token } = param;
      const naver = await this.authService.naverLogin({
        access_token,
      });
      if (naver.jwtToken) {
        return res.send({
          user: naver,
          RESULT: 200,
          message: '로그인 성공',
        });
      } else {
        return res.send({
          user: naver,
          RESULT: 401,
          message: '로그인 실패',
        });
      }
    } catch (error) {
      console.log(error);
      res.send({ RESULT: 500 });
    }
  }

  @Post('/nickname/check')
  async nicknameCheck(
    @Body() body: NicknameDto,
    @Res() res: Response,
  ): Promise<void> {
    const result = await this.authService.nicknameCheck(body);

    try {
      res.send(result);
    } catch (error) {
      res.send(result);
      console.log(error);
    }
  }

  @Get('/userinfo/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.authService.getUserById(id);
  }

  // @Post('/user/logout')
  // async userLogout(@Body() body): Promise<void> {
  //   return this.authService.userLogout(body);
  // }
}
