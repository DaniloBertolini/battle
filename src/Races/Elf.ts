import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static raceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.raceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances() {
    return Elf.raceCounter;
  }
}