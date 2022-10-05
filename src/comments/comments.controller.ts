import { Body, Controller, Post } from '@nestjs/common';
import { Comment } from './schema/comments.schema';
import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';

@Controller('comment')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post('/insert')
  async createComment(@Body() body: CreateCommentsDto): Promise<Comment> {
    return this.commentsService.createComment(
      body.board_id,
      body.comment,
      body.author,
      body.createdAt,
    );
  }
}
