import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Comments } from './schema/comments.schema';
import { CommentsDocument } from './schema/comments.schema';

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectModel(Comments.name) private commentsModel: Model<CommentsDocument>,
  ) {}

  async createComment(comments: Comments): Promise<Comments> {
    const newComment = new this.commentsModel(comments);
    return newComment.save();
  }

  async findOne(userFilterQuery: FilterQuery<Comments>): Promise<Comments> {
    return this.commentsModel.findOne(userFilterQuery);
  }

  async find(): Promise<Comments[]> {
    return this.commentsModel.find();
  }
}

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
