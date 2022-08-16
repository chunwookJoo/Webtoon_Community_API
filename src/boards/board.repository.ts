import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
// import { Board } from './board.entity';
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

  async createBoard(board: Board): Promise<Board> {
    const newBoard = new this.boardModel(board);
    return newBoard.save();
  }
}
