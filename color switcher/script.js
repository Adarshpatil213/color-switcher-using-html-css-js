const buttons = document.querySelectorAll('.button');
// console.log(button);
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target)
        if(e.target.id ==='grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})

const headOne = document.querySelector('h1');
headOne.style.color = 'skyblue';

const headtwo = document.querySelector('h2');
headtwo.style.color = 'skyblue';
