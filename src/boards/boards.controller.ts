import {
  Body,
  Controller,
  Get,
  Delete,
  Patch,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
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
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  // 특정 ID값에 맞는 게시물 가져오는 handler
  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  // 특정 ID값에 맞는 게시물 삭제하기 handler
  // 꼭 위에 @nest/common에 delete 추가해줄 것!
  @Delete('/:id')
  deleteBoardById(@Param('id') id: string): void {
    this.boardsService.deleteBoardById(id);
  }

  // Board status 수정 handler
  @Patch('/:id/status')
  updateBoardStatus(@Param('id') id: string) {
    return this.boardsService.updateBoardStatus(id);
  }
}
