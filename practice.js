// alert("Karachi");
// var myName = "Abdul Mateen";
// alert(myName);
// var quantity = 20;
// var total = quantity + 5;
// alert(total);
// var nameQuestion = "what is your namr?";
// var name = prompt(nameQuestion);
// alert(name);
// var city = "karachi";
// if (city === "karachi") {
//   alert("zaberdast!");
// }
// var price = +prompt("Enter Item Price:");
// var discount = price * 0.2;
// var finalPrice = price - discount;
// if (finalPrice > 200) {
//   alert("20% Discount applied! Total bill is: " + " " + finalPrice);
// } else {
//   alert("sorry you are not eligible ");
// }
// var light = "what is the light color?";
// var trafficLight = prompt(light);
// if (trafficLight.toLowerCase() === "red") {
//   alert("Stop!");
// } else if (trafficLight.toLowerCase() === "yellow") {
//   alert("Ready!");
// } else {
//   alert("Go!");
// }
// var userName = "admin";
// var password = 12345;
// if (userName === "admin" && password === 12345) {
//   alert("login Successfull!");
// }
// var matricPassed = true;
// var entryTestPassed = true;
// if (matricPassed === true) {
//   if (entryTestPassed === true) {
//     alert('Admission Granted!')
//   }
// }
// var skills = ["Html", "Css", "Javascript"];
// alert(skills[2]);
// var projects = ["Amazon Clone", "Portfolio"];
// projects.push("Dashboard");
// alert(projects);
// projects.pop();
// alert(projects);
// var tools = ["Adobe XD", "Figma"];
// tools.unshift("Photoshop");
// alert(tools);
// tools.shift();
// alert(tools);
// var languages = ["HTML", "CSS", "Python", "JavaScript"];
// languages.splice(2, 1, "React");
// alert(languages);
// var allSkills = ["Html", "Css", "Javascript", "Figma", "Adobe Xd"];
// var designSkills = allSkills.slice(3, 5);
// alert(designSkills);
// for (var i = 0; i < 3; i++) {
//   alert(i);
// }

//Mega Task: Smart Portfolio Manager

// var userName = prompt("Type Your Name!");
// var matricYear = +prompt("In Wich Year You Passed Matric?");
// var chekYear = 2026 - matricYear >= 2;
// var mySkills = ["HTML", "CSS", "Python", "UI/UX"];
// mySkills.splice(2, 1, "Javascript");
// var advancedSkills = mySkills.slice(2, 4);
// if (chekYear === true && mySkills[2] === "Javascript") {
//   var designTools = prompt("Did You Expert In Adobe Xd Or figma", "yes/no");
//   if (designTools === "yes") {
//     alert(
//       "Congratulations " +
//         userName +
//         "! You are eligible for the Technical Track.",
//     );
//   }
// } else {
//   alert("You are not eligible!");
// }
// for (i = 0; i < advancedSkills.length; i++) {
//   alert(advancedSkills[i]);
// }

// var myTarget = "United Kingdom";
// alert(myTarget.toUpperCase());
// alert(myTarget.toLowerCase());

// var userSkill = "react";
// var firstLetter = userSkill.slice(0, 1).toUpperCase();
// var remainingLetters = userSkill.slice(1);
// var titleCase = firstLetter + remainingLetters;
// alert(titleCase);
// var phrase = "UI/UX design is amazing!";
// var position = phrase.indexOf("design");
// alert(position);
// var myStack = "HTML, CSS, JS, React, CSS";
// var lastPos = myStack.lastIndexOf("CSS");
// var zeroIndex = myStack.charAt(0);
// alert(lastPos);
// alert(zeroIndex);
// var learning = "I love Python and Python is easy.";
// var fixVar = learning.replace(/Python/g, "Javascript");
// alert(fixVar);
// var myScoreRnd = Math.round(4.3);
// var myScoreCeil = Math.ceil(4.3);
// var myScoreFloor = Math.floor(4.3);
// alert(myScoreFloor);
// var randomNum = Math.floor(Math.random() * 10) + 1;
// alert(randomNum);
// var accountNo = 12345;
// alert(accountNo);
// var accountString = accountNo.toString();
// alert(accountString.length);
// var price1 = "55.5";
// var price2 = "44.5";
// strToNum1 = parseFloat(price1);
// strToNum2 = parseFloat(price2);
// totalAmount = strToNum1 + strToNum2;
// finalString = totalAmount.toString();

