// string 

let text = "John Doe"



// Довжина рядка
let length = text.length;

 // Використання зворотнього слешу: \"  "	Подвійні лапки
let text1 = "Ми українці - нащадки \"Запорозьких козаків\" та славних воїнів Київської Русі.";

// Послідовність \'  вставляє одинарну лапку в рядок:
let text2= 'It\'s alright.';

// \n	Новий рядок

// рядки також можна визначити як об’єкти за допомогою ключового слова new:
let y = new String("John");





//методи строк



//1 - slice()
//slice() витягує частину рядка та повертає витягнуту частину в новому рядку
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);

//Якщо параметр від’ємний, позиція відраховується з кінця рядка.
let str1 = "Apple, Banana, Kiwi";
let part1 = str.slice(-12, -6);

//Якщо ви опустите другий параметр, метод виділить решту рядка:
let part2 = str.slice(7);


//2 - substring()
// Різниця полягає в тому, що початкові та кінцеві значення, менші за 0, розглядаються як 0 в substring()
let str3 = "Apple, Banana, Kiwi";
let part3 = str.substring(7, 13);


//substr()
// другий параметр визначає довжину витягнутої частини
let str4 = "Apple, Banana, Kiwi";
let part4 = str.substr(7, 6);

//Якщо перший параметр від’ємний, позиція відраховується з кінця рядка.
let str5 = "Apple, Banana, Kiwi";
let part5 = str.substr(-4);


//replace()
// Метод replace() замінює вказане значення іншим значенням у рядку
let text6 = "Please visit Microsoft!";
let newText6 = text.replace("Microsoft", "W3Schools");

// Щоб замінити нечутливий до регістру, 
// використовуйте регулярний вираз із прапорцем /i

let text7 = "Please visit Microsoft!";
let newText7 = text.replace(/MICROSOFT/i, "W3Schools");


//toUpperCase()
//toLowerCase()
let text8 = "Hello World!";
let text9 = text1.toUpperCase();

let text10 = "Hello World!";       
let text11 = text1.toLowerCase();  // text11 це text10, перетворений на нижній регістр


//concat()
let text12 = "Hello";
let text13 = "World";
let text14 = text1.concat(" ", text2);


//trim()
// видаляє пробіли з обох сторін рядка
let text15 = "      Hello World!      ";
let text16 = text1.trim();


//padStart() і padEnd() 
// для підтримки відступів на початку та в кінець рядка.
let text17 = "5";
let padded17 = text.padStart(4,"x");

let text18 = "5";
let padded18 = text.padEnd(4,"0");


//charAt()
let text19 = "HELLO WORLD";
let char19 = text.charAt(0);


//charCodeAt()
let text20 = "HELLO WORLD";
let char20 = text.charCodeAt(0);


//властивість [ ] 
let text21 = "HELLO WORLD";
let char21 = text[0];



//JavaScript Методи рядкового пошуку

//String indexOf()
//String lastIndexOf()
//String startsWith()
//String endsWith()


//indexOf()
//Метод indexOf() повертає індекс (позицію) first (першого) входження зазначеного тексту в рядок

let str22 = "Знайдіть, будь ласка місце, де розташовано слово 'locate'! ";
str.indexOf("locate");

//lastIndexOf()
// Метод lastIndexOf() повертає індекс останнього входження зазначеного тексту в рядок:

let str23 = "Будь ласка, знайдіть місце, де зустрічається 'locate'!";
str23.lastIndexOf("locate");

//indexOf(), і lastIndexOf() повертають -1, якщо текст не знайдено

//startsWith()
let text27 = "Hello world, welcome to the universe.";
text27.startsWith("Hello");

//endsWith()
let text28 = "John Doe";
text28.endsWith("Doe");




//search()
let str24 = "Будь ласка, знайдіть місце, де зустрічається 'locate'!";
str24.search("locate")

// Метод search() не може приймати другий аргумент початкової позиції.
//Метод indexOf() не може приймати потужні пошукові значення (регулярні вирази).

// string.match(regexp)
let text25 = "The rain in SPAIN stays mainly in the plain";
text25.match(/ain/gi);

// // includes()
//Метод includes() повертає true, якщо рядок містить указане значення.

let text26 = "Hello world, welcome to the universe.";
text26.includes("world", 12);



//За допомогою літералів шаблону ви можете використовувати як одинарні, так і подвійні лапки всередині рядка
let text29 = `He's often called "Johny"`;

//Інтерполяція
//${...}
let firstName = "John";
let lastName = "Doe";

let text30 = `Welcome ${firstName}, ${lastName}!`;

//
//Метод	Опис
//map()	Створює новий масив, застосовуючи функцію до кожного елемента
//filter()	Створює новий масив із елементами, що не мають умов
//slice()	Повертає частину масиву у вигляді нового масиву
//concat()	Об'єднуючи масиви, повертаючи новий
//flat()	Розгладжує вкладені масиви
//toSorted()	Повертає новий відсортований масив (ES2023)
//toReversed()	Повертає новий масив у зворотному порядку (ES2023)
//toSpliced()	Як splice, але не змінює масив — повертає новий (ES2023)
//reduce()	Повертає будь-яке значення, часто використовується для створення нового масиву або об'єкта
//flatMap()	По такому map()і flat()в один крок

//
//Методи, які змінюють масив (мутують) :
//(для порівняння, їх краще уникати, якщо хочеш працювати з "чистими функціями")

//push()
//pop()
//shift()
//unshift()
//splice()
//sort() (старий)
//reverse()
//fill()
//copyWithin()