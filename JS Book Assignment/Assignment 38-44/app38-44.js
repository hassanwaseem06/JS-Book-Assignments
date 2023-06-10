
// ----------------------Question 01----------------------
function power(a,b){
    var number = a;
    var power = b;
    var calc = a**b;
    alert("Result: " + calc )
}

var num = +prompt("Enter Number: ");
var p = +prompt("Enter Power: ");
power(num,p);

// ----------------------Question 02 ----------------------

function leapYear(year){
    var year = year;
    if( (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ){
        alert(year + " is a leap year")
    }
    else{
        alert(year + " is not a leap year")
    }
}

var year = +prompt("Enter year to check leap year")
leapYear(year) 

// ----------------------Question 03----------------------
function area(s1,s2,s3){
    var s = findS(s1,s2,s3)
    var area =  s*(s-s1)*(s-s2)*(s-s3)
    alert(area)
}

function findS(a,b,c){
    var s = ( a + b + c ) / 2
    return s
}

area(4,5,7)

// ----------------------Question 04----------------------

function mainFunction(){
    var mark1 = +prompt("Enter marks for subject 1: ")
    var mark2 = +prompt("Enter marks for subject 2: ")
    var mark3 = +prompt("Enter marks for subject 3: ")
    var avg = avgFunction(mark1,mark2,mark3)
    var per = percentage(mark1,mark2,mark3)
    alert("Average: " + avg)
    alert("Percentage: " + per +"%")
}

function avgFunction(a,b,c){
    var average = (a+b+c)/3;
    average = average.toFixed(2)
    return average
}

function percentage(a,b,c){
    var total = a + b + c;
    var percentage = (total / 300) * 100;
    percentage = percentage.toFixed(2) 
    return percentage 
}

mainFunction()

/// ----------------------Question 05----------------------

var strText = "This is my testing string"
var checkIndex = prompt("Enter character to find index") 
var matchFound = false;

function findIndex(char){
    for(i=0; i<strText.length; i++){
        if(checkIndex === strText[i]){
            matchFound = true;
            document.write("Index: " + i)
            break;
        }
    }
    if(matchFound === false){
        document.write("Index not found")
    }

} 

document.write(strText + "<br>" + "<br>")
findIndex(checkIndex)

// ----------------------Question 06----------------------
var str =  "My name is Hassan and I am student"
function removeVowels(str){
    var noVowels = "";
    for(i=0; i<str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U'){
            continue;
        }
        else{
            noVowels += str[i]
        }
    }
    document.write("String Before: " + str + "<br>" + "<br>" );
    document.write("String After: " + noVowels + "<br>" + "<br>");
}

removeVowels(str)

// ----------------------Question 07----------------------

var str = "Pleases read this application and give me gratuity";
var chars = str.split("")
var count = 0;
var occurrences = []
for(var i = 0; i < chars.length - 1; i++) {
    var char = chars[i];
    var next = chars[i + 1];

    if(findOccurence(char) && findOccurence(next)){
      count++
      var twoChar = char + next;
      occurrences.push(twoChar)
    }
}

function findOccurence(char) {
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
document.write("String: " + str + "<br>" + "<br>")
document.write("Count: " + count + "<br>" + "<br>")
document.write("Occurences are: " + occurrences + "<br>")

// ----------------------Question 08----------------------

var distance = +prompt("Enter distance from city A to City B in KM: ")
meter(distance)
feet(distance)
inches(distance)
centimeters(distance)

function meter(dis){
  var meterDistance = dis * 1000
  document.write("Distance between city A to city B is " + meterDistance + " meters." + "<br>" + "<br>")
}

function feet(dis){
  var feetDistance = dis * 3281
  document.write("Distance between city A to city B is " + feetDistance + " feets." + "<br>" + "<br>")
}

function inches(dis){
  var inchDistance = dis * 39370
  document.write("Distance between city A to city B is " + inchDistance + " inches." + "<br>" + "<br>")
}

function centimeters(dis){
  var centimeterDistance = dis * 100000
  document.write("Distance between city A to city B is " + centimeterDistance + " centimeters." + "<br>" + "<br>")
}

// ----------------------Question 09----------------------

var workingHours = +prompt("Enter your working hours: ")
var overTime, overTimePay;
var overTimeHourPay = 12;

if(workingHours > 40){
  overTime = workingHours - 40;
  overTimePay = overTime * overTimeHourPay;
  alert("Your overtime pay cost is: " + overTimePay + "rupees");
} 

else{
  alert("You need to work more to get overtime")
}

// ----------------------Question 10----------------------

var amount = +prompt("Enter amount to Withdraw")
var hundred = parseInt(amount / 100)
var fifty = parseInt((amount % 100) / 50)
var ten = parseInt((((amount % 100) % 50) / 10))

document.write("Entered amount: " + amount + "<br>");
document.write("You will have " + hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes.")
