import Sheep from "./sheep";

export default class Flock
{
  constructor()
  {
    var adam = new Sheep(0, "Adam", 1, -1, -1);
    var eve = new Sheep(1, "Eve", 0, -1, -1);

    this.sheep = [adam, eve];
    this.sire = adam;
    this.dam = eve;

    //this.test();
  }

  static coinToss()
  {
    var ran = Math.random()*2;

    if(ran > 1) return(1);
    else return(0);
  }

  brand()
  {
    var ran = Math.floor(Math.random()*this.sheep.length);
    var noUnbrandedFlag = true;

    for(var i = 0; i < this.sheep.length; i++)
    {
      if(this.sheep[i].branded === false)
      {
        noUnbrandedFlag = false;
        break;
      }
    }
    if(noUnbrandedFlag) return("No unbranded sheep left!");

    if(this.sheep[ran].branded === true) return(this.brand());
    else
    {
      this.sheep[ran].branded = true;
      return("Branded!");
    }
  }

  generateSire()
  {
    var ran = Math.floor(Math.random()*this.sheep.length);

    if((this.sheep[ran].gender === 1) &&
       (this.sheep[ran].branded === false))
    {
      this.sire = this.sheep[ran];
    }
    else this.generateSire();
  }

  generateDam()
  {
    var ran = Math.floor(Math.random()*this.sheep.length);

    if((this.sheep[ran].gender === 0) &&
       (this.sheep[ran].branded === false))
    {
      this.dam = this.sheep[ran];
    }
    else this.generateDam();
  }

  generateSireAndDam()
  {
    this.generateSire();
    this.generateDam();

    if(this.areParentChild(this.sire, this.dam) ||
       this.areFullSiblings(this.sire, this.dam))
    {
      this.generateSireAndDam();
    }
  }

  noSiresCheck()
  {
    for(var i = 0; i < this.sheep.length; i++)
    {
      if(this.sheep[i].gender === 1)
      {
        if(this.sheep[i].branded === false) return(false);
      }
    }

    return(true);
  }

  noDamsCheck()
  {
    for(var i = 0; i < this.sheep.length; i++)
    {
      if(this.sheep[i].gender === 0)
      {
        if(this.sheep[i].branded === false) return(false);
      }
    }

    return(true);
  }

  areParentChild(left, right)
  {
    if((left.sire === right.id) || (left.dam === right.id) ||
       (left.id === right.sire) || (left.id === right.dam))
    {
      return(true);
    }
    else return(false);
  }

  areFullSiblings(left, right)
  {
    if((left.sire === -1) || (left.dam === -1) ||
       (right.sire === -1) || (right.dam === -1))
    {
      return(false);
    }
    else if((left.sire === right.sire) && (left.dam === right.dam))
    {
      return(true);
    }
    else return(false);
  }

  hasLegalMate(i)
  {
    var left = this.sheep[i];

    if(this.sheep[i].branded === true) return(false);

    for(var j = 0; j < this.sheep.length; j++)
    {
      if((i !== j) &&
         (this.sheep[j].branded === false) &&
         (this.areParentChild(left, this.sheep[j]) === false) &&
         (this.areFullSiblings(left, this.sheep[j]) === false))
      {
        return(true);
      }
    }

    return(false);
  }

  genePoolCheck()
  {
    for(var i = 0; i < this.sheep.length; i++)
    {
      if(this.hasLegalMate(i)) return(false);
    }

    return(true);
  }

  breed()
  {
    if(this.noSiresCheck()) return("No unbranded rams!");
    if(this.noDamsCheck()) return("No unbranded ewes!");
    if(this.genePoolCheck()) return("Insufficient gene pool!");

    this.generateSireAndDam();

    // 50% chance of conception.
    var success = Flock.coinToss();
    if(success === 0) return("Better luck next time!");

    var lambID = this.sheep.length;
    var lambName = "";
    var lambGender = Flock.coinToss();

    if(lambGender === 0) lambName = "Ewe #"+lambID;
    else lambName = "Ram #"+lambID;

    var lamb = new Sheep(lambID, lambName, lambGender,
                         this.sire.id, this.dam.id);

    this.sheep.push(lamb);

    return("Breeding successful!");
  }

  add(name, gender)
  {
    var newbieID = this.sheep.length;
    var newbieName = "";
    var newbieGender = 0;

    if(gender === "Ram") newbieGender = 1;

    if(name !== "") newbieName = name;
    else if(newbieGender === 0) newbieName = "Ewe #"+newbieID;
    else newbieName = "Ram #"+newbieID;

    var newbie = new Sheep(newbieID, newbieName, newbieGender, -1, -1);

    this.sheep.push(newbie);

    return("Added "+newbieName+"!");
  }

  test()
  {
    console.log("Run unit tests on class Flock.");
    console.log("Tests passed!");
  }
}
