import { Cell } from './Cell'

export class Maze {
  constructor(public width: number, public height: number, cells: Cell[][]) {}
}
