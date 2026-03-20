// var students = ["Mateen", "Ali", "Ahmed", "Hamza", "Zain","hanzala","hamza","ahmad"];
// for(var i = 0; i < students.length;i++){
//     if(students[i].toLowerCase() === "hamza"){
//         document.write( "Student" +(i + 1 ) + " is " + "<b> " +students[i] + "</b> <br>")
//     }else{ document.write("Student " + (i + 1) + " is " + students[i] + "<br>");
//     }
   
// }
// var fruits = ["Apple","Mango","Bnana","Orange","Watermelon"]
// var fruitName= prompt("Which Fruit You Want?");
// var isFound =false;
// for(var i = 0; i < fruits.length;i++){
//       if(fruits[i].toLowerCase() === fruitName.toLowerCase()){
//         isFound = true;
//         break;
//       }
// }
// if(isFound == true){
//     document.write("Yes Its Avaliable!")
// }else{
//         document.write("its Note Avaliable!");
//       }
// var colors = ["Red", "Green", "Blue", "Yellow"];
// colors.splice(1,1,"Orange","Pink")
// document.write(colors)
var fruits = ["Apple", "Mango", "Banana", "Orange"];
var newFruits= fruits.slice(1,3);
document.write(fruits + "<br>");
document.write(newFruits);