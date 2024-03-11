import MathGame from './MathGame';

export default class Magician extends MathGame {
  constructor(name, distance) {
    super(name, 'Magician', distance);
    this.attack = 10;
    this.defence = 40;
  }
}
