// ---------------------- Q 01 ------------------- 
    var cityName = prompt("Enter Your City Name");
    if(cityName=="Karachi" || cityName=="karachi"){
        alert("Welcome to the City of lights");
    }
// ---------------------- Q 02 -------------------
    var gender = prompt("Enter Your Genter");
    if(gender=="male" || gender=="Male"){
        alert("Good Morning Sir");
    }
    else if(gender=="female" || gender=="Female"){
        alert("Good Morning Ma'am");
    }
// ---------------------- Q 03 ------------------- 
    var trafficLightColor= prompt("Enter Traffic Light Color (e.g. Red, Green, Yellow))");
    if(trafficLightColor=="red" || trafficLightColor=="Red"){
        alert("Must Stop");
    }
    else if(trafficLightColor=="yellow" || trafficLightColor=="Yellow"){
        alert("Ready to Move");
    }
    else if(trafficLightColor=="green" || trafficLightColor=="Green"){
        alert("Move Now");
    }
// ---------------------- Q 04 ------------------- 
    var fuel = +prompt("Enter Remaining Fuel in your Car in liters");
    if(fuel<=0.25){
        alert("Please refill the fuel in your car");
    }
// ---------------------- Q 05 ------------------- 
    
    var a = 4;
    if (++a === 5){
    alert("given condition for variable a is true");
    }

    var b = 82;
    if (b++ === 83){
    alert("given condition for variable b is true");
    }

    var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
    }
    
    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){
    alert("The cost equals");
    }

    if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

   if("car" < "cat"){
    alert("car is smaller than cat");
    }
            
// ---------------------- Q 06 ------------------- 
    var totalMarks  = +prompt("Enter Total Marks Of 3 subjects");;
    var sub1 = +prompt("Enter obtained marks of 1st subject");
    var sub2 = +prompt("Enter obtained marks of 2nd subject");
    var sub3 = +prompt("Enter obtained marks of 3rd subject");
    var percentage = ((sub1+sub2+sub3)/totalMarks)*100;
    var grade, remarks;

    if(percentage>=80){
        grade = "A-one";
        remarks = "Excellent";
    }
    else if(percentage>=70 && percentage<80){
        grade = "A";
        remarks = "Good";
    }
    else if(percentage>=60 && percentage<70){
        grade = "B";
        remarks = "You need to improve";
    }
    else if(percentage<60){
        grade = "Fail";
        remarks = "Sorry";
    }

    document.write("<h1>Marks Sheet</h1><br><br>");
    document.write("Total Marks: " + totalMarks);
    document.write("<br><br>Obtained Marks: " + (sub1+sub2+sub3));
    document.write("<br><br>Percentage: " + percentage);
    document.write("<br><br>Grade: " + grade);
    document.write("<br><br>Remarks: " + remarks);

// ---------------------- Q 07 ------------------- 
    var seceretNumber = 8;
    var userInput = +prompt("Guess the number between 1-10");
    if(userInput==seceretNumber){
        alert("Bingo! Correct answer");
    }
    else if((userInput+1)==seceretNumber){
        alert("Close enough to the correct answer");
    }
    else{
        alert("Alas! Wrong guess");
    }
// ---------------------- Q 08 ------------------- 
    var number = +prompt("Enter a number");
    if(number%3==0){
        alert("The given number is divisible by 3");
    }
// ---------------------- Q 09 ------------------- 
    var inputNumber = +prompt("Enter a number");
    if(inputNumber%2==0){
        alert("The givn number is even");
    }
    else {
        alert("The givn number is odd");
    }
// // ---------------------- Q 10 ------------------- 
    var temperature = +prompt("Enter today's temperature");
    if(temperature>40){
        alert("It is too hot outside");
    }
    else if(temperature>30){
        alert("The Weather today is Normal");
    }
    else if(temperature>20){
        alert("Today's Weather is cool");
    }
    else if(temperature>10){
        alert("OMG! Today’s weather is so Cool");
    }
// ---------------------- Q 11 ------------------- 
    var num1 = +prompt("Enter first number");
    var num2 = +prompt("Enter second number");
    var operator = prompt("Choose Operator i.e. +,-,*,/,%");

    if(operator=="+"){
        alert("Addition: " + (num1+num2));
    }
    else if(operator=="-"){
        alert("Subtraction: " + (num1-num2));
    }
    else if(operator=="*"){
        alert("Multiplication: " + (num1*num2));
    }
    else if(operator=="/"){
        alert("Division: " + (num1/num2));
    }
    else if(operator=="%"){
        alert("Modulus: " + (num1%num2));
    }
    else{
        alert("Error: Invalid Operator!");
    }