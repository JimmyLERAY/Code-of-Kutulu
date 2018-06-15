export type CellType = 'wall' | 'gate' | 'void'

export class Cell {
  constructor(public x: number, public y: number, public type: CellType) {}

  static stringToType = (str: string): CellType => {
    switch (str) {
      case '#':
        return 'wall'
      case 'w':
        return 'gate'
      case '.':
      default:
        return 'void'
    }
  }
}
