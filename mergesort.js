function split(arr){
  var mid = parseInt(arr.length/2);
  var firstHalf = arr.slice(0,mid);
  var secondHalf = arr.slice(mid);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  var results = [];
  
  while (arr1.length && arr2.length){
    console.log('arr1: ' + arr1);
    console.log('arr2: ' + arr2)''
    if(arr1[0] > arr2[0]){
      results.push(arr2.shift());
    }else{
      results.push(arr1.shift());
    }
  }
  if(arr1.length){
    results = results.concat(arr1);
  }else{
    results = results.concat(arr2);
  }
  
  return results;
};

function mergeSort(array) {
  
  console.log(array);
  if(array.length < 2){
    return array;
  }
  var current = merge(split(array))
  
  return mergeSort(merge(split(array)));
  
  
  // twoCurrentArrays = split(arr) 
  // result = merge(twoCurrentArrays)  concat(merge(split(arr))
  // split(array)
  // console.log(arrOfArrays);
  // return split(array);
  // merge(splitArr[0], splitArr[1]);
}
