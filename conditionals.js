    //----------------conditionals-----------------//
    // Definition: perform different operations based on the given condition

    //Task: define whether a number is positive or negative
console.log(" As You Wish Master..")


    let integer = 9

    if(integer < 0) {
        // inside curly brackets is our code block (immediately below); which runs if we meet our CONDITION
        console.log("Negative: " + integer)
    } else {
        // if we did not meet our logical statement, else code black (below) will execute 
        console.log("Positive: " + integer)
    }

    //Task:  Setting up a security web site that grants users over the age of 18+ access to the site. Write a conditional that gives users who are 18+ access and logs access denied for users who do no meet the given condition.

    let age = 21

    if (age >= 18) {
        console.log("Access Granted!")
    } else {
        console.log("Access Denied!")
    } 

    // Nested IF STATEMENTS----note: & (ampersand) is && (and)

    let num = 120

    if(num > 100){
        console.log(num + " is greater than 100 ")
    } else if(num < 100 && num > 0) {
        console.log(num + " is less than 100, but positive ")
    } else if( num < 0){
        console.log(num + " is a negative integer ")
    } else if(num === 100){
        console.log("ONE HUNDRED")
    }else{
        console.log(" error ")
    }

    //

    let grade = 271

    if(grade >= 90 && grade <= 100){
        console.log(" A ")
    }
    else if(grade > 100){
            console.log(" ERROR! ")
    }else if(grade >= 80 && grade <= 89){
        console.log(" B ")
    }else if(grade >= 70 && grade <= 79){
        console.log(" C ")
    }else if(grade >= 60 && grade <= 69){
        console.log(" D ")
    }else if(grade >= 0 && grade <= 59) {
        console.log(" F ")
    }

// Loops:
    //" i++ " is equivalent to i + i + i ... also equal to i += 1

//Task: Count 1, 2, 3, 4, ...10

// for(i = 0; i < 10; i++) {
//    console.log(i)
// }

//Task: Count 1, 3, 5, 7, 9

// for(i = 10; i > 0; i--){
//    console.log(i)
// }


//Task: Count 2, 4, 6, 8, 10

// for(i = 1; i < 10; i ++ && i ++){
//    console.log(i)
// }

for(i = 2; i < 11; i = i + 2){
    console.log(i)
}

// ==============remainder operator===================

// Remainder operator (also known as modulo) returns the remainder left over when one operand is divided by a second operand. It always takes the dividend.

// dividend meaning %

console.log("Remainders")
console.log(4 % 3)
console.log(20 % 2)
console.log(20 % 9)

console.log(24 % 2 === 0)
console.log(35 % 2 === 0)