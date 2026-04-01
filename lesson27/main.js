function showMessage() {
    alert("This message is inside the function");
}

showMessage(); 

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(5, 10));

function toCelsius(f) {
    return (5 / 9) * (f - 32);
}

console.log("54 fehrenheit is equal to " + toCelsius(54) + " celsius");

function dsFunction() {
    var localVar = " Digital School";
    alert(localVar);
}
dsFunction();

function toSecond(minutes) {
    return minutes * 60;
}
console.log("10 minutes is equal to " + toSecond(10) + " seconds");

//OBJECTS

var car = {name: "BMW", 
            color: "black",
            year: 2020,
            kilometers: 5000,
            startEngine : function() {
                alert("Vroommm")
            },
            get getKilometers() {
                return this.kilometers;
            },
            set setKilometers(km) {
                this.kilometers = km;
            }
        }
alert(car.name);
car.startEngine();

console.log(car.getKilometers);
car.setKilometers = 100;
console.log(car.getKilometers);

var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "Intel core i7";
computer.RAM = "16GB";
computer.GPU = "GeForce GT730 2GB Dual DP HP";

computer.type = function(){
    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU;
};

alert(computer.GPU);
alert(computer.type());
delete computer.GPU;
alert(computer.GPU);

//Konstruktori

function Computer(name, CPU, RAM, GPU){
    this.name=name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU;
}

var computer1 = new Computer("MacBook Pro", "M1 8core", "8GB", "5600M GPU");
var computer2 = new Computer("Acer", "Intel core i3", "4GB", "Integrated");