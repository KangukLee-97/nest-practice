import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 다른 component에서 참조할 가능성도 있으니까 private 설정

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC, // 가본으로는 public
    };

    this.boards.push(board); // 새로운 게시물을 boards 배열에 추가
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  deleteBoardById(id: string): void {
    const found = this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== found.id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    // const board = this.getBoardById(id);

    // if (board.status === 'PUBLIC') {
    //   board.status = BoardStatus.PRIVATE;
    // } else {
    //   board.status = BoardStatus.PUBLIC;
    // }

    // return board;

    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
