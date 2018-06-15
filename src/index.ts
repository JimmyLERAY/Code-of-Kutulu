import { firstTurn } from './scripts/firstTurn'
import { eachTurn } from './scripts/eachTurn'
import { Maze } from './classes/Maze'

// First turn instructions
// The Maze Initialization
const maze: Maze = firstTurn()

// Infinite Game Loop
while (true) eachTurn(maze)
