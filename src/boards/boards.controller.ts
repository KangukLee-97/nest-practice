import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // 모든 board를 가져오는 handler
  @Get('/') // URI: localhost:3000/boards/
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  // 새로운 board를 생성하는 handler
  @Post('/')
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }
}
