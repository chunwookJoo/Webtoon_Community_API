import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Comment } from './schema/comments.schema';
import { CommentsDocument } from './schema/comments.schema';

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectModel(Comment.name) private commentsModel: Model<CommentsDocument>,
  ) {}

  async createComment(comment: Comment): Promise<Comment> {
    const newComment = new this.commentsModel(comment);
    return newComment.save();
  }

  async findOne(userFilterQuery: FilterQuery<Comment>): Promise<Comment> {
    return this.commentsModel.findOne(userFilterQuery);
  }

  async find(): Promise<Comment[]> {
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
