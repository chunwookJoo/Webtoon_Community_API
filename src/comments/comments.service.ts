import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { Comment } from './schema/comments.schema';
import { v4 as uuidv4 } from 'uuid';
import { ObjectId } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(private commentsRepository: CommentsRepository) {}

  async createComment(commentBody: any): Promise<Object> {
    return this.commentsRepository.createComment(commentBody);
  }

  async getAllComments(boardId: string): Promise<Comment> {
    return this.commentsRepository.findByBoardId(boardId);
  }
}
