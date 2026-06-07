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
var myScoreRnd = Math.round(4.3);
var myScoreCeil = Math.ceil(4.3);
var myScoreFloor = Math.floor(4.3);
alert(myScoreFloor);
