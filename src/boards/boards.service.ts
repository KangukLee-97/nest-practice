import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 다른 component에서 참조할 가능성도 있으니까 private 설정

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC, // 가본으로는 public
    };

    this.boards.push(board); // 새로운 게시물을 boards 배열에 추가
    return board;
  }
}
