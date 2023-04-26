// Setup
function phoneticLookup(val) {
  let result = '';

const lookup = {
  "alpha":"Adams",
  "bravo":"Boston",
  "charlie": "Chicago",
  "delta":"Denver",
  "echo":"Easy",
  "foxtrot":"Frank",
}
const value = val;
result = lookup[value];
  

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");