// housekeeper Construction
// Define the HouseKeeper class
class HouseKeeper {
    constructor(name: string, yearsOfExperience: number, cleaningRepertoire: string[]) {
        this.name = name;
        this.yearsOfExperience = yearsOfExperience;
        this.cleaningRepertoire = cleaningRepertoire;
    }

    name: string;
    yearsOfExperience: number;
    cleaningRepertoire: string[];
}

// Test the HouseKeeper class
const houseKeeper = new HouseKeeper("John Doe", 5, ["cleaning", "gardening"]);
console.log(houseKeeper.name); // Output: John Doe
console.log(houseKeeper.yearsOfExperience); // Output: 5
console.log(houseKeeper.cleaningRepertoire); // Output: ["cleaning", "gardening"]

// New test for another housekeeper
const houseKeeper2 = new HouseKeeper("Jane Doe", 3, ["cleaning", "gardening"]);
console.log(houseKeeper2.name); // Output: Jane Doe
console.log(houseKeeper2.yearsOfExperience); // Output: 3
console.log(houseKeeper2.cleaningRepertoire); // Output: ["cleaning", "gardening"]
