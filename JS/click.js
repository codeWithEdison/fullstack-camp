function clicked(){
    let demoelt = document.getElementById('demo')
    demoelt.innerHTML= "clicked"

}
function sayName(){
    let name = document.getElementById('name').value;
    alert("hello " + name);
}
function message(age){ 
    console.log("you have " + age + " years old");
}
message(40);

function hide(){

    // let  btn = document.getElementById('btn')
    let  div = document.getElementById('mydiv')
    div.style.backgroundColor = 'blue';

}