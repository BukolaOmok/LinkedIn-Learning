/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class handbag {
    constructor(
        name,
        volume,
        weight,
        color,
        pocketNum,
        strapLengthL,
        strapLengthR,
        lidOpen,
        purseName,
        purseColor,
        purseCompartments,
    ) {
      
        //Define Properties
        this.name = name;
        this.volume = volume;
        this.weight = weight;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
        this.purse = {
            name: purseName,
            color: purseColor,
            compartments: purseCompartments,
        };
    };

    // Add methods like normal functions:
    toggleLid(lidStatus) { // Method to toggle lid
        this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) { //Method to add new straplength 
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    };
};

export default handbag;
