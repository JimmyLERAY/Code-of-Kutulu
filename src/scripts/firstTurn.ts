import { Maze } from './../classes/Maze'
import { Cell, CellType } from './../classes/Cell'

declare const readline: () => string

const cells: { [key: string]: CellType } = {
  '#': 'wall', //? # : mur
  w: 'gate', //? w : portail d'invocation
  '.': 'void' //? . : case vide
}

export const firstTurn = (): Maze => {
  const width: number = Number(readline())
  const height: number = Number(readline())
  const lines: any[][] = []

  for (let i = 0; i < height; i++) {
    lines.push(readline().split(''))
  }

  lines.map((line, row) => {
    line.map((cell, column) => new Cell(column, row, Cell.stringToType(cell)))
  })

  return new Maze(width, height, lines)
}
