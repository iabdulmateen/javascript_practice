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
// for(var i = 1; i <=3;i++){
//    var password=prompt("Type Your Password!")
//     if(password === "smit123"){
//      alert("login confirmed!")
//      break;
//     }

// }
// alert("wrong password")

// for(var i = 1; i <=10;i++){
//     if (i % 2 === 0) {
//         alert(i +" is Even Number")
//      }
// else {
//     alert(i +" is Odd Number!")
// }
// }
// for(var i = 1; i <=15; i++){
//     if(i % 3 === 0){
//         alert("Fizz")
//     }
//     else if(i % 5 === 0){
//         alert("Buzz")
//     }
//     else{
//         alert(i +" is simple number")
//     }
// }
// var evenSum = 0;
// for(var i =0;i <= 10;i++){
//     if(i % 2 === 0){
//         evenSum=evenSum+i
//     }
// }
// document.write(evenSum)
// var count=0;
// for(var i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         count++
//     }
// }
// document.write("from 1 to 20 total " + count +"  even number")
// var sevenCount = 0;
// for(var i = 1; i <= 50; i++){
//     if(i % 7 === 0){
//         sevenCount++
//     }
// }
// document.write("1 se 50 tak 7 ke total " + sevenCount + " multiples hain.")
// for(var i = 1; i <=30;i++){
//     if(i % 2===0 && i % 3 === 0){
//         document.write(i +" devided by 2 and 3 <br>")
//     }
    
// }
// var isFound = false;
// for(var i = 1;i <= 20;i++){
//     if(i % 13 === 0){
//         isFound = true;
//         break;
//     }
// }
// if(isFound== true){
//     document.write("Ji haan, number mil gaya!")
// }else{
//     document.write("nhi mila!")
// }
var startNum= +prompt("type starting number!");
var endNum= +prompt("type ending number!");
var count = 0;
for(var i = startNum; i <=endNum;i++){
    if(i % 5 === 0){
        document.write(i + " divided by 5 <br>");
        count++
    }
}
document.write(count )