import Sheep from "./sheep";

export default class Flock
{
  constructor()
  {
    var adam = new Sheep(0, 1, -2, -1);
    var eve = new Sheep(1, 0, -2, -1);

    this.sheep = [adam, eve];
  }

  brand(id)
  {
    for(var i = 0; i < this.sheep.length; i++)
    {
      if(this.sheep[i].id === id) this.sheep[i].branded = true;
    }
  }

  breed(sire, dam)
  {
    var lambID = this.sheep.length;
    var lambGender = 0;
    var lamb = new Sheep(lambID, lambGender, sire, dam);

    this.sheep.push(lamb);
  }
}
