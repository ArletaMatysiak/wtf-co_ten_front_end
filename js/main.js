const welcome = (name, week) => {
    console.log (`Cześć ${name}, to Twój ${week} tydzień z WTF.`)
}

const myName = 'Arli';
const myWeek = 6;

welcome (myName, myWeek); 



const button = document.querySelector('.article___button--js');
console.log(button)


button.addEventListener('click', (e) => {
const header = document.querySelector('.article__title--js');
header.innerHTML = 'klik, klik';
alert ('hello');
});



function oknoAlert () {
    alert('w budowie');
}


document.querySelector('.navigation__link--js').addEventListener('click', function () {
    oknoAlert();
});




    



