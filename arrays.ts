// type inference
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// two dimensional array
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

// Use annotation when initializing an empty array

// why do we care?

// Help with inference when extracting values
const car = carMakers[0]; // car: string
const myCar = carMakers.pop(); // myCar: string

// Prevent incompatible values
carMakers.push(1); // throws error because not a string

// Get help with map, forEach and reduce
carMakers.map((car: string): string => {
    // TS gives access to all string methods
    return car.toUpperCase(); 
});


// Use arrays with multiple types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2019-10-10');
importantDates.push(new Date());
importantDates.push(true); // throws error because not a date or a string

// When to use this?
// Any time we need to represent a colloection of records with some arbitrary sort order

// Tuples: Array-like structure where each element represents some property of a record







