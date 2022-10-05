import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './schema/board.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  async createBoard(
    title: string,
    description: string,
    author: any,
    webtoon: any,
  ): Promise<Board> {
    return this.boardRepository.createBoard({
      id: uuidv4(),
      title,
      description,
      author,
      webtoon,
    });
  }

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }
}

// @Injectable()
// export class BoardsService {
//   constructor(
//     @InjectRepository(BoardRepository)
//     private boardRepository: BoardRepository,
//   ) {}

//   async getBoardById(id: number): Promise<Board> {
//     const found = await this.boardRepository.findOne(id);

//     if (!found) {
//       throw new NotFoundException(`${id}를 못찾았어용`);
//     }

//     return found;
//   }

//   createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board> {
//     return this.boardRepository.createBoard(createBoardDto, user);
//   }

//   async deleteBoard(id: number, user: User): Promise<void> {
//     const result = await this.boardRepository.delete({ id, user });
//     if (result.affected === 0) {
//       throw new NotFoundException(`${id}에 해당하는 글이 없어용`);
//     }
//   }

//   async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
//     const board = await this.getBoardById(id);
//     board.status = status;

//     await this.boardRepository.save(board);

//     return board;
//   }

//   async getAllBoards(): Promise<Board[]> {
//     return this.boardRepository.find();
//   }
// }
