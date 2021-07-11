
/**
 * 
 * A Step object is the abstraction for the smallest pice of a
 * preparation. It describes a sub-process in the preparation
 * which consists of a list of necessary tools [tools], an 
 * [ingredient], and an [instruction].
 * 
 * An example of this object would corrspond to boiling water:
 * s1 = new Step(pot, water, "boil the water")
 * 
 */

export default class Step
{
  constructor(step_num, action)
  {
    this.number = step_num || 0;
    this.actions = actions;
    this.duration = this.agg_durations;
    this.tools = this.agg_tools;
    this.ingredients;
  }
  
  phrase()
  {
    let phr = "Step " + this.number + ":";
    
    // for (let t in this.tools) phr += t + ", ";

    return phr
  }
}