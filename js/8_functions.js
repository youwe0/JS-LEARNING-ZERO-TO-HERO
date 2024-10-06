// function is a chunk of code which can be taken in use , anytime anywhere without writting code multiple time , function return a value using return keyword , function dont excute any line written after "return" keyword .
// if we store function in a variable and try to use/print it it gives undifined .

// parameter : are those variables which are declared with function declaraation .
function addTwo(a,b){} // a,b are the parameters of function .

// arguments : are those input which are provided on function exicution .
addTwo(1,2) // 1,2 are the inputs on which functions have to work .
// if we dont give any argument to function , then it gives undifined .


// ----------------------------->making a function 
function funName()
       {console.log("hello world");
    }

// ----------------------------->using a function 
funName // if we write only name of function then it said the refrence of function .
funName() //if we use () with name of function then it is exicution of function . 
 

// if user is passing a unknown number of argument then we can use rest or spred oprator in parameter .
function count(...counter){
    return counter
    //rest oprater returns a array of input parameters . 
}
console.log(count(1,2,23,3,5));





// using object in functions  we can use any data type in function .
var myobj = {
    name:"youwe",
    number:1234,

} 
function objectfunc(objectName){
    console.log(`username is ${myobj.name} and id is ${myobj.number}`);
    
}
objectfunc(myobj) // we can pass any object and array ddirectly in argument .