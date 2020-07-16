////////////////Task 1
var firstName = prompt("Whats your first name !",);

var lastName = prompt("Whats your last name !","");

alert("Welcome "+firstName+" "+lastName);


////////////////Task 2
var favPhone = prompt("What's your favourite Phone !","")

document.write("Your favourite phone is "+favPhone+"<br> lenght of string: "+ favPhone.length);

//////////////Task 3
document.write("<br> <br>");
 var city = ("Pakistan")

 var cityStringNum = city.indexOf("n");

  document.write("String: " +city+ "<br> index of 'n': "+ cityStringNum);

////////////Task 4
document.write("<br> <br>");
var statement = "Hello World!"

var statementStringNum = statement.lastIndexOf("l");

document.write("String: " +statement+ "<br> index of 'l': "+ statementStringNum);

////////////Task 5
document.write("<br> <br>");
var statement = "Pakistan"

var state = statement.charAt(3);

document.write("String: " +statement+ "<br> Character at index 3: "+ state.toUpperCase());


////////////Task 6
document.write("<br> <br>");

 var firstName = prompt("Whats your first name !",);

 var lastName = prompt("Whats your last name !","");

 var result = firstName.concat(" ",lastName,);

 document.write(result);


//////////////Task 7
document.write("<br> <br>");
var statement = ("Hyderabad")

var replacedtext = statement.replace("Hyder","Islam");

document.write("City: " +statement+ "<br> After replacement: "+ replacedtext);


//////////////Task 8 

document.write("<br> <br>");
var statement = ("Ali and Sami are best friends. They play cricket and football together")

var replacedtext = statement.replace(/and/g,"&");

document.write("message: " +statement+ "<br> After replacement: "+ replacedtext);

//////////////////Task 9

document.write("<br> <br>");
var statement = ("472")
document.write("Value: " +statement+ "<br> Type: String");
document.write("<br> <br>");
var num = parseInt(statement)
document.write("Value: " + num + "<br> Type: Number");


//////////////////Task 10
var userInput = "peanut"
document.write("<br> <br>");
document.write("User Input: "+userInput+"<br> Upper Case: "+userInput.toUpperCase());


////////////////Task 11
var userInput = "javascript"
document.write("<br> <br>");
var userUpper = userInput.slice(0,1);
var capital = userUpper.toUpperCase();
var lastLetter = userInput.slice(1);
document.write("User Input: "+userInput+"<br> Title Case: "+capital+lastLetter);

//////////////////Task 12
document.write("<br> <br>");
var Num = (35.36)
var str = Num.toString();
var str1 = str.replace(".","");

document.write("Number: "+Num+"<br> Result: "+ str1);

/////////Task 13
document.write("<br> <br>");
var userName = ("What's Your User Name !","No Symbols");

if( userName == "@" || userName == "." ||  userName == "&" || userName == "%" ){
    alert("please enter a valid username");
}else{
    alert("Welcome "+userName);
}


///////////////Task 14
document.write("<br> <br>");
document.write("<br>" + "<br>")
var required = prompt("What you want to order sir/maam","");


var cake = ["Cake","Apple pie","Cookie","Chips","Patties"]

var reqCake = required.toLowerCase();

var slicea = reqCake.slice(0,1);

var sliceb = reqCake.slice(1);

var capital = slicea.toUpperCase();

var rem = sliceb.toLowerCase();

var result = [capital + rem]

var find = cake.indexOf(result.toString());

console.log(find)

var found = cake[find]


if( found == result){
             document.write(found + " is available at index " + find + " in our bakery");
 }else{
             document.write( "we are sorry. "+ result + " is not avaible in our bakery");
 }


 /////////////////////Task 15


 var password = prompt("Write a password","Not start with number, min 6 lenght")

 var firstChar = password.slice(0.1);
 if(password == "") {
    alert("Error: Username cannot be blank!");
    
  }else if (password.length < 6) {
    alert("Error: Password must contain at least six characters!");
  }else if(firstChar =! NaN){
    alert("Error: Password don't start with number!");
  }else {
      alert("You entered a valid password")
  }


  ///////////Task 16
  document.write("<br> <br>");

  var university = "University of Karachi"

  var splited = university.split("");

  

  for(i=0 ; i < splited.length ; i++){
    document.write(splited[i])
  }

///////////////Task 17
  document.write("<br> <br>");

var userInpur = "Pakistan"

document.write("user input: "+ userInpur + "<br> the last charcter is "  + userInpur.charAt(userInpur.length - 1 ))

    ////////////////Task 17

    var countLetters = ("The quick brown fox jumps over the lazy dog");
        
        

     

     

     