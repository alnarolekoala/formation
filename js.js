/*var a = window.prompt("écrire un nombre");


if(a%2 == 0)
{
    document.write("nombre pair")
}
else
{
    document.write("nompre impair");
} 

var c
var b = window.prompt("quelle est votre année de naissance?");
parseInt(b);
c = 2020 - b;
window.alert('vous avez :' +c+'ans');
if(c >=18){
    window.alert('vous êtes majeur')
}
else {
    window.alert('vous êtes mineur')
}*/
var r
var n = window.prompt('Saisir un nombre');
var s = window.prompt('Saisir un signe parmis (+, -, *, /) ');
var c = window.prompt('Saisir un deuxieme nombre') ;
parseInt(n,c);


if(s == "+") {
    window.alert(n + c);
}

else if(s == '-') {
    window.alert(n - c);
}

else if(s == '*') {
    window.alert(n * c);
}

else if(s == '/'&& c != 0) {
    window.alert(n / c);
}
else {
    window.alert('error');
}




