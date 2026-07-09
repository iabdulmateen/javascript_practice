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
// function Employee(name, salary) {
//   this.name = name;
//   this.salary = salary;
// }
// Employee.prototype.showSalary = function () {
//   console.log(`${this.name} ki salary ${this.salary} PKR he!`);
// };
// const employee_1 = new Employee("Abdul Mateen", 80000000000);
// const employee_2 = new Employee("Aneeq", 90000000);
// const employee_3 = new Employee("Ani", 90000000);
// const employee_4 = new Employee("Ali", 9000000);
// const employee_5 = new Employee("jan", 5000000);
// const employee_6 = new Employee("Anees", 900000);
// const employee_7 = new Employee("Anus", 90000);
// const employee_8 = new Employee("saley", 900000);
// const employee_9 = new Employee("jack", 900000);
// const employee_10 = new Employee("hamza", 90000);
// const employee_11 = new Employee("hanzala", 900000);
// const employee_12 = new Employee("hasan", 90000);

// const allEmployee = [
//   employee_1,
//   employee_2,
//   employee_3,
//   employee_4,
//   employee_5,
//   employee_6,
//   employee_7,
//   employee_8,
//   employee_9,
//   employee_10,
//   employee_11,
//   employee_12,
// ];
// allEmployee.forEach((emp) => {
//   if (emp.salary >= 80000000) {
//     emp.showSalary();
//   } else {
//     console.log(`${emp.name} is on probation. `);
//   }
// });
// const names = ["abdul mateen", "muhammad aneeq", "hamza khan"];
// const unames = names.map((name) =>{
//   return name.toUpperCase();
// })
// console.log(unames)
// const prices = [10, 20, 30];
// const formattedPrices = prices.map((price) =>{
//   return  `RS. ${price}`
// })
// console.log(formattedPrices);

// const users = [
//   { name: "Mateen", age: 20, city: "Karachi" },
//   { name: "Aneeq", age: 19, city: "Karachi" },
//   { name: "Hamza", age: 22, city: "Lahore" }
// ];
// const uname = users.map((user) => {
//  return user.name
// })
// console.log(uname)

// const users = [
//   { name: "Mateen", age: 20, city: "Karachi" },
//   { name: "Aneeq", age: 19, city: "Karachi" },
//   { name: "Hamza", age: 22, city: "Lahore" }
// ];
// const userDetails = users.map((user) =>{
//   return `${user.name} Lives In ${user.city} `
// })
// console.log(userDetails)
// const users = [
//   { name: "Mateen", age: 20, city: "Karachi" },
//   { name: "Aneeq", age: 19, city: "Karachi" }
// ];
// const userHTML = users.map((user) =>{
//   return `<h1>${user.name}</h1>`
// })
// console.log(userHTML);
// const studentRolls =new Map();
// studentRolls.set(101,"Mateen");
// studentRolls.set(102,"Aneeq");
// studentRolls.set(103,"Hamza");
// console.log(studentRolls.get(101));
// const studentRolls = new Map();
// studentRolls.set(101, "Mateen");
// studentRolls.set(102, "Aneeq");
// studentRolls.set(103, "Hamza");
// console.log(studentRolls.has(102))
// studentRolls.delete(103)
// console.log(studentRolls.has(103))
// const studentRolls = new Map();
// studentRolls.set(101, "Mateen");
// studentRolls.set(102, "Aneeq");
// studentRolls.set(103, "Hamza");
// studentRolls.forEach((value,key) =>{
//   if(key === 101){
//       console.log(`Founder: ${value} `);
      
//   }else{
//     console.log(`Student: ${value}`);
    
//   }
// })
// const student = { name: "Mateen", city: "Karachi" };

// Object.seal(student);

// student.role = "Developer"; 

// student.city = "London";

// console.log("--- TEST 1 (Object.seal) ---");
// console.log(student); 
// const rawMap = new Map();

// rawMap.set("1", "Main String Hoon");
// rawMap.set(1, "Main Number Hoon");

