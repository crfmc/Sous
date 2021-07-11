// import { expect } from '@jest/globals'
import Boil from './Boil'
import Ingredient from '../ingredients/Ingredient'

// Instantiate necessary ingredients
const salt = new Ingredient('salt');
const water = new Ingredient('water');

test('creates an ingredient object', () =>
{
  expect( new Ingredient("sugar").name).toBe("sugar");
});

test('creates action object', () =>
{
  expect( new Boil(water).ingredient.name).toBe("water");
});

