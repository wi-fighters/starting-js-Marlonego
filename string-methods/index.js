// Characters & Properties
const stringLenght = "wee have so much fun";
console.log(stringLenght.length);
const string2 = stringLenght[2];
const string6 = stringLenght[6];
console.log(`${string2} second letter ${string6} sixed letter`);

//JS 
const coding = "JavaScript";
console.log(coding.length);
console.log(coding[0], coding[4]);

//I can...
const walk = "I can walk in the park all day!";
console.log(walk.substring(18,23));

//aSc
console.log(coding.substring(3, 6));

//Upper Case
const hello = "Hello World"; 
const bigHello = hello.toUpperCase();
console.log(`${bigHello}`);

//Lower Case
const earthling = "Hallo Earthling";
const smallEarth = earthling.toLowerCase();
console.log(smallEarth);

//Does it contain...?
const shoes = "nice shoes";
const shoesI = shoes.includes("i");
const shoesN = shoes.includes("n");
console.log(`"does nice shoes contain the letter n?"${shoesN} "and or the letter i?"${shoesI}`);

//Front & Back
const letter = shoes[0];
console.log(`${letter}${coding}${letter}`); 

//last Three Chars
const lastThree = shoes.substring(7,10);
console.log(`${lastThree}${coding}${lastThree}`);

//Java
const  javaHappy = coding+"lalala";
const bigJavaHappy = javaHappy.toUpperCase();
const javaQuestion = bigJavaHappy.includes("Java");
console.log(`${bigJavaHappy} does it contain Java? ${javaQuestion}`);

//First and Last
const firstLast = coding[0];
const lastFirst = coding[coding.length-1];
const letsSee = coding.substring(1,9);
console.log(`${lastFirst}${letsSee}${firstLast}`);

//Concatenation

const firstName = "Marlon";
const city = "Berlin";
const hobby = " Capoeira"
console.log(`My name is ${firstName}. I live in ${city} and my hobby is ${hobby}`);


//Capitalize
const quick = "the quick brown fox";
console.log(quick(0).totoUpperCase() + quick(1));

