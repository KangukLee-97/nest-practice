import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = []; // 다른 component에서 참조할 가능성도 있으니까 private 설정

  getAllBoards() {
    return this.boards;
  }
}
