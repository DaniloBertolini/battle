import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Necromancer extends Archetypes {
  private _ability: EnergyType = 'mana';
  static counter = 0;

  constructor() {
    super('Necromancer');
    Necromancer.counter += 1;
  }

  get energyType(): EnergyType {
    return this._ability;
  }

  static override createdArchetypeInstances() {
    return Necromancer.counter;
  }
}