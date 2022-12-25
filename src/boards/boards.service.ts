import { Injectable } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { Board } from './schema/board.schema';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  async createBoard(
    title: string,
    description: string,
    author: any,
    webtoon: any,
    service: string,
  ): Promise<Object> {
    return this.boardRepository.createBoard({
      title,
      description,
      author,
      webtoon,
      service,
    });
  }

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async getNaverBoard(): Promise<Board[]> {
    return this.boardRepository.findNaver();
  }

  async getKakaoBoard(): Promise<Board[]> {
    return this.boardRepository.findKakao();
  }

  async getKakaoPageBoard(): Promise<Board[]> {
    return this.boardRepository.findKakaoPage();
  }

  async getBoardById(_id: string): Promise<Board> {
    return this.boardRepository.findOne({ _id });
  }
}
