function split(arr){
  var mid = parseInt(arr.length/2);
  var firstHalf = arr.slice(0,mid);
  var secondHalf = arr.slice(mid);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2){
  var results = [];

  while (arr1.length && arr2.length){
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
  if(array.length < 2){
    return array;
  }
  var halves = split(array);
  return merge(mergeSort(halves[0]), mergeSort(halves[1]));

}
mergeSort([2,3,4,2,4232])
