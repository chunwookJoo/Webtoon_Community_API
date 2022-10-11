import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { BoardStatus } from './board-status.enum';
import { Board } from './schema/board.schema';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardDocument } from './schema/board.schema';

// @EntityRepository(Board)
// export class BoardRepository extends Repository<Board> {
//   async createBoard(
//     createBoardDto: CreateBoardDto,
//     user: User,
//   ): Promise<Board> {
//     const { title, description } = createBoardDto;

//     const board = this.create({
//       title,
//       description,
//       status: BoardStatus.PUBLIC,
//       user,
//     });

//     await this.save(board);

//     return board;
//   }
// }

@Injectable()
export class BoardRepository {
  constructor(
    @InjectModel(Board.name) private boardModel: Model<BoardDocument>,
  ) {}

  async createBoard(board: Board): Promise<Object> {
    const newBoard = new this.boardModel(board);
    try {
      newBoard.save();
      return {
        RESULT: 200,
        message: '후기 등록 성공',
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async find(): Promise<Board[]> {
    return this.boardModel.find().populate('author').populate('webtoon');
  }

  async findNaver(): Promise<Board[]> {
    return this.boardModel
      .find()
      .where('service')
      .equals('naver')
      .populate('author')
      .populate('webtoon');
  }

  async findKakao(): Promise<Board[]> {
    return this.boardModel
      .find()
      .where('service')
      .equals('kakao')
      .populate('author')
      .populate('webtoon');
  }

  async findKakaoPage(): Promise<Board[]> {
    return this.boardModel
      .find()
      .where('service')
      .equals('kakao-page')
      .populate('author')
      .populate('webtoon');
  }

  async findOne(userFilterQuery: FilterQuery<Board>): Promise<Board> {
    return this.boardModel
      .findById(userFilterQuery)
      .populate('author')
      .populate('webtoon');
  }
}
