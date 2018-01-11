var swap = function(currentValue, nextValue){
    return [nextValue, currentValue];
}

function bubbleSort(arr) {
    if(arr.length <= 1) {
        return arr;
    } else {
        for(var i=0; i<arr.length-1; i++) {
            for (var j = i+1; j< arr.length; j++){
                var current = i;
                var next = j;
                if (arr[current] > arr[next]){
                    [arr[current], arr[next]] = swap(arr[current], arr[next])
                }

            }
        }
    }
    return arr;
}