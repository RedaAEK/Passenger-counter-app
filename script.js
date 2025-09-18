let button=document.getElementsByTagName('button')[0];
let btn=document.getElementsByTagName('button')[1];
let reset=document.getElementsByTagName('button')[2];
let increment=document.getElementsByTagName('h2')[0];
let count=0
// button.addEventListener ("click" , function() {
// console.log("click");
// })

button.addEventListener ("click",subwayIncrement );
function subwayIncrement () {
    count=count+1;
    increment.innerText=count;
    
}
btn.addEventListener ("click", subwayDecrement);
function subwayDecrement (){
    if (count>0) {
    count=count-1;
     increment.innerText=count;
    }
    else {
        increment.innerText=0;
    }
}
reset.addEventListener ("click",subwayReset);
function subwayReset () {
    count=0;
    increment.innerText=count;

}