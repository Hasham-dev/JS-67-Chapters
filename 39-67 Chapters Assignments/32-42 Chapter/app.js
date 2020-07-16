
////////////Question one

function calculationsRaised(a,b){
    var cal = Math.pow(a,b);
    document.write(cal);
}

calculationsRaised(2,4);


///////////////////Question two
function leapyear(year){
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        document.write( year+ " it's a leap year");
        document.write("<br>");

    }else{
        document.write(year+" is not a leap year")
        document.write("<br>");
    }
}

for(i=2010;i<=2020;i++){
    leapyear(i);
 }


//////////////Question Three
// Isssues


//////////////////Question Four
var average,percent

function studentMarks(){
    var math = +prompt("Whats your marks in maths ?");
    var english = +prompt("Whats your marks in english ?");
    var science = +prompt("Whats your marks in science ?");
    var totalMarks = math+english+science;
    console.log(totalMarks);
    averageMarks();
    function averageMarks(){
        average = Math.round(totalMarks/3);
        percentage();
        function percentage(){
             percent = Math.round((totalMarks/300)*100);
        }
        
    }
    document.write("<br>The average marks per subject was "+average+"<br>");
    document.write("the percentage of a student was "+percent+"%<br>");

}

studentMarks();

///////////////////Question Five
function indexof(index){
    var arr = ["Python","Java","C++","HTML"]

    var indexgot = arr.indexOf(index);
    
    document.write("The index number  is "+indexgot);
}

indexof("Python");

////////////////////////////Question Six

document.write("<br>");
function removeVowels(){
    var str = "This is a string with vowels aeoiu";
  document.write(str + "<br>");
    string = str.replace(/[aeiou]/g,"");
    document.write(string);
}

removeVowels();


document.write("<br>");

////////////////Question Seven


  function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }
    
    return count;
  }
  
  Check if a character is any of the following: aeiou
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }
  
  var found = findOccurrences();
  
document.write("<br>");

document.write("The number of occurance of any two vowels are "+found);


///////////////Question eight

document.write("<br>");

function calculateSum(){

var km = +prompt("Write down the distance between two cities in KM");

var meter = km*1000;

var feet = km*3290.8;

var inches = km*39370.07;

var cenitmeters = km*100000;

document.write("<br>");
document.write("The equivalent distance in meter is "+meter);
document.write("<br>");
document.write("The equivalent distance in feet is "+ feet);
document.write("<br>");
document.write("The equivalent distance in inches is "+inches);
document.write("<br>");
document.write("The equivalent distance in centimeters is "+cenitmeters);
document.write("<br>");

}

calculateSum();

///////////////Question Nine

document.write("<br>");


function overTimeCal(){
    var workingHours = +prompt("Enter the working hours of employee");

    if(workingHours>40){
        overtime = workingHours - 40;
        overtimepay = overtime*12;
        document.write("Employee Overtime is "+overtimepay);
    }else{
        document.write("You have to work for more than 40 hours to get over time pay");
    }
}

overTimeCal();


///////////////Question Ten

// document.write("<br>");

function cashier(){
    var cash = +prompt("Enter disired amount of cash");

    ////Calculation
    var hundred = cash/100;
    var fifthy = cash/50;
    var ten = cash/ 10;
    var rem = (((cash%100)%50)%10);

    if(rem=!0){
        document.write("Required notes of 100 is "+hundred+", notes of 50 is " + fifthy+", notes of ten is "+ten+" & Rem. Amount is "+rem);

    }else{
        document.write("Required notes of 100 is "+hundred+", notes of 50 is " + fifthy+" & notes of ten is "+ten);

    }


}

cashier();