import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardRepository } from './board.repository';
import { BoardsService } from './boards.service';
import { AuthModule } from 'src/auth/auth.module';
// import { Board } from './board.entity';
import { Board } from './schema/board.schema';
import { BoardSchema } from './schema/board.schema';
// import { Board, BoardSchema } from './schema/board.shema';

@Module({
  // imports: [TypeOrmModule.forFeature([BoardRepository]), AuthModule],
  imports: [
    MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService, BoardRepository],
})
export class BoardsModule {}
