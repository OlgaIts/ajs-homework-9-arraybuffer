import Daemon from '../Daemon';
import Magician from '../Magician';

describe('Тестирование класса MathGame ', () => {
  test('Сила урона без дурмана', () => {
    const daemon = new Daemon('Страшный', 1);
    daemon.attack = 100;
    daemon.stoned = false;
    expect(daemon.attack).toBe(100);
  });

  test('Сила урона без дурмана - 3 клетки', () => {
    const magic = new Magician('Мерлин', 3);
    magic.attack = 100;
    magic.stoned = false;
    expect(magic.attack).toBe(80);
  });

  test('Сила урона с дурманом - 3 клетки', () => {
    const magic = new Magician('Мерлин', 3);
    magic.attack = 100;
    magic.stoned = true;
    expect(magic.attack).toBe(72);
  });

  test('Сила урона без дурмана -  11 клеток', () => {
    const magic = new Magician('Мерлин', 11);
    magic.attack = 100;
    magic.stoned = false;
    expect(magic.attack).toBe(0);
  });
});
