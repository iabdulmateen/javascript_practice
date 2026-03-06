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
var balance = 10000;
var withdraw = +prompt("Enter The Amount You Want To Withdraw");
if (withdraw > balance){
    console.log("Insufficient Balance");
}
else if (withdraw <= balance){
    var total = balance - withdraw;
    console.log("Your Remaining Balance is " + total);
}
var balance = 10000;
 var deposite = +prompt("enter the amount you want to deposite");
 if (deposite > balance){
    console.log("You cannot deposite more than your balance");
}
else if (deposite <= balance){
    var total = balance + deposite;
    console.log("Your Total Balance is " + total);
}

