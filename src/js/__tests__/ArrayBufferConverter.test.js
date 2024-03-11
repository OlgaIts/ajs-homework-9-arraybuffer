import ArrayBufferConverter from '../ArrayBufferConverter';

describe('Тестирование класса ArrayBufferConverter', () => {
  test('Тестирование метода load()', () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const result = ArrayBufferConverter.load(data);
    expect(result.byteLength).toEqual(106);
  });

  test('Тестирование метода toString()', () => {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    const result = ArrayBufferConverter.load(data);
    expect(ArrayBufferConverter.toString(result)).toEqual(data);
  });
});
