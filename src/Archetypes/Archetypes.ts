import { EnergyType } from '../Energy';

export default abstract class Archetypes {
  private _special = 0;
  private _cost = 0;
  constructor(private _name: string) {
  }

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}