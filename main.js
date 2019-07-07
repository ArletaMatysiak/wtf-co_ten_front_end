console.log('siema')
const name = 'arleta';
const age= 27;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat.`);

const article = document.querySelector('.article--js');

console.log(article.innerHTML);

article.innerHTML = '<strong> "In ac suscipit tellus. Fusce molestie fringilla tellus ac pharetra. Maecenas ultrices id mauris a hendrerit."</strong>';

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

console.log(paragraphs[2]);