import { Body, Controller, Post } from '@nestjs/common';
import { Comments } from './schema/comments.schema';
import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post('/insert')
  async createComment(@Body() body: CreateCommentsDto): Promise<Comments> {
    return this.commentsService.createComment(
      body.comment,
      body.author,
      body.createAt,
    );
  }
}
