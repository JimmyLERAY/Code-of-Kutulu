import { Entity } from './../classes/Entity'
import { Maze } from '../classes/Maze'
import { heuristic } from './heuristic'

declare const readline: () => string

export const eachTurn = (maze: Maze): void => {
  const entities = new Array<Entity>()
  const numEntity = Number(readline())

  for (let i = 0; i < numEntity; i++) {
    const [type, id, x, y, param0, param1, param2]: any[] = readline().split(' ')
    entities.push(new Entity(type, id, x, y, param0, param1, param2))
  }

  // Output instructions
  heuristic(maze, entities)
}
