// An TS interface describing object with a summary method that returns a string
interface Reportable {
    summary(): string;
}

// car object that matches Reportable interface
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    },
};

// Because we made our interface generic, we can have a drink object
// that also has a summary method that returns a string
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `This drink has ${this.sugar} grams of sugar.`;
    }
};

// A function that uses our Reportable interface
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

// Calling the function and because both objects satisfy the 
// Reportable interface, no errors are shown
printSummary (oldCivic);
printSummary(drink);
