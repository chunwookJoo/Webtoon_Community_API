import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Board } from './schema/board.schema';
import { BoardDocument } from './schema/board.schema';

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

  async findOneDelete({ id }) {
    try {
      await this.boardModel.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
