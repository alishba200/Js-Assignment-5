// Q1: Addition
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>");

// Q2: Subtraction, Multiplication, Division, and Modulus

var difference = num1 - num2;
document.write("The difference between " + num1 + " and " + num2 + " is: " + difference + "<br>");

var product = num1 * num2;
document.write("The product of " + num1 + " and " + num2 + " is: " + product + "<br>");

var quotient = num1 / num2;
document.write("The quotient when " + num1 + " is divided by " + num2 + " is: " + quotient + "<br>");

var remainder = num1 % num2;
document.write("The remainder when " + num1 + " is divided by " + num2 + " is: " + remainder + "<br>");
// Q3(a)
var myVar;
document.write("<br>");

// Q3(b)
document.write("Value after variable declaration is: " + myVar + "<br>");

// Q3(c)
myVar = 5;

// Q3(d)
document.write("Initial value: " + myVar + "<br>");

// Q3(e)
myVar++;

// Q3(f)
document.write("Value after increment is: " + myVar + "<br>");

// Q3(g)
myVar += 7;

// Q3(h)
document.write("Value after addition is: " + myVar + "<br>");

// Q3(i)
myVar--;

// Q3(j)
document.write("Value after decrement is: " + myVar + "<br>");

// Q3(k)
var remainderAfterDiv = myVar % 3;

// Q3(l)
document.write("The remainder is: " + remainderAfterDiv + "<br>");

// Q4: Calculate the cost of buying 5 movie tickets

var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("<br>The cost of buying " + numberOfTickets + " tickets is: " + totalCost + " PKR<br>");

// Q5: Display multiplication table of any number

var tableNumber = 4;
document.write("<br>Multiplication table of " + tableNumber + ":<br>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

// Q6: Temperature Converter

// Q6(a)
var celsius = 25;

// Q6(b)
var fahrenheit = (celsius * 9/5) + 32;
document.write("<br>" + celsius + "°C is " + fahrenheit + "°F<br>");

// Q6(c)
fahrenheit = 70;

// Q6(d)
celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius.toFixed(2) + "°C<br>");

// Q7: Shopping Cart Checkout Process

var priceItem1 = 650; 
var priceItem2 = 100; 
var quantityItem1 = 3; 
var quantityItem2 = 7; 
var shippingCharges = 100; 

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is: " + priceItem1 + "<br>");
document.write("Quantity of item 1 is: " + quantityItem1 + "<br>");
document.write("Price of item 2 is: " + priceItem2 + "<br>");
document.write("Quantity of item 2 is: " + quantityItem2 + "<br>");
document.write("Shipping charges: " + shippingCharges + "<br><br>");
document.write("Total cost of your order is: " + totalCost + "<br><br>");

// Q8: Percentage Calculation

var totalMarks = 980; 
var marksObtained = 804; 

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Marks Sheet</h2>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(13) + "%<br><br>");

// Q9: Currency Conversion

var usDollars = 10;
var saudiRiyals = 25;

var totalInPKR = (usDollars * 104.80) + (saudiRiyals * 28);

document.write("<h2>Currency in PKR</h2>");
document.write("Total currency in PKR: " + totalInPKR + "<br><br>");

// Q10: Arithmetic Sequence

var someNumber = 5;
var result = ((someNumber + 5) * 10) / 2;

document.write("<h2>Arithmetic Operations</h2>");
document.write("The result after performing the arithmetic operations is: " + result + "<br><br>");

// Q11: Age Calculator

var currentYear = 2016;
var birthYear = 1992; 

var age = currentYear - birthYear;

document.write("<h2>Age Calculator</h2>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age + "<br><br>");


// Q12: The Geometrizer

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius; 

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is " + circumference.toFixed(14) + "<br>");
document.write("The area is " + area.toFixed(1) + "<br><br>");

// Q13: The Lifetime Supply Calculator

var favoriteSnack = "chocolate chip";
var currentAge = 15; 
var maxAge = 65; 
var amountPerDay = 3; 

var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;

document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + amountPerDay + "<br>");
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br><br>");