// console.log("\n--- TEST 2 (Map Unique Keys) ---");
// console.log("Total items in Map:", rawMap.size); 

// console.log("String key ka maal:", rawMap.get("1"));
// console.log("Number key ka maal:", rawMap.get(1));
// class Car{
//     constructor(brand,model,year){
//     this.brandName=brand;
//     this.modelName=model;
//     this.Year=year;
//     }
//     drive(){
//         console.log(`Apki ${this.brandName} ${this.modelName} ${this.Year} chl rhi he`);
//     }
// }
// const car_1 = new Car("Mercedes","C-Class", 2026)
// car_1.drive();
// class user{
//     constructor(username,email,status){
//         this.userName = username;
//         this.email= email;
//         this.status=status;
//         }
//         getProfile(){
//             console.log(`User: ${this.userName} | Email: ${this.email} `);
//         }
//         chekStatus(){
//             if(this.status === "Active"){
//               console.log(`${this.userName} Online he `);
//             }else{
//                 console.log(`${this.userName} Offline he`);
//             }
//         }

// }
// const user_1 = new  user("Mateen","Innovatecode121@gmail.com","Active");
// const user_2 = new  user("Hamza","Editor121@gmail.com","InActive");
// user_1.getProfile();
// user_1.chekStatus();
// user_2.getProfile();
// user_2.chekStatus();
// class Hero{
//     constructor(name,health){
//         this.userName = name ;
//         this.userHealth= health;

//     }
//     takeDamage(amount){
//         this.userHealth = this.userHealth - amount
//         console.log(`${this.userName} ko goli lagi! Nayi health: ${this.userHealth} hai.`);
//     }
// }
// const player_1= new Hero("mateen", 100)
// player_1.takeDamage(30)
// class Wallet{
//     constructor(balance){
//       this.userBalance = balance;
//     }
//     buyItem(price){
//          if(this.userBalance >= price){
//             this.userBalance = this.userBalance - price
//             console.log(`Transaction Successfull Balance:${this.userBalance}`);
//          }else{
//             console.log(`You Dont have Money Please Reacharge Your Account`);
//          }
//     }
// }
// const user_1 = new Wallet(500)
// user_1.buyItem(600)
// class StreamingAccount{
//     constructor(user,Package){
//         this.userName = user;
//         this.PackageType = Package;
//     }
//     playPremiumMovie(){
//         if(this.PackageType === "premium"){
//             console.log(`🍿 Movie chal rahi hai... Enjoy karein, ${this.userName}!`);

//         }else{
//             console.log(`❌ ${this.userName}, yeh movie sirf Premium users ke liye hai. Package upgrade`);
//         }
//     }
//     upgradePackage(){
//         this.PackageType = "premium"
//         console.log(`🎉 Mubarak ho ${this.userName}! Aapka account Premium par upgrade ho gay`);
//     }
// }
// const user_1 = new StreamingAccount("Mateen","Free")
// const user_2 = new StreamingAccount("Aneeq","premium")
// user_1.playPremiumMovie();
// user_1.upgradePackage();
// user_1.playPremiumMovie();
// user_2.upgradePackage();
// user_2.playPremiumMovie();
// class Cars{
//     constructor(name,model,year,status){
//         this.userName=name;
//         this.modelName=model;
//         this.Year=year;
//         this.status=status;
//     }
//     bookCar(){
//     if(this.status === "Avaliable"){
//         console.log(`yes carname: ${this.userName} model: ${this.modelName} Year: ${this.Year} is ${this.status}`);
//         this.status ="Booked"
//     }else{
//         console.log(`sorry carname: ${this.userName} model: ${this.modelName} Year: ${this.Year} is ${this.status}`);
//     }
//     }
//     returnCar(){
//         this.status= "Avaliable";
//     }
// }
// const car_1 = new Cars("Corola","Grande",2026,"Avaliable");
// const car_2 = new Cars("Corola","Xli",2026,"Avaliable");
// const car_3 = new Cars("Corola","Altis",2026,"Avaliable");
// const car_4 = new Cars("Corola","Gli",2026,"Avaliable");
// car_1.bookCar();
// car_1.bookCar();
// car_1.returnCar();
// car_1.bookCar();
// car_3.bookCar();
// class Person{
//     constructor(name,age){
//         this.userName =name;
//         this.userAge = age
//     }
//     introduce(){
//         console.log(`My Name is ${this.userName} And I,m ${this.userAge} Years Old.`);
//     }
// }
// class Student extends Person{
//     constructor(name,age,rollNo){
//     super(name,age);
//     this.rollNumber = rollNo;
// }
// showCompleteDetails(){
//     this.introduce();
//     console.log(`And My Roll Number Is ${this.rollNumber}`);
// }

