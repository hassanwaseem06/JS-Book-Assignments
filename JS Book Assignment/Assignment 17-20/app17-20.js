 // ---------------------Q 01------------------
    var array = [[],[]];
// ---------------------Q 02------------------
    var matrixArray = [[0, 1, 2, 3], [1, 0 ,1,  2], [2, 1, 0, 1]];

    var matrix = matrixArray.map(function(row) {
    return row.join(' ');
    }).join('\n');
    console.log(matrix);
// ---------------------Q 03------------------
    for(var i=0; i<=10; i++){
        console.log(i + "\n");
    }
// ---------------------Q 04------------------
    var tableNum = +prompt("Enter a number to show its multiplication");
    var tableLength = +prompt("Enter length of multiplication");
    for(var i = 1; i<=tableLength; i++){
        console.log(tableNum + "×" + i + " = " + (tableNum*i));
    }
// ---------------------Q 05------------------
    var fruits = ["apple", "banana", "mango", "orange","strawberry"];
 
    for(var i=0; i<fruits.length; i++){
        console.log(fruits[i])
    }
// ---------------------Q 06------------------
    var counting = ""
    var reverseCounting = "";
    var even = "";
    var odd = "";
    var series = "";
    for(var i=1; i<=15; i++){ 
        counting += i + ", ";
    }
    for(var i=10; i>0; i--){
        reverseCounting += i + ", ";
    }
    for(var i=0; i<=20; i+=2){
        even += i + ", "
    }
    for(var i=1; i<=20; i+=2){
        odd += i + ", " 
    }
    for(var i=2; i<=20; i+=2){
        series += i + "k, "
    }
    console.log("Counting:\n" + counting);
    console.log("Reverse Counting:\n" + reverseCounting);
    console.log("Even:\n" + even);
    console.log("Odd:\n" + odd);
    console.log("Series:\n" + series);

// ---------------------Q 07------------------
    var bakeryItems  = ["cake", "apple pie", "cookie", "chips", "patties"]
    var userSearch = prompt("Welcome to my Bakery, What do you want to order?");
    var searchCheck = false;
    var itemIndex;
    for(var i=0; i<=(bakeryItems.length-1); i++){
        if(userSearch==bakeryItems[i]){
            searchCheck = true;
            itemIndex = i;
        }
    }
    if(searchCheck){
        alert(userSearch + " is available at index " + itemIndex + " in our bakery");
    }
    else{
         alert("We are sorry. " + userSearch + " is not available in our bakery");
    }

// ---------------------Q 08------------------
    var array = [24, 53, 78, 91, 12];
    var largestNum=array[0];   
    for(var i=0; i<array.length; i++){
        if(array[i]>largestNum){
            largestNum=array[i];
        }
    }
    console.log("Array Item: " + array + "\nThe largest number is " + largestNum);

// ---------------------Q 09------------------
    var array = [24, 53, 78, 91, 12];
    var largestNum=array[0];   
    for(var i=0; i<array.length; i++){
        if(array[i]<largestNum){
            largestNum=array[i];
        }
    }
    console.log("Array Item: " + array + "\nThe smallest number is " + largestNum);

// ---------------------Q 10------------------
    var mulOfFive = "";
    for (var i=0; i<=100; i+=5){
        mulOfFive += i + ", ";
    }
    console.log(mulOfFive);