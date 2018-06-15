import { Entity } from './../classes/Entity'
import { Maze } from './../classes/Maze'
import { WAIT, MOVE } from './actions'

declare const printErr: (err: any) => void

export const heuristic = (maze: Maze, entities: Entity[]) => {
  MOVE(1, 1)
}
