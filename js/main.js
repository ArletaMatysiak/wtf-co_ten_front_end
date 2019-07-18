const name = 'WTF';
const week = 5;
console.log(`Ćwiczę z ${name} i to mój ${week} tydzień.`);

const article = document.querySelector('.article--js');

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

console.log(paragraphs[2]);

if ('java script' != 'java') {
    console.log('07.07.19')
}

if (week > 5) {
    console.log('ok');
} else if ((week >= 5) && (week <= 9)) {
    console.log('elegancko');
} else {
    console.log('brawo Ty');
}

switch (week) {
    case 5:
        console.log(`ja też, dobrze nam idzie!`);
        break;
    case 6 - 8:
        console.log(`git`);
        break;
    case 9:
        console.log(`gratulacje!`);
        break;
    default:
        console.log(`To Twój ${week} tydzień`);
        break;
}

const amIOld = (week > 1) ? 'yes' : 'no';
console.log(amIOld);


function calculate(x) {
    x = x + 3;
    console.log(`tradycyjnie: ${x}`);
    return x * 7
}

console.log(calculate(2));

const calculateFat = x => (x + 3) * 7;

console.log(calculateFat(2));




















