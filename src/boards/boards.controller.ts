import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // 모든 board를 가져오는 handler
  @Get('/') // URI: localhost:3000/boards/
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }
}
