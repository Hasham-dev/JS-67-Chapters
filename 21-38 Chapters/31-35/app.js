//////////Task 1

var newDate = new Date();

document.write(newDate);


//////////Task 2
document.write("<br> <br>");

var months = ["Jan","Feb","Mar","April","May","June","July","Aug","Oct","Nov","Dec"]

var month = newDate.getMonth();

document.write(months[month]);

///////////Task 3
document.write("<br> <br>");

var Days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var day = newDate.getDay();

document.write(Days[day]);

////////////Task 4
document.write("<br> <br>");

for(i=0;i < Days.length ;i++){

    if(Days[day] == "Sunday"){
        document.write("Today is fun day");
        break
    }else if ( Days[day] == "Saturday"){
        document.write("Today is fun day");
        break
    }else{
        document.write("Working Day");
        break
    }
}


//////////////////Task 5
document.write("<br> <br>");

var Dates = newDate.getDate();

if( Dates < 15){
    document.write("First fifteen days of month")
}else if(Dates > 15){
    document.write("Last fifteen days of month")
}

//////////////////Task 6
document.write("<br> <br>");

var currDate = new Date().getTime()

var currMinute = ((currDate - 1000) * 60);

document.write("Curret Date: "+newDate+"<br>  Elapsed miliseconds since january 1,1970: "+currDate+"<br> Elapsed minutes since January 1,1970 : "+currMinute)

/////////////////////Task 7
document.write("<br> <br>");

var Times = newDate.getHours();

if( Times < 12){
    document.write("It's AM")
}else {
    document.write("It's PM")
}


///////////////TAsk 8
document.write("<br> <br>");

var laterDate = new Date(2015,5,18);

document.write("Later date: "+laterDate);

///////////////////task 9
document.write("<br> <br>");

var cal = 24 * 60 * 60 * 1000

var pastDates = (Math.round(Math.abs(newDate-laterDate)/ cal));

document.write(pastDates+ " days have passed since 1st Ramadan, 2015");


/////////////////////////task 10
document.write("<br> <br>");

var refDate = new Date(2015,11,5);

var cal =  1000

var pastSec = (Math.round(Math.abs(newDate-refDate)/ cal));

document.write("our refrence date "+refDate+"<br>"+pastSec+" seconds has passed since beginning of 2015");

///////////////////////////Task 11
document.write("<br> <br>");
var news = new Date();
news.setHours(news.getHours() - 1);
document.write( "Current Date: "+newDate + "<br>1 hour ago its "+news)

//////////////////////Task 12
document.write("<br> <br>");
var oldDate = new Date();
oldDate.setFullYear(oldDate.getFullYear() - 100);
document.write( "Current Date: "+newDate + "<br>100 years back its was "+oldDate);



/////////////////////Task 13

var age = +prompt("Whats your age","")

document.write("<br> <br>");
var oldDate = new Date();
oldDate.setFullYear(oldDate.getFullYear() - age);
var year = oldDate.getFullYear()
document.write( "Your age is :"+age + "<br>Your birth year is "+year);


////////////////////////Task 14
document.write("<br> <br>");

var customerName = prompt("Customer Name","")

var currMonth = months[newDate.getMonth()]

var Units = prompt("Please define number of units","")

var charges = 16

var Netpayable = (Units*charges);

var latePaymentSurcharge = 200

var afterDueAmount = (Netpayable+latePaymentSurcharge);

document.write("Customer Name : "+customerName+"<br>Month : "+currMonth+"<br>Number of Units : "+Units+"<br><br> Net payable amouunt in (Due Date) : "+Netpayable+"<br>Late Payment Surcharge : "+latePaymentSurcharge+"<br>After Due Date Payble : "+afterDueAmount )