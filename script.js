// first Task
// var bill= +prompt("Enter Your Total Bill");
//  if (bill >= 2000){
//     var discount =  bill * 0.20;
//     var total = bill - discount;
//     console.log("Your total bill is " + total)
//  }
//  else if (bill >1000 ){
//     var discount= bill * 0.10;
//     var total = bill - discount;
//     console.log("Your Total Bill is " + total);
//  }
// else if (bill >=500 && bill <=1000){
//     console.log("You Get free Delevery");
// }
// else {console.log("you have to buy more than 550 to get free delevery")}

// second Task
//  var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// document.write("Welcome To Our Website " + fullName);

// third Task

// var matric = +prompt ("Enter Your Matric Mask");
// var inter = +prompt("Enter Your Inter Mask");
// if (matric < 60){
//     document.write("You are not eligible for that");
// }
// else{
//   if ( matric > 70 && inter > 50){
//     document.write("You are eligible for that");
// }
// else if (matric > 60 || inter > 80){
//     document.write("congrulation your addimision is confirmed");
// }
// else {
//     document.write("you are not eligible for that");
// }

// }

// var gender = prompt("Enter Your Gender");
// var age =+prompt("Enter Your Age");
// if (age <18 ){
//     var withParents = prompt("Are you with parents? (yes or no)") .toLowerCase();
//     if (withParents === "yes"){
//         document.write("You are under 18 but you are with parents, so you can enter the park");
//     }
//     else{
//         document.write("You are under 18 and you are not with parents, so you cannot enter the park");
//     }
// }else{
//    if(gender === "female"){
//     document.write("Entery Allowd welcom Ma'am");
//    }
//     else if (gender === "male"){
//         var withCnic = prompt("Do you have CNIC? (yes or no)").toLowerCase();
//         if (withCnic === "yes"){
//             document.write("Entery Allowd welcom Sir");
//         }
//         else{
//             document.write("You are  male and you do not have CNIC, so you cannot enter the park");
//         }
//     }else{
//         document.write("Invalid input for gender");
//     }
// }
// alert parectice
// alert("5 * 45 = 225");
// alert("starting");
// alert("processing");
// alert("ending");
// alert("I am learning 'JavaScript' from SMIT");

// alert('It's a beautiful day'); wrong because of single quote in it's

// alert("It's a beautiful day");

// alert('He said, "Hello"');

// variable parectice
// 1st Task
// var favSinger = "Atif Aslam";
// alert("My Favorite Singer is " + favSinger);
// favSinger = "Ali Zafer";
// alert("Now My Favorite Singer is " + favSinger);
//2nd Task
// var coustmerMessage = ("Thanks for visiting");
// alert(coustmerMessage);
// 3rd Task
// var 1stName= "Ali"; // wrong because variable name cannot start with number
// 4th Task
// var favQari = "Qari Abdul Basit";
// var favQari2 = "";
// favQari2 = favQari;
// alert("My Favorite Qari is " + favQari2);

// varialbe for number
// 1st Task
// var myAge = 20;
// var life = 5;
// alert(myAge + life);
//2nd Task
// var weight = 70;
//  weight = weight + 10;
//  alert("My weight is " + weight);
//  3rd Task
// var num1 = 15;
// var num2 = 15;
// var sum = num1 + num2;
// alert(sum);
// chapter 4 parectice
// 1st Task
// var fullName = "Abdul mateen";
// var favSurah = "Al-Mariyam";
// var smitRollNo = 777837;

// var @email = "test@test.com"; // wrong because variable name cannot start with @
// oppretors
// 1st Task
// var num1 = 13;
// var num2 = 2;
// var mode = num1 % num2;
// alert("the mode of " + num1 + " and " +  num2  + " is " + mode);
// //  task 2
// var complexMath = 10 + 5 * 2;
// alert(complexMath);
// task 3 Even Odd Logic
// var number = +prompt("Enter a number");
// if (number % 2 === 0) {
//     alert(number + " is an even number");
// }   else {
//     alert(number + " is an odd number");
// }
// chapter 6 parectice
// task 1
// var counter = 10;
// counter++;
// counter++;
// alert(counter)
// task 2
// var num = 5;
// var num2 = num++
// alert(num);
// alert(num2);
// var x = 5;
// var y = x++ + ++x;
// alert(x);
// alert(y);
// var k = 10;
// var result = k++ + ++k + k;
// alert(result);
// var a = 5;
// var b = 10;
// var c = ++a + b++ - a++ + --b;
// alert(c);
// chapter 7 parectice
// task 1
// var a = 2;
// var b = 3;
// var check = (a++ + ++b) - (b-- + ++a);
// alert(check);
// var res = (5 + 5) * (2 + 2);
// var res = 10 + (20 / 2) * 2;
// var x = 5; var res = (x++ + 2) * 2;
// var x = 10; var res = (++x + x++) + 5;
// var x = 3; var res = (x++ + ++x) - (x + 1);
// var x = 2; var y = 3; var res = (x++ + ++y) * (y--);
// var x = 5; var y = 2; var res = (++x - --y) + (x++ + y--);
// var x = 1; var y = 1; var res = (++x + ++y) - (x-- + y--);
// var a = 10; var b = 5; var res = (a++ - --b) + (++a + b++);
// alert(res);
// var m = 2; var n = 4; var res = ((m++ + ++m) * (n-- - --n));
// chapter 8 parectice
// task 1
// var a = "Hello";
// var b = "World";
// var result = a + b;
// alert(result);
// var num1 = "10";
// var num2 = 20;
// var total = num1 + num2;
// alert(total);
// var x = "The result is: " + (2 + 2);
// alert(x);
// var name = "Mateen";
// var score = 10;
// var message = "Hello " + name + ", your total score is: " + (++score + 5);
// alert(message);
// chapter 9 parectice
// task 1
// var question = "what is your name?";
// var defaultAnswr = "Abdul Mateen"
// var userName = prompt(question, defaultAnswr);
// var city =prompt("where do you live?");
// var message = "welcome to " + city + "!";
// alert (message);
// var favLang=prompt("what is your favriot language?");
// favLang = favLang.toLowerCase();
// alert("Your Favriot Language is " + favLang);
// var userAge = +prompt("Enter Your Age");
// alert("Your Age is " + userAge);
// var myName = prompt("Enter Your Name");
// var myCity = prompt("Enter Your City");
// alert("Hello " + myName+ " From " + myCity + "!");
// var favFruite = prompt("What is Your Fav Fruite?" , "Mango")
// alert("Your Favriot Fruite is " + favFruite);

