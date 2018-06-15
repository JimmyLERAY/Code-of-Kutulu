declare const print: (res: string) => void

export const WAIT = () => {
  print('WAIT')
}

export const MOVE = (x: number, y: number) => {
  print(`MOVE ${x} ${y}`)
}
