import Recipe from "/modules/Recipe.js";
import Boil from "./modules/actions/Boil.js";
import Heat from "./modules/actions/Heat.js";
import Pour from "./modules/actions/Pour.js";
import Ingredient from "./modules/ingredients/Ingredient.js";
import Tool from "./modules/Tool.js";
import Action from "./modules/actions/Action.js";


/**
 * This is an example of a simple recipe.
 * It yields boiled water.
 * Step variables are named after the action.
 */

// instantiate necessary tools
const pot = new Tool('Pot');
const cooktop = new Tool('Cooktop');

// Instantiate necessary ingredients
const water = new Ingredient('water');
const salt = new Ingredient('salt');


// Instantiate necessary steps
// const pour = new Step([pot], [water], "pour water into pot");
// const season = new Step([pot], [salt], "add salt into pot");
// const heat = new Step([pot, cooktop], [], "place pot of water on cooktop");
// const wait = new Step([], [], "wait 5 minutes");

// const r1 = new Recipe('boiled water', '5', [water, salt], [pour, season, heat, wait], [pot, cooktop]);

//  Here design the interface for Sous


// console.log(r1.phrase);
  
// Here I will test to make sure Recipe objects work correctly

let recipe_test = new Recipe(
  "Boiled Water",
  [
    new Pour(water).in(pot),
    new Heat(water).for(10).in(cooktop)
  ]
);

let root = document.getElementById("root")
  
root.innerHTML =
  "<h1>" + recipe_test.name + "</h1>" +
  "<h3>" + recipe_test.phrase + "</h3>";

recipe_test.actions.forEach((action, i) =>
{
  root.innerHTML +=
    "<h4> Step " + i + " <h4/>" +
    "<p>" + action.phrase() + "</p>"
})
