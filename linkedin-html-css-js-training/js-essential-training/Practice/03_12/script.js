/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

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
console.log("The lidOpen status:", everydayPack.lidOpen);

import handbag from "./handbag.js";

const crosschainbag = new handbag(
    "Cross Chain Bag",
    50,
    10,
    "black",
    1,
    16,
    16,
    false,
    "Small Purse",
    "black",
    5,
);

console.log("The cross chain bag object:", crosschainbag);
console.log("The pocketNum value:", crosschainbag.pocketNum);
console.log("The lidOpen status:", crosschainbag.lidOpen);


//This is more preferable than the object constructor. This is more modern and it puts the class in a separate pafge so it allows for more flexibility