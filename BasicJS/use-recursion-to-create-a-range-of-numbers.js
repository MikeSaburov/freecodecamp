function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
    return [];
  }else {
    let nums = rangeOfNumbers(startNum, endNum-1);
    nums.push(endNum);
    return nums
  }
  
};