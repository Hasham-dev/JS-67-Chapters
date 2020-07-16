//////////Task 1


var num1 = +prompt("Please enter positive number with decimals","");


document.write("Number: "+num1+"<br> Roundoff Value: "+Math.round(num1)+"<br> Floor Value: "+Math.floor(num1)+"<br> ceil value: "+Math.ceil(num1))

//////////////////Task 2
document.write("<br> <br>")
var num1 = -prompt("Please enter negative number with decimals","");


document.write("Number: "+num1+"<br> Roundoff Value: "+Math.round(num1)+"<br> Floor Value: "+Math.floor(num1)+"<br> ceil value: "+Math.ceil(num1))

///////////////Task 3
document.write("<br> <br>")

var num = [-4]

document.write("The absolute value of "+num+" is "+Math.abs(num));


/////////////////Task 4
document.write("<br> <br>")

function rolldice() {
    return  Math.ceil(Math.random()*6)
}

for( i=0;i<5;i++) document.write("Random dice value: " +rolldice()+"<br>");

////////////////////Task 5
document.write("<br> <br>")

 function randomGenerator(id) {
        return  Math.floor(Math.random()*2) + 1 ;
    }
        var fun1 = randomGenerator();
        if( fun1 === 1){
            document.write(fun1+"<br> random coin value: Heads")
        }else if(fun1 === 2){
            document.write(fun1 +"<br> random coin value: Tails")
        }

        




        
////////////////////Task 6
document.write("<br> <br>")

function randoma(){
    return Math.floor(Math.random()*101)
}

document.write("random number between 1 and 100: "+ randoma());

/////////////////////Task 7
document.write("<br> <br>")

var kilo = prompt("Enter your weight in kilograms","")


document.write("The weight of user is " + kilo)

/////////////////Task 8
var secretNumber = [7]

var gotSecret = +prompt("Write secret number 1-10 if you know  \n Hint: Namaz", "")

if( secretNumber == gotSecret){
    alert("Congratulations you got the number")
}else(
    alert("Opps! Try Again")
);