// alert(finalString);
// var myPercentage = 85.67892;
// var newPercentage = myPercentage.toFixed(2);
// alert(newPercentage);
// var rightNow = new Date();
// alert(rightNow);
// var d = new Date();
// var year = d.getFullYear();
// var month = d.getMonth() + 1;
// var currentDate = d.getDate();
// alert(month + "/" + currentDate + "/ " + year);
// var yearFirstDay = new Date("July 19 2026");
// var dayOfDate = yearFirstDay.getDay();
// alert(dayOfDate);
// var d = new Date();
// d.setFullYear(2030);
// d.setDate(15);
// alert(d);
// function tellTime() {
//   var d = new Date();
//   alert(d);
// }
// tellTime();
// function greetUser(userName) {
//   alert("Hello!" + " " + userName);
// }
// greetUser("Abdul Mateen");
// greetUser("Muhammad Aleem");
// greetUser("Muaavia");
// function squareNumber(num) {
//   var sNum = num * num;
//   return sNum;
// }
// var result = squareNumber(5);
// alert(result);
// function myCar() {
//   var carName = "Civic";
//   return carName;
// }
// var meri = myCar();
// alert(meri);
// alert(meri);
// var position = prompt("type your Position");
// switch (position.toLowerCase()) {
//   case "ui/ux designer":
//     alert("Designing is creative!");
//     break;
//   case "web develpore":
//     alert("Coading Is Fun");
//     break;
//   default:
//     alert("Keep Learning");
// }
// var count = 1;
// while (count <= 5) {
//   alert(count);
//   count++;
// }
// var x = 20;
// do {
//   alert(x);
//   x++;
// } while (x < 5);
// function showWarning() {
//   alert("This link is restricted!");
// }
// function addToCart() {
//   alert("Item successfully added!");
// }
// function showEffect() {
//   alert("Mouse is over the heading");
// }
// function showTip() {
//   console.log("Caps Lock ka khayal rakhein!");
// }
// function showCity() {
//   var uCity = document.getElementById("userCity").value;
//   alert(uCity);
// }
// function zipCode() {
//   var zipcode = (document.getElementById("zipCode").value = 75500);
// }
// function online(){
//   document.getElementById("status").innerHTML="online"
// }
// var newButton = document.getElementById("myBtn");
// var para = document.getElementById("status");
// newButton.addEventListener("click", function () {
//   para.innerText = "completed";
//   para.style.color = "green";
//   para.style.fontWeight = "bold";
// });
// var lionSon = document.getElementById("son");
// var imageText = document.getElementById("littleLion");
// lionSon.addEventListener("click", function () {
//   if (
//     this.src ===
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf15vBGbNaQqT6vERZmxm5eo4Nfnd5rYGb9A&s"
//   ) {
//     this.src =
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9tOJmjzk4tND69AzRZN3_wCmTtO74XhgcA&s";
//     this.style.width = "300px";
//     imageText.innerText = "lion";
//   } else {
//     this.src =
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf15vBGbNaQqT6vERZmxm5eo4Nfnd5rYGb9A&s";
//     this.style.width = "200px";
//     imageText.innerText = "lttle lion";
//   }
// });
//old style
// function changeImage(thumbnail) {
//   document.getElementById("big_img").src = thumbnail.src;
// }
//Arrow style
// const changeImage = (thumbnail) =>{
//     document.getElementById("big_img").src = thumbnail.src;
// }

//advance
// const changeImage = (thumbnail) => document.getElementById("big_img").src = thumbnail.src;

//old_style
// const changeStyle = () => {
//   const Element = document.getElementById("para");
//   if (Element.className === "make-beautiful") {
//     Element.className = "";
//   } else {
//     Element.className = "make-beautiful";
//   }
// };

//Advance
// const changeStyle = () => {
//   document.getElementById("para").classList.toggle("make-beautiful");
// };
// const product = {
//   Title: "Laptop",
//   Price: 30000,
//   Instock: true,

//   buy: () => {
//     console.log("Product added to cart!");
//   },
// };
// product.Price = 45000;
// product.brand = "HP";
// console.log(product.Title);
// console.log(product.Price);
// console.log(product.Instock);
// console.log(product.brand);
// product.buy();
// function Student(name, age, city) {
//   this.name = name;
//   this.age = age;
//   this.city = city;
// }

// const student_1 = new Student("Abdul mateen", 20, "Karachi");
// const student_2 = new Student("Muhammad Aleem", 22, "Karachi");
// const student_3 = new Student("Muaavia", 23, "Karachi");
// const student_4 = new Student("Hamza", 22, "Karachi");
// const student_5 = new Student("Hanzala", 18, "Karachi");
// const student_6 = new Student("Asad", 22, "Rawlpindi");
// const student_7 = new Student("Ahsan", 24, "Saudi");

