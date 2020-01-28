//Dsplay in the console the numbers from 1 to 20

for ( i = 1  ; i<=20 ; i++ )
console.log(i)


//Display in the console the odd numbers from 1 to 20

var oddArray= [];
for (var i = 1; i<20 ; i +=2 ){
    oddArray.push(i);
}

//Compute the sum of the elements of an array and display it in the console (add all numbers in the array together)

var arr=[1,2,3,4]

var sum= 0;

for (var i = 0; i < arr.length ; i++ ){
  sum += arr[i];
}

//Compute the maximum of the elements of an array and display it in the console

function maxOfList(list) {
  let i = 0;
  let max = -Infinity;
  
  while(i < list.length) {
    if (max < list[i]) {
      max = list[i];
    }
    
    i++;
  }
  
  return max;
}

console.log(maxOfList([1, 2, 3, 4]));



//Compute how many times a certain element appears in an array (count the number of times one element of your choice is in the array)

