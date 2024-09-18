console.log("Answer 01\n");


function calculateDifference(num01 , num02) {

    let result = 0;

    if (num01 > num02) {

        result = num01 - num02

        return result
    }

    else {

        result = num02 - num01

        return result
    }
}

let ques01 = calculateDifference(8,10)
console.log(ques01);
console.log("\n");

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/


console.log("Answer 02 \n");

function isOdd (num01) {

    if(num01 % 2 == 0) {
        return false;
    }

    else {
        return true;
    }
}

let ques02 = isOdd(5);
console.log(ques02);
console.log("\n");

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

console.log("Answer 03 \n");

function findMin (arr) {

    let min = arr[0];

    for(let count = 0; count <arr.length; count++) {

        if(arr[count] < min) {
            min = arr[count];
        }
    }
    return min;

}

let arr01 = [9,2,1,5,3,7,6,0];
let ques03 = findMin(arr01);
console.log(ques03);
console.log("\n");


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

console.log("Answer 04 \n");

function filterEvenNumbers (arr) {

    let newArr = [];
    let count02 = 0;

    for(let count = 0; count <arr.length; count++) {

        if(arr[count] % 2 == 0) {
           newArr[count02] = arr[count];
           count02++;
        }
    }
    return newArr;

}

let arr02 = [9,2,1,5,3,7,6,0,8];
let ques04 = filterEvenNumbers(arr02);
console.log(ques04);
console.log("\n");


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

console.log("Answer 05 \n");

function sortArrayDescending(arr) {

    newArr = [];
    arr.sort();


    for(count=arr.length; count>0; count--) {
        newArr[arr.length-count] = arr[count-1]

    }
    return newArr;

}
let arr03 = [9,2,1,5,3,7,6,0,8];
console.log(sortArrayDescending(arr03));
console.log("\n");

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

console.log("Answer 06 \n");

function lowercaseFirstLetter (str) {


    let newStr = "";

    newStr = str[0].toLowerCase() +  str.slice(1,str.length+1);
    return newStr;
}

console.log(lowercaseFirstLetter("ABCDEF"));
console.log("\n");


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

console.log("Answer 07 \n");

function countVowels  (str) {

        let vowels = ['a','e','i','o','u','A','E','I','O','U'];
        newArr = [];
        let numOfVowels = 0;

        for(let count = 0; count < str.length; count++) {

            for(let count02 = 0; count02 <= count; count02++) {

                if(str[count] == vowels[count02]) {
              
                    newArr[numOfVowels] = str[count]
                    numOfVowels++;
                }

            }
    }
    console.log("Number Of Vowels In Given Arrya :" + numOfVowels)
    return newArr;
}

console.log(countVowels("aBAsZXiWNOo"));
console.log("\n");

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/

console.log("Answer 08 \n");


function findAverage (arr) {

    let sum = 0;
    for(let count=0; count < arr.length; count++) {

        sum = sum + arr[count];

    }

    sum = sum/arr.length;
    return sum
}

let arr04 = [9,2,1,5,3,7,6,0,8,11];
console.log(findAverage (arr04));
console.log("\n");

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------*/