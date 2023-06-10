// ----------------------- Q 01 -----------------
    const char = prompt("Enter any letter");
    const asciiCode = char.charCodeAt(0);

    if(asciiCode>=65 && asciiCode<=90){
        alert("You entered an uppercase letter");
    }
    else if(asciiCode>=97 && asciiCode<=122){
        alert("You entered a lowercase letter");
    }
// ----------------------- Q 02 -----------------
    var int1 = +prompt("Enter a number");
    var int2 = +prompt("Enter second number");

    if(int1>int2){
        alert("The larger number is: " + int1);
    }
    else if(int1<int2){
        alert("The larger number is: " + int2);
    }
    else if(int1==int2){
        alert("The two integers are equal");
    }
// ----------------------- Q 03 -----------------
    var number = +prompt("Enter an integer");

    if(number<0){
        alert("Number is negative");
    }
    else if(number>0){
        alert("Number is positive");
    }
    else if(number==0){
        alert("Number is zero");
    }
// ----------------------- Q 04 -----------------
    var vowel = prompt("Enter a single letter");
    if(vowel=="a" || vowel=="e" || vowel=="i" || vowel=="o" || vowel=="u"){
        alert("true");
    }
    else{
        alert("false");
    }
// ----------------------- Q 05 -----------------
    var password = "mypassword";
    var userPassword = prompt("Enter Password");
    if(userPassword==""){
        alert(" Please enter your password");
    }
    else if(userPassword==password){
        alert("Correct!");
    }
    else{
        alert("Incorrect password");
    }
// ----------------------- Q 06 -----------------
    var greeting;
    var hour = 13;
    if (hour < 18) {
    greeting = "Good day";
    }
    else{
    greeting = "Good evening";
    }
// ----------------------- Q 07 -----------------
    var time = +prompt("Enter time in 24 hour format i.e. 1900");

    if(time>=0000 && time<1200){
        alert("Good Morning!");
    }
    else if(time>=1200 && time<1700){
        alert("Good Afternoon!");
    }
    else if(time>=1700 && time<2100){
        alert("Good Evening!");
    }
    else if(time>=2100 && time<2349){
        alert("Good Night!");
    }