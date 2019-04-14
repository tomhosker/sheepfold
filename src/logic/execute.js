export default function execute(obj, buttonName)
{
  if(isNaN(buttonName) === false)
  {
    return({ message: "Selected: #"+buttonName, sheep: buttonName });
  }
  else if(buttonName === "Brand")
  {
    var brandMessage = obj.flock.brand();

    return({ message: brandMessage, flock: obj.flock });
  }
  else if(buttonName === "Breed")
  {
    var breedingMessage = obj.flock.breed();

    return({ message: breedingMessage, flock: obj.flock });
  }
  else if(buttonName === "Add")
  {
    var addMessage = obj.flock.add(obj.newbieName, obj.newbieGender);

    return({ message: addMessage, flock: obj.flock });
  }
  else
  {
    return({ message: buttonName, flock: obj.flock });
  }
}
