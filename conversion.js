var firstName = 'Adiba Rahman';
var lastName = 'Eisha';
var fullName = firstName + lastName;
console.log(fullName);

// To gave a space between the string we need to use an empty string and add + + after and before the var values and put a space inside the empty string

var firstName1 = 'Adiba Rahman';
var lastName1 = 'Eisha';
var fullName1 = firstName1 + ' ' + lastName1; //added empty string between
console.log(fullName1);

//another styles:
var firstName2 = 'Adiba Rahman '; //space here
var lastName2 = 'Eisha';
var fullName2 = firstName2 + lastName2; //added empty string between
console.log(fullName2);

//another more styles:
var firstName3 = 'Jahangir Alom';
var lastName3 = ' Minto'; //space here
var fullName3 = firstName3 + lastName3; //added empty string between
console.log(fullName3);

var potatoPrice = '20';
var ricePrice = '50';
var potatoRicePrice = potatoPrice + ricePrice;
console.log(potatoRicePrice);

var potatoPrice1 = '20';
var ricePrice1 = 50; //difference here
var potatoRicePrice1 = potatoPrice1 + ricePrice1;
console.log(potatoRicePrice1);

var potatoPrice2 = 20; //difference here
var ricePrice2 = '50'; 
var potatoRicePrice2 = potatoPrice2 + ricePrice2;
console.log(potatoRicePrice2);

var potatoPrice3 = 20; //both are integer
var ricePrice3 = 50; 
var potatoRicePrice3 = potatoPrice3 + ricePrice3;
console.log(potatoRicePrice3);

//integer : Full Number in Bengali
var sunglass = 2;

//float 
var oil = 99.99;


var onionPrice = 40;
var eggPrice = 10;
var onionEggPrice = onionPrice + eggPrice;
console.log(onionEggPrice);

//parse something into number : parseInt()
var onionPrice = '40';
var eggPrice = '10';
var onionEggPrice = parseInt(onionPrice + eggPrice);
console.log(onionEggPrice);

//parse something into number : parseInt()
var onionPrice = '40';
var eggPrice = '10';
var onionEggPrice = parseInt(onionPrice);
console.log(onionEggPrice);

//parse something into number : parseInt()
var onionPrice = '40';
var eggPrice = '10';
var onionEggPrice = parseInt(onionPrice);
console.log(onionPrice);

//parse something into number : parseInt() and if the value is float, then the float pointing number that means decimal number will be automatically deleted.
var onionPrice = '42.50'; //difference here
var eggPrice = '10';
var onionEggPrice = parseInt(onionPrice);
console.log(onionEggPrice);


//parse into decimal: parseFloat()
var onionPrice = '42.50';
var eggPrice = '41.33';
var onionPriceNumber = parseInt(onionPrice);
var eggPriceNumber = parseFloat(eggPrice);

// console.log(onionPriceNumber);
console.log(eggPriceNumber);



//parse into decimal: parseFloat()
var onionPrice = '42.50';
var eggPrice = '41.33';
var onionPriceNumber = parseInt(onionPrice);
var eggPriceNumber = parseInt(eggPrice);

// console.log(onionPriceNumber);
console.log(eggPriceNumber);



//parse into decimal: parseFloat()
var onionPrice = '42.50';
var eggPrice = '41.33';
var onionPriceNumber = parseInt(onionPrice);
var eggPriceNumber = parseInt(eggPrice);

// console.log(onionPriceNumber);
console.log(eggPriceNumber + onionPriceNumber);


//parse into decimal: parseFloat()
var onionPrice = '42.50';
var eggPrice = '41.33';
var onionPriceNumber = parseInt(onionPrice);
var eggPriceNumber = parseFloat(eggPrice);

// console.log(onionPriceNumber);
console.log(eggPriceNumber + onionPriceNumber);


//parse into decimal: parseFloat()
var onionPrice = '42.50';
var eggPrice = '41.33';
var onionPriceNumber = parseFloat(onionPrice);
var eggPriceNumber = parseFloat(eggPrice);

// console.log(onionPriceNumber);
console.log(eggPriceNumber + onionPriceNumber);
