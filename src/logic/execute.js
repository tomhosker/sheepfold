export default function execute(obj, buttonName)
{
  if(buttonName === "Brand")
  {
    return {
             message: buttonName+"ed!",
             sheep: null,
             last: null,
             operation: null
           };
  }
  else
  {
    return {
             message: buttonName,
             sheep: null,
             last: null,
             operation: null
           };
  }
}
