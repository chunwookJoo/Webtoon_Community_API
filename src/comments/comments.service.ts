import { Injectable, NotFoundException } from '@nestjs/common';
import { CommentsRepository } from './comments.repository';
import { Comment } from './schema/comments.schema';
import { v4 as uuidv4 } from 'uuid';
import { ObjectId } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(private commentsRepository: CommentsRepository) {}

  async createComment(
    board_id: any,
    comment: string,
    author: any,
    createdAt: Date,
  ): Promise<Comment> {
    return this.commentsRepository.createComment({
      id: uuidv4(),
      board_id,
      comment,
      author,
      createdAt,
    });
  }

  async getAllComments(): Promise<Comment[]> {
    return this.commentsRepository.find();
  }
}
