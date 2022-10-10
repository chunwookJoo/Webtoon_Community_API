import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Comment } from './schema/comments.schema';
import { CommentsDocument } from './schema/comments.schema';

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectModel(Comment.name) private commentsModel: Model<CommentsDocument>,
  ) {}

  async createComment(commentBody: any): Promise<Object> {
    const newComment = new this.commentsModel(commentBody);

    try {
      newComment.save();
      return {
        RESULT: 200,
        message: '댓글 등록 성공',
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async findOne(userFilterQuery: FilterQuery<Comment>): Promise<Comment> {
    return this.commentsModel.findOne(userFilterQuery);
  }

  async findByBoardId(boardId: string): Promise<any> {
    const comments = this.commentsModel
      .find()
      .where('board_id')
      .equals(boardId)
      .populate('author');
    return comments;
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
