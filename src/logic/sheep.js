export default class Sheep
{
  constructor(id, name, gender, sire, dam)
  {
    this.id = id;
    this.name = name;
    // 0 = female, 1 = male.
    this.gender = gender;
    this.branded = false;
    this.sire = sire;
    this.dam = dam;
  }

  brand()
  {
    this.branded = true;
  }
}
