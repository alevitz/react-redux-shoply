function freqCounter(arr){
  console.log("arr",arr)
  let obj = {};
  for (let i = 0; i < arr.length; i++){
    let count = obj[arr[i]] || 0;
    obj[arr[i]] = count + 1;
  };
  console.log("inside", obj)
  return obj;
};

export {freqCounter}; 