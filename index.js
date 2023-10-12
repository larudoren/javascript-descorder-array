function dscOrder(arr) {

  for (let i = 0; i <= arr.length - 2; i++){
    for (let j = i+1; j <= arr.length-1; j++ ){
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  
  return arr;
}

console.log(dscOrder([3, 5, 8, 4, 1, 9, -2]));
