import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Board } from './schema/board.schema';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
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
}

// @Controller('boards')
// @UseGuards(AuthGuard())
// export class BoardsController {
//   private logger = new Logger('BoardsController');
//   constructor(private boardsService: BoardsService) {}

//   @Post()
//   @UsePipes(ValidationPipe)
//   createBoard(
//     @Body() createBoardDto: CreateBoardDto,
//     @GetUser() user: User,
//   ): Promise<Board> {
//     this.logger.verbose(
//       `${user.username}가 새로운 글 작성 Payload: ${JSON.stringify(
//         createBoardDto,
//       )}`,
//     );
//     return this.boardsService.createBoard(createBoardDto, user);
//   }

//   @Get()
//   getAllBoards(@GetUser() user: User): Promise<Board[]> {
//     this.logger.verbose(`${user.username}의 모든 글 조회`);
//     return this.boardsService.getAllBoards();
//   }

//   @Get('/:id')
//   getBoardById(@Param('id') id: number, @GetUser() user: User): Promise<Board> {
//     this.logger.verbose(`${user.username}의 글 조회`);
//     return this.boardsService.getBoardById(id);
//   }

//   @Delete('/:id')
//   deleteBoard(
//     @Param('id', ParseIntPipe) id: number,
//     @GetUser() user: User,
//   ): Promise<void> {
//     this.logger.verbose(`${user.username}의 글 삭제`);
//     return this.boardsService.deleteBoard(id, user);
//   }

//   @Patch('/:id/status')
//   updateBoardStatus(
//     @Param('id', ParseIntPipe) id: number,
//     @GetUser() user: User,
//     @Body('status', BoardStatusValidationPipe) status: BoardStatus,
//   ) {
//     this.logger.verbose(`${user.username}의 글 상태 변경`);
//     return this.boardsService.updateBoardStatus(id, status);
//   }
// }