// }
// function prepareOrder(dishName, callback){
//     console.log(`Order mil gaya! ${dishName} ban raha hai...`);
    
//     setTimeout(() => {
        
//         const orderStatus = {
//             status: "Success",
//             time: "18:45 PM",
//             msg: "Garama garam Biryani ready hai!"
//         };
        
        
//         callback(orderStatus);
//     }, 5000);
// }


// prepareOrder("Biryani", (report) => {
//     console.log("Khana taiyar hai! Rider delivery ke liye nikal gaya hai. 🏍️");

//     console.log(`Rider ke paas report: ${report.msg} (Time: ${report.time})`);
// });
// function downloadGame(gameName, callback){
//     console.log(`Downloading ${gameName}... Please wait.`);
//       setTimeout(() => {
//         const downlaodStatus ={
//             status: "Completed",
//             fileSize: "2.4 GB"
//         }
//         callback(downlaodStatus);
//       },4000)
// }
// downloadGame("GTA 6",(report)=>{
//     console.log(`Game successfully downloaded! Size: ${report.fileSize}`);

// })
// function checkStock(itemName, callback){
//     console.log(`${itemName} Mujood he ya nhi`);
//     setTimeout(() => {
//          const stockStatus={
//             Available : true,
//             price : 300000

//            }
//         callback(stockStatus)
//     }, 2000);
// }
// function processPayment(amount, callback){
//     console.log(`Processing payment of Rs. ${amount}`);
//     setTimeout(()=>{
//        const  payment ={
//          transactionId: "TXN9988",
//           status: "failed" 
//        }
//        callback(payment)
//     },2000)
// }
// function generateReceipt(txnId, callback){
//     console.log(`Generating receipt for Transaction: ${txnId}...`);
//     setTimeout(() =>{
//        callback("ORDER_SUCCESSFUL")
//     },1000)
// }
// checkStock("Iphone 17 Pro Max" ,(stock)=>{
//     if(stock.Available)
//      {processPayment(stock.price, (payment)=>{
//         if(payment.status === "paid"){
//             generateReceipt(payment.transactionId,(receiptStatus)=>{
//                 console.log(`Final Status: ${receiptStatus}`);
//             })
//         }else{
//             console.log("payment Failed! Order Rejected");
//         }
    
// })}else {
//     console.log("Product out of stock hai!");
// }
// });
// const enrollmentStatus = new Promise((Resolve,Reject)=>{
//     let IsEnrolld = false;

//     if(IsEnrolld){
//         Resolve("Web Development course mein admission confirmed hai!")
//     }else{
//         Reject("Admission cancel ho gaya hai.")
//     }

// })
// enrollmentStatus 
// .then((Message)=>{
//     console.log(Message);
// })
// .catch((Error)=>{
//     console.log(Error);
// })
// class Car{
//     constructor(brand,color){
//         this.brand=brand;
//         this.color=color;
//     }
//     drive(){
//         console.log(`${this.brand} car chl rhi he`);
//     }
//     static aboutCar(){
//         console.log("cars are used for transportation");
//     }
// }
// const car_1 = new Car("Toyota","white");
// const car_2 = new Car("Honda","Black");
// car_1.drive()

// Car.aboutCar()

