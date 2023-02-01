import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Board } from './schema/board.schema';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/schema/user.schema';

@Controller('/api/board')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Post('/create')
  async createBoard(@Body() createboardDto: CreateBoardDto): Promise<Object> {
    return this.boardsService.createBoard(
      createboardDto.title,
      createboardDto.description,
      createboardDto.author,
      createboardDto.webtoon,
      createboardDto.service,
    );
  }

  @Get('/')
  async getAllBoards(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  @Get('/naver')
  async getNaverBoard(): Promise<Board[]> {
    return this.boardsService.getNaverBoard();
  }

  @Get('/kakao')
  async getKakaoBoard(): Promise<Board[]> {
    return this.boardsService.getKakaoBoard();
  }

  @Get('/kakaoPage')
  async getKakaoPageBoard(): Promise<Board[]> {
    return this.boardsService.getKakaoPageBoard();
  }

  @Get('/:id')
  async getBoardById(@Param('id') _id: string): Promise<Board> {
    return this.boardsService.getBoardById(_id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }
}
