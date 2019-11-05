const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number {
    return a -b;
};


function divide(a: number, b:number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
    // can return null or undefined
};

const throwError = (message: string): never => {
    // never returns anything
    throw new Error(message);
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};

// logWeather with TypeScript and destructuring
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};

// ES2015
const logWeatherES2015 = ({ date, weather}) => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
