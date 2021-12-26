var a = 10 
var b = 20 
console.log(b);
console.log(++a);                   //pre increment 
console.log(a++);                   //postincrement


// the below are the examples of the logical operators  , they are , && ,||, ! 

var and = 10>5 && 2==2          // logical and operator return true if both side are falling true
console.log(and);
var or = 2>3 || 2=="2"         //logical or operator return true if any one of the conditionfalling true
console.log(or);
console.log(!or);          //the use of the logical not operator is that it will change the condition to true to false and vise varsa




// below are the examples of turnary operators

//the structure of the turnary oprerator is <condition> ? <successoutput> : <failureoutput>
//if the condition id true it will return the successoutput . if the condition is false it will return the failure output

var rahulIsPresent = true

var condition = rahulIsPresent ? "heispresent": "heisabsent"
console.log(condition);  

var turnary = 10==2 ? "abdul is present" : "abdul is not present"
console.log(turnary);

 

