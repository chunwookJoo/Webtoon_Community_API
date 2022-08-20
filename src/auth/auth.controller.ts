import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log('req', req);
  }

  @Post('/kakaoLogin')
  async kakaoLogin(@Body() body: any, @Res() res): Promise<any> {
    try {
      const { rest_api_key, auth_code, domain } = body;
      if (!auth_code || !domain) {
        res.send({
          RESULT: 400,
        });
        throw new BadRequestException('카카오 로그인 정보가 없습니다.');
      }
      const kakao = await this.authService.kakaoLogin({
        rest_api_key,
        auth_code,
        domain,
      });
      res.send({
        user: kakao,
        RESULT: 200,
      });
    } catch (error) {
      console.log(error);
      res.send({ RESULT: 500 });
    }
  }
}
