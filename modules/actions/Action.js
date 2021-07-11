/**
 * 
 * The Action class is an abstraction for any action taken as part
 * of a Step. It can represent any of its subclasses (e.g. Boil or Heat),
 * and is instantiated by binding an instance of Ingredient to it. 
 * It consists of a duration set by the setter method [For] and
 * a tool, which is set by the setter method [In].
 * 
 */
export default class Action
{
  constructor(ingredient)
  {
    this.duration = 0;
    this.tool = null;
    this.ingredient = ingredient || "no indgredient";
  }

  for(duration)
  {
    this.duration = duration;
    return this;
  }

  in(tool)
  {
    this.tool = tool;
    return this;
  }

  phrase()
  {
    let duration_phrase = this.duration === 0 ? "." : " for " + this.duration + " minutes.";
    return "Grab " + this.tool.name + ", " + "<b>" + this.constructor.name + "</b> " + this.ingredient.name + duration_phrase
  }
}