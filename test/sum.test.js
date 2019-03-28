const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('input matching', () => {
    const correct = '1';
    expect(correct).toMatch('1');
})