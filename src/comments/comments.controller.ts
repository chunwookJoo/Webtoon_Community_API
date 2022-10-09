import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Comment } from './schema/comments.schema';
import { CommentsService } from './comments.service';
import { CreateCommentsDto } from './dto/create-comments.dto';

@Controller('comment')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post('/insert')
  async createComment(@Body() commentBody: CreateCommentsDto): Promise<void> {
    return this.commentsService.createComment(commentBody);
  }

  @Get('/:id')
  async getAllComments(@Param('id') boardId: string): Promise<Comment> {
    return this.commentsService.getAllComments(boardId);
  }
}
