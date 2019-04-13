export default function execute(obj, buttonName)
{
  if(isNaN(buttonName) === false)
  {
    if(obj.breed === false)
    {
      return({ message: "Selected: #"+buttonName, sheep: buttonName,
               last: obj.sheep, flock: obj.flock, breed: false });
    }
    else if(obj.sheep === null)
    {
      return({ message: "Syntax: sheep + Breed! + sheep", sheep: null,
               last: null, flock: obj.flock, breed: false });
    }
    else
    {
      var id1 = parseInt(buttonName, 10), id2 = parseInt(obj.sheep, 10);
      var breedingMessage = obj.flock.breed(id1, id2);

      return({ message: breedingMessage, sheep: null,
               last: null, flock: obj.flock, breed: false });
    }
  }
  else if(buttonName === "Brand")
  {
    if(obj.sheep === null) return({ message: "Select a sheep first!" });

    var id = parseInt(obj.sheep, 10)

    obj.flock.brand(id);

    return({ message: "Branded!", sheep: null,
             last: null, flock: obj.flock, breed: false });
  }
  else if(buttonName === "Breed")
  {
    if(obj.sheep === null) return({ message: "Select a sheep first!" });

    return({ message: "Pick his/her mate...", sheep: obj.sheep,
             last: null, flock: obj.flock, breed: true });
  }
  else
  {
    return({ message: buttonName, sheep: null,
             last: null, flock: obj.flock, breed: false });
  }
}
