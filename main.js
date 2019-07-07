console.log('siema')
const name = 'arleta';
const age= 90;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat.`);

const article = document.querySelector('.article--js');

console.log(article.innerHTML);

article.innerHTML = '<strong> "In ac suscipit tellus. Fusce molestie fringilla tellus ac pharetra. Maecenas ultrices id mauris a hendrerit."</strong>';

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

console.log(paragraphs[2]);

if ('java script'!= 'java') {
    console.log ('07.07.19')
}

if (age < 20) {
    console.log ('Masz mniej niż 20 lat');
} else if ((age >= 20) && (age <=30)) {
    console.log ('Masz pomiędzy 20 a 30 lat');
} else {
    console.log ('Masz więcej niż 30 lat');
}

switch (age) {
    case 20:
        console.log (`masz równo 20 lat`);
    break;
     case 30:
        console.log (`masz równo 30 lat`);
    break;
    default:
        console.log (`masz ${age} lat`);
    break;
}

const amIOld = ( age > 70) ? 'yes' : 'no';
console.log(amIOld);