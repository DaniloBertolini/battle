import { Mage, Necromancer } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Elf } from './Races';

const player1 = new Character('Danilo', new Elf(), new Mage());
const player2 = new Character('Marcel', new Elf(), new Mage());
const player3 = new Character('Hiago', new Elf(), new Necromancer());

const monster1 = new Monster();
const monster2 = new Dragon();

player1.levelUp();
player1.levelUp();
player1.levelUp();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => battle.fight());
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};