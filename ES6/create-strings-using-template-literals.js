const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

let array = result.failure;
for(let i=0; i< array.length; i ++){
  
  failureItems.push(`<li class="text-warning">${array[i]}</li>`)
}
  return failureItems;
}

const failuresList = makeList(result.failure);