// console.log(car_1.brand);
// class Account{
//     constructor(){
//      this._balance = 0;
//     }
//     get balance(){
//       return  this._balance;
//     }
//     set balance (amount){
//         if(amount > 0){
//             this._balance = amount;
//         }else{
//             console.log("ERROR: Minus mein paise jama nahi ho sakte!");
//         }
//     }
// }
// const myacc = new Account();
// myacc.balance=500;
// myacc.balance=-100;
// console.log(myacc.balance);
// class Thermometer{
//     constructor(){
//        this._celsius = 25;
//     }
//     get temp(){
//         return this._celsius;
//     }
//     set temp(newTemp){
//         if(newTemp > -50 && newTemp < 100){
//             this._celsius=newTemp;
//         }else{
//             console.log("ERROR: Invalid Temperature!");
//         }

//     }
// }
// const Room = new Thermometer();
// Room._celsius = 30;
// console.log(Room._celsius);
// class Product{
//     constructor(name){
//         this.name=name;
//         this._price= 0
//     }
//     get price(){
//         return `RS :${this._price}`
//     }
//     set price(newPrice){
//          if(newPrice >= 0){
//             this._price=newPrice;
//          }else{
//             console.log("Error: Price cannot be negative!");
//          }
//     }
// }
// const p_1 =  new Product("Soap");
// p_1.price = 200;
// console.log(`ye ${p_1.name} ${p_1.price} ka he`);
// class User {
//     constructor(id) {
//         this._id = id;
//     }

//     get id() { return this._id; }
// }

// const u = new User(101);
// u.id = 555;
// console.log(u.id); 

//#Encapsulation
// class Laptop{
//      #password;
//      constructor(){
//         this.#password ="Mateen123";
//      }
//      get viewPassword(){
//         return this.#password.substring(0,2) + "******";
//      }
//      chekPassword(inputPassword){
//         if(inputPassword === this.#password){
//             console.log("Access Granted: Laptop Unlocked");
//         }else{
//             console.log("Access Denied: Wrong Password! ❌");
//         }
//      }
// }
// const myLaptop =new Laptop();
// myLaptop.chekPassword("wrondpas")
// myLaptop.chekPassword("Mateen123")
// console.log(myLaptop.viewPassword);
// class SecureCard{
//     #cardNumber;
//     #Mpin;
//     constructor(){
//         this.#cardNumber = "8210172099609211";
//         this.#Mpin = "2345";
//     }
//     get displayCard (){
//         return this.#cardNumber.substring(0,4) + "XXXXXXXXXXXX"
//     }
//     chekPin(inputPin){
//         if(inputPin === this.#Mpin){
//             console.log("Account Unlocked");
//         }else{
//             console.log("Wrong Pin! Try Again");
//         }

//     }
// }
// const C_1 = new SecureCard();
// C_1.chekPin(prompt("write Your pin!"));
// console.log(C_1.displayCard);

//#Abstraction
// class ATM{
//     #chekCard(){
//         return "Card Cheking";

//     }
//     #chekBalance(){
//        return "Cheking Balance";
//     }
//     #countCash(){
//         return "Zerrrrrrrrrrrrrrrrr zerrrr"
//     }
//     withDraw(){
//        console.log (this.#chekCard())
//         console.log(this.#chekBalance()); 
//         console.log(this.#countCash());
//        console.log("Received Your Card!");
//     }
// }
// const M_1 = new ATM();
// M_1.withDraw();

//Polymorphism
class Payment{
    process(amount){
        console.log(`Processing general payment of Rs. ${amount}`);
    }
}
class NayaPay extends Payment{
    process(amount){
        console.log(`NayaPay Wallet se Rs. ${amount } transfer ho gaye! `);
    }
}
class Raast extends Payment{
    process(amount){
        console.log(`Raast Instant Banking se Rs. ${amount}  bhej diye gaye! `);
    }
}
const p_1 = new Payment();
const p_2 = new NayaPay();
const p_3 = new Raast();
p_1.process(500);
p_2.process(500);
p_3.process(500);