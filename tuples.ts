// object
const soda = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// tuple

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
pepsi[0] = 40; // TS throws error because property at index 0 must be a string

// Why tuples and when to use
