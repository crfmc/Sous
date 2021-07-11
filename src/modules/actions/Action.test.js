import Action from './Action'
import Boil from './Boil'
import Heat from './Heat'
import Pour from './Pour'
import Ingredient from '../ingredients/Ingredient'

// Instantiate necessary ingredients
const salt = new Ingredient('salt');
const water = new Ingredient('water');

// Constructor testing
test('creates action object given ingredient', () =>
{
  expect( new Action(water).ingredient.name).toBe("water");
});

test('creates Boil object given ingredient', () =>
{
  expect( new Boil(water).ingredient.name).toBe("water");
});

test('creates Pour object given ingredient', () =>
{
  expect( new Pour(water).ingredient.name).toBe("water");
});

test('creates Heat object given ingredient', () =>
{
  expect( new Heat(water).ingredient.name).toBe("water");
});
