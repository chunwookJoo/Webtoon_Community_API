import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardsController } from './boards.controller';
import { BoardRepository } from './board.repository';
import { BoardsService } from './boards.service';
import { Board } from './schema/board.schema';
import { BoardSchema } from './schema/board.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService, BoardRepository],
})
export class BoardsModule {}
