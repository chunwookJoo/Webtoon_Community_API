import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { Comments } from './schema/comments.schema';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CommentsService {
  constructor(private commentsRepository: CommentsRepository) {}

  async createComment(
    comment: string,
    author: string,
    createdAt: Date,
  ): Promise<Comments> {
    return this.commentsRepository.createComment({
      id: uuidv4(),
      comment,
      author,
      createdAt,
    });
  }

  async getAllComments(): Promise<Comments[]> {
    return this.commentsRepository.find();
  }
}
