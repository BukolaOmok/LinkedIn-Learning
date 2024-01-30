/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);  // This is the dot notation but it is limited so we would use the bracket notation
console.log("Strap Length L:", backpack.strapLength.left);


console.log("The pocketNum value:", backpack["pocketNum"]); //This is the bracket notation. It is mnore preferred because it allows you to do the below query. You cannot do it with plain dot notation. This is why it is more preffered. You can use it to parse data that does not parse the rules such as those with hyphen that breaks convention)

var query = "pocketNum";
console.log("The pocketNum value:", backpack[query]);

