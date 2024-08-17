let title = document.querySelector('#title');
title.innerHTML='Bienvenu sur ma page';

title.addEventListener('mouseover', function(e){
    title.innerHTML='je suis votre formulaire'
})
title.addEventListener('mouseout', function(e){
    title.innerHTML='Bienvenue sur ma page'
})


let butn = document.querySelector('button');
butn.addEventListener('mouseover', function(e){
        butn.textContent="changer le theme!?"
        butn.style.color='brown';
})
 butn = document.querySelector('button');
butn.addEventListener('mouseout', function(e){
        butn.textContent='theme';
})


// premiere theme 

let changerfont = document.querySelector('#title')
let changerfont_3 = document.querySelector('#submit')
let label = document.getElementsByTagName('label')
let soumission = document.querySelector('.submite');


// on change les themes ici
butn.addEventListener('click', function(){
    for(i = 0 ; i<label.length; i++){
        parcours = label[i]
        parcours.style.color = 'orange';
    }
    changerfont.style.color="green";
    document.querySelector('.submite').className = "submite frequence"
    
})
butn.addEventListener('dblclick', function(){
    for(i = 0 ; i<label.length; i++){
        parcours = label[i]
        parcours.style.color = 'brown';
    }
    changerfont.style.color="slategray";
    document.querySelector('.submite').className = "submite"
})

div_email = document.querySelector('.div-email')
div_password = document.querySelector('.div-password')
echo = document.querySelector('#echo')

addEventListener('submit', function(e){
    if (div_email.value == "luwangualpha@gmail.com" && div_password.value == "alpha"){
        echo.textContent="bon mot de pass"
    }
    else{
        echo.textContent="votre email ou mot d pass est mauvais"

        e.stopPropagation;
        e.defaultPrevented;
        e.target
    }


     
})








