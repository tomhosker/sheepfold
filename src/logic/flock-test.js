import Flock from "./flock";
import Sheep from "./sheep";

export default function flockTest()
{
  var testFlock = new Flock();
  var lastMessage = "";
  var cain = new Sheep(2, "Cain", 1, -1, -1);
  var abella = new Sheep(3, "Abella", 0, 0, 1);

  console.log("Running unit tests on Flock class...");

  console.assert(testFlock.sheep.length === 2, "Test #1 failed.");
  console.assert(testFlock.brand() === "Branded!", "Test #2 failed.");

  testFlock.brand();

  console.assert(testFlock.brand() === "No unbranded sheep left!",
                 "Test #3 failed.");

  testFlock = new Flock();
  while(testFlock.sheep.length === 2)
  {
    lastMessage = testFlock.breed();
  }

  console.assert(lastMessage === "Breeding successful!", "Test #4 failed.");

  testFlock = new Flock();

  testFlock.sheep[1].branded = true;

  console.assert(testFlock.breed() === "No unbranded ewes!",
                 "Test #5 failed.");
  testFlock.sheep.push(abella);

  console.assert(testFlock.breed() === "Insufficient gene pool!",
                 "Test #6 failed.");

  testFlock.sheep.push(cain);

  while(testFlock.sheep.length === 3)
  {
    lastMessage = testFlock.breed();
  }

  console.assert(lastMessage === "Breeding successful!", "Test #7 failed.");

  testFlock.add("Seth", 1);

  console.assert(testFlock.sheep.length === 5, "Test #8 failed.");

  console.log("End of tests!");
}
