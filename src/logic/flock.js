import Sheep from "./sheep";

export default class Flock
{
  constructor()
  {
    var adam = new Sheep(0, 1, -2, -1);
    var eve = new Sheep(1, 0, -2, -1);

    this.sheep = [adam, eve];

    this.sheep.push(new Sheep(2, 0, -2, -1));
    this.sheep.push(new Sheep(3, 0, -2, -1));
    this.sheep.push(new Sheep(4, 0, -2, -1));
    this.sheep.push(new Sheep(5, 0, -2, -1));
    this.sheep.push(new Sheep(6, 0, -2, -1));
    this.sheep.push(new Sheep(7, 0, -2, -1));
    this.sheep.push(new Sheep(8, 0, -2, -1));
    this.sheep.push(new Sheep(9, 0, -2, -1));
  }

  static coinToss()
  {
    var ran = Math.random()*2;

    if(ran > 1) return(1);
    else return(0);
  }

  getSheepOrdinal(id)
  {
    for(var i = 0; i < this.sheep.length; i++)
    {
      if(this.sheep[i].id === id) return(i);
    }
    return(-1);
  }

  brand(id)
  {
    for(var i = 0; i < this.sheep.length; i++)
    {
      if(this.sheep[i].id === id) this.sheep[i].branded = true;
    }
  }

  breed(id1, id2)
  {
    var i1 = this.getSheepOrdinal(id1), i2 = this.getSheepOrdinal(id2);

    // No parthenogenesis.
    if(id1 === id2) return("No parthenogenesis!");

    // Parents must exist in flock.
    if(i1 === -1) return("Bad sheep id: "+id1);
    if(i2 === -1) return("Bad sheep id: "+id2);

    // Branded sheep can't breed.
    if(this.sheep[i1].branded || this.sheep[i2].branded)
    {
      return("Branded sheep can't breed!");
    }

    var gender1 = this.sheep[i1].gender, gender2 = this.sheep[i2].gender;

    // Parents must be of opposite genders.
    if(gender1 === gender2) return("No same-sex reproduction!");

    var sire = -1, dam = -1;

    if(gender1 === 1)
    {
      sire = id1;
      dam = id2;
    }
    else
    {
      sire = id2;
      dam = id1;
    }

    // 50% chance of conception.
    var success = Flock.coinToss();
    if(success === 0) return("Better luck next time!");

    // No (parental) incest.
    if(this.sheep[i1].sire === id2 || this.sheep[i1].dam === id2 ||
       this.sheep[i2].sire === id1 || this.sheep[i2].dam === id1)
    {
      return("No incest!");
    }

    var lambID = this.sheep.length;
    var lambGender = Flock.coinToss();
    var lamb = new Sheep(lambID, lambGender, sire, dam);

    this.sheep.push(lamb);

    return("Breeding successful!");
  }
}
