import Ingredient from './Ingredient'
'use strict';

// Constructor testing
test('creates an ingredient object', () =>
{
  expect(new Ingredient("sugar").name).toBe("sugar");
});

test('test inequality of objects', () =>
{
  expect(new Ingredient("sugar") === new Ingredient("sugar")).toBe(false);
});
