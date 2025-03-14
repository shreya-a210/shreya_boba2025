function sayHello() {
    let name = prompt("what's your name?");
    document.getElementById("hello").innerHTML = 
    "hi " + name + "! welcome to my website!";
}