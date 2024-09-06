var myObj = {name:"Triumph", age:18, grade:12};
var myJSON = JSON.stringify(myObj);//convert objects to JSON for sending data
var newObj = JSON.parse(myJSON);//convert JSON to JS object for receiving data
document.getElementById("results").innerHTML = newObj.grade;