// const Allstudents = [
//   student_1,
//   student_2,
//   student_3,
//   student_4,
//   student_5,
//   student_6,
//   student_7,
// ];
// Student.prototype.greet = function () {
//   console.log(`Hello, mera naam ${this.name} hai!`);
// };
// student_1.greet();
// Allstudents.forEach((student) => {
//   //   console.log(`${student.name} | ${student.age}  | ${student.city}`);
// });
// function Car(brand, model, instock) {
//   this.brand = brand;
//   this.model = model;
//   this.instock = instock;
// }
// const car_1 = new Car("Ford", "2026", true);
// const car_2 = new Car("Mercedes", "2026", false);
// const car_3 = new Car("BMW", "2026", true);
// const car_4 = new Car("Audi", "2026", false);

// const AllCar = [car_1, car_2, car_3, car_4];

//AllCar.forEach((car) => {
// car.discount = "10% Off";
// if (car.brand === "BMW") {
//   console.log(`${car.brand} | ${car.model} | ${car.discount}`);
// }
// if (car.instock) {
//   console.log(`Avaliable ${car.brand} | ${car.model} | ${car.discount}`);
// } else {
//   console.log(`SOLD OUT ${car.brand} | ${car.model} | ${car.discount}`);
// }
//});
// console.log(student_1.name);
// console.log(student_1.age);
// console.log(student_1.city);
// console.log(student_2.name);
// console.log(student_2.age);
// console.log(student_2.city);
// console.log(student_3.name);
// console.log(student_3.age);
// console.log(student_3.city);
// console.log(student_4.name);
// console.log(student_4.age);
// console.log(student_4.city);
// console.log(student_5.name);
// console.log(student_5.age);
// console.log(student_5.city);
// console.log(student_6.name);
// console.log(student_6.age);
// console.log(student_6.city);
// console.log(student_7.name);
// console.log(student_7.age);
// console.log(student_7.city);
// function Car(brand, model, price, features, instock) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.features = features;
//   this.instock = instock;
// }
// const car_1 = new Car("Ford", "2026", 50000, ["Sunroof", "Airbag"], true);
// const car_2 = new Car(
//   "Mercedes",
//   "2026",
//   60000,
//   ["Sunroof", "Autopilot"],
//   false,
// );
// const car_3 = new Car("BMW", "2026", 70000, ["Airbag", "Autopilot"], true);
// const car_4 = new Car(
//   "Audi",
//   "2026",
//   80000,
//   ["Autopilot", "Rear Camera"],
//   false,
// );

// const AllCar = [car_1, car_2, car_3, car_4];

// AllCar.forEach((car) => {
//   const featuresList = car.features.join("-");
//   if (car.price >= 80000) {
//     console.log(
//       ` Luxury ${car.brand} | ${car.model} | price : ${car.price} | features : ${featuresList}`,
//     );
//   } else if (car.price >= 60000) {
//     console.log(
//       `Standard ${car.brand} | ${car.model} | price : ${car.price} | features : ${featuresList}`,
//     );
//   } else {
//     console.log(
//       ` Budget ${car.brand} | ${car.model} | price : ${car.price} | features : ${featuresList}`,
//     );
//   }
// });
// if (car.instock) {
//   console.log(
//     ` Avaliable ${car.brand} | ${car.model} | price : ${car.price} | features : ${featuresList}`,
//   );
// } else {
//   console.log(
//     `SOLD OUT ${car.brand} | ${car.model} | price : ${car.price} | features : ${featuresList}`,
//   );
// }
//});
// function Student(name, grade) {
//   this.name = name;
//   this.grade = grade;

//   Student.prototype.printresult = function () {
//     console.log(`${this.name} grade is ${this.grade}`);
//   };
// }
// function Student(name) {
//   this.name = name;
// }
// Student.prototype.sayHello = function () {
//     console.log("Hi " + this.name);
//   };
// const st_1 = new Student("abdul mateen");
// st_1.sayHello();

// const st_1 = new Student("Abdul Mateen", 97);
// const st_2 = new Student("Aneeq", 80);
// const st_3 = new Student("Hamza", 58);
// const st_4 = new Student("Aleem", 40);

// st_1.printresult();
// st_2.printresult();
// st_3.printresult();
// st_4.printresult();

// const allStudents = [st_1, st_2, st_3, st_4];

// allStudents.forEach((student) => {
//   if (student.grade >= 80) {
//     console.log(`A+ GRADE ${student.name} | ${student.grade}`);
//   } else if (student.grade >= 50) {
//     console.log(`B GRADE ${student.name} | ${student.grade}`);
//   } else {
//     console.log(`FAIL ${student.name} | ${student.grade}`);
//   }
// });
function Employee(name, salary) {
  this.name = name;
  this.salary =salary;
}
Employee.prototype.showSalary = function () {
  console.log(`${this.name} ki salary ${this.salary} PKR he!`);
};
const employee_1 = new Employee("Abdul Mateen", "80000000000");
const employee_2 = new Employee("Aneeq", "90000000");

employee_1.showSalary();
employee_2.showSalary();
