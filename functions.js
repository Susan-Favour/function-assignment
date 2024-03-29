//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function sortArray(){
    let arr1= ["red", "blue","yellow", "black"];
    console.log(arr1.sort());
    console.log(arr1.reverse());
   
}
sortArray()
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
   function multiplication(numbers){
    numbers.forEach((number)=>{
        console.log(number * 2);
       
    })
   } 
   multiplication([7,5,1,8])

   //Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
   function valuesArray(arr){
    let firstFour = arr.slice(0,4).map(item => * 8);
    let nextTwo = arr.slice(-2).map(item => item +5 );
    const newArray = firstFour.concat(nextTwo);
    console.log(newArray);
   }
   valuesArray([6,2,78,5,10,8]);
