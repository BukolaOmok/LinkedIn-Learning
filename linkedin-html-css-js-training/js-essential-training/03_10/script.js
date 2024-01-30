/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "blue",
  5,
  25,
  25,
  true
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("The lidOpen status:", everydayPack.lidOpen)

//This is more preferable than the object constructor. This is more modern and it puts the class in a separate pafge so it allows for more flexibility