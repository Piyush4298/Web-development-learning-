alert("Hi! This is just a security check, you will be asked some casual questions, answer them and then continue browsing the website! Thank you for cooperation..");
var p1 = false, p2 = false, p3 = false, p4 = false;

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
if(firstName[0] === lastName[0])
{
    p1 = true;
}

var age = prompt("Enter your age: ");
if(age > 20 && age < 30)
{
    p2 = true;
}

var height = prompt("Enter your height(in cms)");
if(height >= 170)
{
    p3 = true;
}

var petName = prompt("Enter your pet name: ");
if(petName.endsWith("Y") || petName.endsWith("y"))
{
    p4 = true;
}

if(p1 === true && p2 === true && p3 === true && p4 === true)
{
    console.log("Spy has been detected! it is " + firstName + " " + lastName);
}
else{
    console.log("This is not a spy..");
}