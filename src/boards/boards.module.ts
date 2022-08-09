import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardRepository } from './board.repository';
import { BoardsService } from './boards.service';
// import { Board, BoardSchema } from './schema/board.shema';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }]),
    TypeOrmModule.forFeature([BoardRepository]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