// var  num1 = +prompt("Type Any Number");;
// var num2 = +prompt("Type Any Number");
// sum = num1 + num2;
// alert(sum)

// var firstName = prompt("What is Your Name?");
// var Name = prompt("Confirm Your Name",firstName);

// var age = +prompt("What Is Your Age?");
// alert("in 10 year you will be " +(age + 10) + " year Old.");
// chapter 10 practice
// var city = prompt("Apka shehar konsa hai?");

// if (city == "Karachi") city.toLowerCase
//  {
//     alert("Welcome to SMIT!");
// }
// var age =+ prompt("what is your age?");
// if (age >= 18){
//     alert("You are Welcome!")
// }
// else{
//     alert("sorry You are under 18");
// }
// var city = prompt("Type Your City!");
// if (city === "karachi"){
//     alert("You are Welcome To Main Campus");
// }
// else if(city === "lahore"){
//     alert("Welcome To Lahore Campus");
// }
// else{
//     alert("we are sorry SMIt is note here!");
// }
// var city= prompt("type your city","karachi");
// var education = prompt("Type Your Education");
//  if(city === "karachi" && education === "inter"){
//   alert("you'r eligible For addmission")
//  }
//  else{
//     alert("You'r Not eligible for addmission")
//  }
// var age = prompt("Type Your Age!");
// var testScore = +prompt("Type Your Mask");
// if (age >= 18) {
//   if (testScore >= 60) {
//     alert("Congrulation! Passed");
//   } else {
//     alert("Faild");
//   }
// } else {
//   alert("You are Under 18");
// }
// var fruits = ["Apple", "Banana", "Cherry"];
// fruits.push("Mango");
// fruits.shift();
// fruits.pop();
// document.write(fruits)
// var colors = ["Red", "Green", "Blue", "Yellow"];
// colors.splice(1,2,"Purple")
// document.write(colors)
// var students = ["Mateen", "Ali", "Zaid", "Hassan", "Ahmed"];
// var topStudents= students.slice(1,3);
// document.write(students);

// document.write(topStudents);
//  for(var i = 1; i <= 10; i++){
//    document.write("5  x " +i+ " = " +(i * 5) ,"<br>");
//  }
// var tools = ["vscode", "terminal", "github", "html"];
// userInput= prompt("Type Your Input Name!");
// cleanInput = userInput.toLowerCase()
//  for(var i = 0; i < tools.length ;i++){
//     if(tools[i] === cleanInput){
//         alert(cleanInput +" is Avaliable")
//         break;
//     }
//  }

// var nums = [10, 55, 30, 80, 15];
// for(var i = 0; i < nums.length; i++){
//     if(nums[i] > 40){
//         alert(nums[i] +" Above 40")
//     }
// }
// var winners = ["mateen", "hamza", "ali"];
// var winInput =prompt("What is Your Name!").toLowerCase()
// var isfound = false;
// for(var i = 0; i < winners.length; i++){
//     if(winners[i] === winInput ){
//         isfound = true;
//         alert("Congrulation!")
//         break;
//     }
// } 
// if(isfound === false){
//     alert("Try again later")
// }
// var names = ["ali", "zaid", "ali", "hassan", "ali","ali"];
// var count = 0;
 
// for(var i = 0; i < names.length;i++){
//     if(names[i] === "ali"){
//         count++
//     }
// }
// alert("ali is paresent "+count+" times in list")
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         document.write(numbers[i] + " ")
//     }
// }
// for(var i = 0; i <= 20;i++){
//     document.write("SMIT Student <br>")
// }
// for(var i = 1; i <= 15; i = i+2){
//     document.write(i +" ")
// }
// for(var i = 1; i <= 5;i++){
//     document.write("Mubarak ho! Aap ko 10% discount mila hai. <br>")
// }
// for(var i = 1; i <= 10;i++){
//     document.write(i + " " +(i * 2) +"<br>")
// }
// for(var i = 1; i <= 30;i = i+3){
//     document.write(i +" ")
// }
// var tableNum = +prompt("Type Your Number For Table");
// var tablelimit = +prompt("Type Your Limit");
// for(var i = 1; i <=tablelimit;i++){
//      document.write(tableNum + " x " + i + " = " +(i * tableNum) ,"<br>");
// }
// for(var i = 50; i >= 10;i= i-10){
//     document.write(i + " ")
// }
// var total= 0;
// for(var i = 1; i <=5;i++){
//     total= total+i

// }
// document.write(total)
for(var i = 1; i <=3;i++){
   var password=prompt("Type Your Password!")
    if(password === "smit123"){
     alert("login confirmed!")
     break;
    }

}
alert("wrong password")