import MathGame from './MathGame';

export default class Daemon extends MathGame {
  constructor(name, distance) {
    super(name, 'Daemon', distance);
    this.attack = 10;
    this.defence = 40;
  }
}
