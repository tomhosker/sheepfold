export default function brand(obj, buttonName)
{
  if(buttonName === "Brand")
  {
    return {
             total: buttonName+"ed!",
             next: null,
             operation: null,
           };
  }
  else
  {
    return {
             total: buttonName,
             next: null,
             operation: null,
           };
  }
}
