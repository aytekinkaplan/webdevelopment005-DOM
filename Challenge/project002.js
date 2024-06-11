// housekeeper Construction
// Define the HouseKeeper class
var HouseKeeper = /** @class */ (function () {
    function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
        this.name = name;
        this.yearsOfExperience = yearsOfExperience;
        this.cleaningRepertoire = cleaningRepertoire;
    }
    return HouseKeeper;
}());
// Test the HouseKeeper class
var houseKeeper = new HouseKeeper("John Doe", 5, ["cleaning", "gardening"]);
console.log(houseKeeper.name); // Output: John Doe
console.log(houseKeeper.yearsOfExperience); // Output: 5
console.log(houseKeeper.cleaningRepertoire); // Output: ["cleaning", "gardening"]
// New test for another housekeeper
var houseKeeper2 = new HouseKeeper("Jane Doe", 3, ["cleaning", "gardening"]);
console.log(houseKeeper2.name); // Output: Jane Doe
console.log(houseKeeper2.yearsOfExperience); // Output: 3
console.log(houseKeeper2.cleaningRepertoire); // Output: ["cleaning", "gardening"]
