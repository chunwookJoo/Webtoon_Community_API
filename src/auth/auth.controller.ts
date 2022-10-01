import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
  ValidationPipe,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express/multer';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto, NicknameDto } from './dto/auth-credential.dto';
import { Request, Response } from 'express';
import { User } from './schema/user.schema';
import { multerOptions } from 'src/common/multerOptions';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * 카카오 회원가입
   * @param body 닉네임, 연령대, 성별
   * @param res
   */
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

  /**
   * 네이버 회원가입
   * @param body 닉네임, 연령대, 성별
   * @param res
   */
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

  /**
   * 카카오 로그인
   * @param param rest_api_key, auth_code, domain
   * @param res user
   * @returns
   */
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

  /**
   * 네이버 로그인
   * @param param rest_api_key, auth_code, domain
   * @param res user
   * @returns
   */
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

  /**
   * 닉네임 중복 체크
   * @param body nickname
   * @param res
   */
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

  /**
   * 유저 정보 조회
   * @param id userId
   * @returns user
   */
  @Get('/userinfo/:id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.authService.getUserById(id);
  }

  /**
   * 프로필 사진 수정
   * @param file profileImage
   * @param id userId
   * @returns
   */
  @UseInterceptors(FilesInterceptor('images', null, multerOptions))
  @Post('/userinfo/profileimg/upload/:id')
  async uploadProfileImg(
    @UploadedFiles() file: File[],
    @Param('id') id: string,
  ) {
    this.authService.uploadProfileImg(id, file);

    return {
      status: 200,
      message: '이미지 업로드 성공',
    };
  }

  /**
   * 유저 정보 업데이트
   * @param id userId
   * @param body nickname, age, gender
   * @param res
   */
  @Post('/userinfo/update/:id')
  async updateUserById(
    @Param('id') id: string,
    @Body() body: any,
    @Res() res: Response,
  ): Promise<void> {
    const result = await this.authService.updateUserById(id, body);
    try {
      res.send({
        user: result,
        RESULT: 200,
        message: '유저 정보 변경 성공',
      });
    } catch (error) {
      res.send({
        RESULT: 400,
        message: '유저 정보 변경 실패',
      });
      console.log(error);
    }
  }

  /**
   * 마이 웹툰 저장
   * @param id userId
   * @param body webtoonId
   * @param res
   */
  @Post('/insert/mywebtoon/:id')
  async insertMyWebtoon(
    @Param('id') id: string,
    @Body() body: any,
    @Res() res: Response,
  ): Promise<Object> {
    const result = await this.authService.insertMyWebtoon(id, body);
    return res.send(result);
  }

  /**
   * 마이 웹툰 삭제
   * @param id userId
   * @param body webtoonId
   * @param res
   */
  @Post('/delete/mywebtoon/:id')
  async deleteMyWebtoon(
    @Param('id') id: string,
    @Body() body: any,
    @Res() res: Response,
  ): Promise<Object> {
    const result = await this.authService.deleteMyWebtoon(id, body);
    return res.send(result);
  }

  // @Post('/user/logout')
  // async userLogout(@Body() body): Promise<void> {
  //   return this.authService.userLogout(body);
  // }
}
