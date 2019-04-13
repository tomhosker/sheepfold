export default function execute(obj, buttonName)
{
  if(buttonName.indexOf('#') >= 0)
  {
    if(obj.breed === false)
    {
      return {
               message: "Selected: "+buttonName,
               sheep: buttonName,
               last: obj.sheep,
               flock: obj.flock
             };
    }
    else if(obj.sheep === null)
    {
      return {
               message: "Syntax: sheep + Breed! + sheep",
               sheep: null,
               last: null,
               flock: obj.flock,
               breed: false
             };
    }
    else if(sameGenders(obj.sheep, buttonName))
    {
      return {
               message: "Breeding requires male and female!",
               sheep: null,
               last: null,
               flock: obj.flock,
               breed: false
             };
    }
    else
    {
      breed(obj.flock, buttonName, obj.sheep);

      return {
               message: "Breeding!",
               sheep: null,
               last: null,
               flock: obj.flock,
               breed: false
             };
    }
  }
  else if(buttonName === "Brand")
  {
    if(obj.sheep === null) return { message: "Select a sheep first!" };

    brand(obj.flock, obj.sheep);

    return {
             message: buttonName+"ed!",
             sheep: null,
             last: null,
             flock: obj.flock,
             breed: false
           };
  }
  else if(buttonName === "Breed")
  {
    if(obj.sheep === null) return { message: "Select a sheep first!" };

    return {
             message: "Pick his/her mate...",
             sheep: obj.sheep,
             last: null,
             flock: obj.flock,
             breed: true
           };
  }
  else
  {
    return {
             message: buttonName,
             sheep: null,
             last: null,
             flock: obj.flock,
             breed: false
           };
  }
}

function sameGenders(sheepName1, sheepName2)
{
  if(sheepName1.indexOf("Ram") >= 0)
  {
    if(sheepName2.indexOf("Ram") >= 0) return(true);
    else return(false);
  }
  else
  {
    if(sheepName2.indexOf("Ewe") >= 0) return(true);
    else return(false);
  }
}

function brand(flock, sheepName)
{
  var id = "";

  id = sheepName.substr(sheepName.indexOf('#')+1, sheepName.length);
  id = parseInt(id);

  flock.brand(id);
}

function breed(flock, sheepName1, sheepName2)
{
  var id1, id2 = "";
  var sire, dam = 0;

  id1 = sheepName1.substr(sheepName1.indexOf('#')+1, sheepName1.length);
  id2 = sheepName2.substr(sheepName2.indexOf('#')+1, sheepName2.length);
  id1 = parseInt(id1);
  id2 = parseInt(id2);

  if(sheepName1.indexOf("Ram") >= 0)
  {
    sire = id1;
    dam = id2;
  }
  else
  {
    sire = id2;
    dam = id1;
  }

  flock.breed(sire, dam);
}
