// function add100 (a) {
//     return a + 100;
// }
// console.log(add100(1));

// const arrow = (a) => {
//     return a + 100;
// }
// console.log(arrow(2));
// const arrow = a => a + 100;
// console.log(arrow(2));
// const user = "Ahmet"
// const classRoom = "JS Core"
// const sayHi = (userFirstName= "New User") => "Welcome ${userFirstName}"
// console.log(sayHi("Ahmet"));
// const div = (num1, num2) => num1/num2;
// console.log(div(18,3));
// const div (num1, num2) => {
//     if(num2 === 0){
//         return "Zero Division";
//     }
//     return num1/num2;
// }
// console.log(giv(18,0));
// const div = (num1, num2) => num2 === 0 ? "Zero Division Error" : num1/num2
// console.log(div(18, 0));
// const calcArea = radius => 3.14 * radius**2;
// console.log(calcArea(5));
const cat = {
    name: "Muezza",
    age: 8,
    whatName() {
        return this.name
    }
}
console.log(cat.whatName());