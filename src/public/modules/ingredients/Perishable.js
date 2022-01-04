

export default class Perishable extends Ingredient
{
  constructor(name, exp)
  {
    super(name);
    this.expiration = exp;
  }
}