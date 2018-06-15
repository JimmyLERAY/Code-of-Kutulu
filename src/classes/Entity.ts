export type EntityType = 'EXPLORER' | 'WANDERER'

export class Entity {
  constructor(
    public type: EntityType,
    public id: number,
    public x: number,
    public y: number,
    public param0: number,
    public param1: number,
    public param2: number
  ) {}
}
