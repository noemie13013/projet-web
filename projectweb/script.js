let fr =document.getElementById ("btnfr");
let en =document.getElementById ("btnen");
let pt =document.getElementById ("btnpt");

function sayHelloInFrench(){
    console.log("Bonjour");
}


function sayHelloInEnglish(){
    console.log("Hello");
}

function sayHelloInPortuguese(){
    console.log("Olà");
}





btnfr.addEventListener("click",function(){
    sayHelloInFrench(); 
});

btnen.addEventListener("click",function(){
    sayHelloInEnglish(); 
});

btnpt.addEventListener("click",function(){
    sayHelloInPortuguese(); 
});