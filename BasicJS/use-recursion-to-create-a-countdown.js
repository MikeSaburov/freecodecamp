// Only change code below this line
function countdown(n){
 if (n <= 0) {
    return [];
  } 
  return [n].concat(countdown(n - 1))
}
// Only change code above this line