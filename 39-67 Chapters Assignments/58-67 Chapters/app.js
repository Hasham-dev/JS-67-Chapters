// Question 1
// Task 1
var mainContent = document.getElementById("main-content");


// Task 2
console.log(mainContent.children);



////Task 3
for(i = 0 ; i < 5 ; i ++){
document.write(document.getElementsByClassName('render')[i].innerHTML);
document.write("<br>");

}

// Task 4

function chnageInp(id,text1){
var inp = document.getElementById(id).value = text1;

}



chnageInp("first-name","This is First");


// Task 5
chnageInp("last-name","This is last");
chnageInp("email","vakanihasham64@gmail.com");

// Question 2
// Task 1
document.write("<br>");

var formContent = document.getElementById("form-content");
document.write(formContent.nodeName);

// Task 2

document.write("<br>");
document.write("<br>");

var noded = document.getElementById("lastName");
document.write(noded.nodeName);
document.write("<br>");
console.log(noded.firstChild); /////Shown on console because browser not reading it before rendering

document.write("<br>");
document.write("<br>");


/////// Task 3
noded.innerHTML = 'Last Name : Alex'

// Task 4

function myFunction() {
    var x = document.getElementById("main-content").firstChild.innerHTML;
    document.getElementById("first-child").innerHTML = x;  
  }

  myFunction();

  function myFunction1() {
    var x = document.getElementById("main-content").lastChild.innerHTML;
    document.getElementById("last-child").innerHTML = x;  
  }

  myFunction1();



  //////Task 5

  function myFunction3() {
    var x = document.getElementById("lastName").nextElementSibling.innerHTML;
    document.getElementById("sib-child").innerHTML = x;  
  }

  myFunction3();

  function myFunction4() {
    var x = document.getElementById("lastName").previousElementSibling.innerHTML;
    document.getElementById("pre-child").innerHTML = x;  
  }

  myFunction4();

  // Task 6
  function myFunction5() {
    var x = document.getElementById("email").parentNode;
    document.getElementById("par-child").innerHTML = x;  
  }

  myFunction5();


  function myFunction6() {
    var x = document.getElementById("email").nodeType;
    document.getElementById("note-child").innerHTML = x;  
  }

  myFunction6();