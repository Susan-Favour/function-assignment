//Q1:Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function sorting(){
    const words = [ "Susan", "Sarah", "Sylvia", "Sydney"];
    console.log(words.sort());
    console.log(words.reverse());
}
sorting()

// Q2: Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkElements(){
    let arr = arr.forEach(element => {
        if (element > 0){
            console.log("positive");
        }else if (element < 0){
            console.log("negative");
        } else {
            console.log("zero");
        }
    });
}
  // Q3: Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
   let employee = [
    { id:1},
    { name: "Martha"},
    { salary: [10000, 25000, 39000, 80000] },
   ];
   employee.sort(function(a,b){
    return a.salary - (b.salary);
   });
   employee.forEach((person) => console.log(employee.salary));
   console.log(employee);
   
// Q4: Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
   function MultiplyNumbers(numbers){
    numbers.forEach(function(number){
        console.log(number * 2);
    });
   }
   const numbersArray = [15, 25, 17, 34];
   MultiplyNumbers(numbersArray);

   // Q5: Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
   const numbers = [ 4, 6, 8, 10, 12, 11];
   function Array(numbers){
    numbers.forEach((number, index) => {
        if(index <  4){
            numbers[index] = number * 8;
        }else if (index >= numbers.length - 2){
            numbers[index] = number + 5;
        }
    });
    console.log(numbers);
   }
   Array(numbers)