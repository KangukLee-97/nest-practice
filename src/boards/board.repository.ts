import { EntityRepository, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

// Board Entity를 사용한다고 명시!
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const newBoard = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(newBoard);
    return newBoard;
  }
}
