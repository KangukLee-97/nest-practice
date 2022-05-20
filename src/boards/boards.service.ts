import { Injectable } from '@nestjs/common';
import { Board } from './board.model';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 다른 component에서 참조할 가능성도 있으니까 private 설정

  getAllBoards(): Board[] {
    return this.boards;
  }
}
