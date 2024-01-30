/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */


//Object
const backpack = {
  // Properties of the object
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },

  // Method to toggle lid
  lidOpen: true, // Lid status for the backpack
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  // I changed the status of the above in the developer tool on chrome to "false"

  // Method to set new strap lengths
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack)

console.log("left before:", backpack.strapLength.left)
console.log("right before:", backpack.strapLength.right);
backpack.newStrapLength(18, 19)
console.log("left after:", backpack.strapLength.left);
console.log("right after:", backpack.strapLength.right);

//I changed the length of the strap (left and right) via console. All checks good

