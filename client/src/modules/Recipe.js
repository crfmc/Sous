//  Here retreive the information from retreiver.js and
//  modify the information rendered in view.js


export default class Recipe
{
  /**
   * 
   * Constructs a Recipe object.
   * A Recipe object is an abstraction for a recipe.
   * It has a name [name], an ordered list of actions 
   * [actions], and a number denoting the number of
   * times it was perpared, [iterations].
   * 
   */
  constructor(name, actions, iterations)
  {
    // Here I should inspect the steps to get the amount of time necessary

    this.name = name;
    this.actions = actions;
    this.ingredients = this.agg_ingredients();
    this.duration = this.agg_durations();
    this.tools = this.agg_tools();
    this.iterations = iterations || 0;
  }

  agg_ingredients()
  {
    let ingredients = [];
    this.actions.forEach(action => ingredients.push(action.ingredient));
    return new Set(ingredients);
    
  }

  agg_durations()
  {
    let dur = 0;
    this.actions.forEach(action => dur += action.duration);

    return dur;
  }

  agg_tools()
  {
    let tools = [];
    this.actions.forEach(action => tools.push(action.tool));
    return tools;
  }

  get phrase()
  {
    let phr = this.name + " takes " + this.duration + " minutes, and uses: ";

    this.ingredients.forEach(ingr => phr += ingr.name + ", ")
    // for (let ingr in this.ingredients) phr += this.ingredients[ingr].name + ", ";

    return phr
  }
}