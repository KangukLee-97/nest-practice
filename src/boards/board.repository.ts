import { EntityRepository, Repository } from "typeorm";
import { Board } from './board.entity';

// Board Entity를 사용한다고 명시!
@EntityRepository(Board)   
export class BoardRepository extends Repository<Board> {
    
}