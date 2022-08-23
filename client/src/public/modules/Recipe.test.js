import Recipe from './Recipe'
import Pour from './actions/Pour'
import Heat from './actions/Heat'
import Ingredient from './ingredients/Ingredient'
import Tool from './Tool'



// instantiate necessary tools
const pot = new Tool('Pot');
const cooktop = new Tool('Cooktop');

// Instantiate necessary ingredients
const water = new Ingredient('water');
const salt = new Ingredient('salt');

// Create a recipe for testing
let recipe_test = new Recipe(
  "Boiled Water",
  [
    new Pour(water).in(pot),
    new Heat(water).for(10).in(cooktop)
  ]
);


// Test the constructor for tools
test('Recipe constructor', () =>
{
  expect(recipe_test.tools).toStrictEqual([pot, cooktop])
});

// Test constructor for duration
// test('Recipe constructor', () =>
// {
//   expect(recipe_test.duration).toBe(10)
// });