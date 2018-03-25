const assign = require('./');

test('assigns object', () => {
  const a = { a: 'foo', c: 'foo-bar' };
  const b = { a: 'bar', b: 'baz' };

  expect(assign(a, b)).toEqual({ a: 'bar', b: 'baz', c: 'foo-bar' });
});
