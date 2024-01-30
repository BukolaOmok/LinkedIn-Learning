/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Object
const handbag = {
  // Properties of the object
  name: "Cross Chain Bag",
  volume: 50,
  weight: 10,
  color: "black",
  pocketNum: 1,
  strapLength: {
    left: 30,
    right: 30,
  },
  // Method to toggle lid
  lidOpen: false, // Lid status for the handbag
  toggleLid: function (lidStatus) {   
    this.lidOpen = lidStatus;
  },
  // Method to set new strap lengths
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  // Nested purse object
  purse: {
    name: "Small Purse",
    color: "red",
    compartments: 2,
    length: 25, // Length of the purse in centimeters
    lidOpen: false, // Lid status for the purse
    toggleLid: function (lidStatus) { 
      this.lidOpen = lidStatus;
    },
  },
};


console.log("The handbag object:", handbag);
console.log("The purse object:", handbag.purse);
console.log("The purse color property:", handbag.purse.color);

console.log("The purse object:", handbag["purse"]);
console.log("The purse color property:", handbag.purse["color"]);

var query = "purse";
console.log("The purse object", handbag[query])

var query = "color"
console.log("The purse color property", handbag.purse[query])

