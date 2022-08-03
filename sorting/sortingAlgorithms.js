//Durstenfeld shuffle
async function durstenfeldShuffle(arr, ms) {
  let comparisons = 0;
  let arrayAccess = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    // await sleep(ms);
    swapAndDraw(arr, i, j);
    arrayAccess += 4;
  }

  global.array = arr;
  return [comparisons, arrayAccess];
}

async function insertionSort(arr, ms) {
  let key, j;
  let comparisons = 0;
  let arrayAccess = 0;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      comparisons++;
      arrayAccess++;
      // await sleep(ms);
      arr[j + 1] = arr[j];
      arrayAccess += 2;
      drawLine(arr, j + 1);
      j = j - 1;
    }
    comparisons++;
    arr[j + 1] = key;
    arrayAccess += 2; // one more in last while iteration
    drawLine(arr, j + 1);
  }

  global.array = arr;
  return [comparisons, arrayAccess];
}

async function bubbleSort(arr, ms) {
  let comparisons = 0;
  let arrayAccess = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // await sleep(ms);
        swapAndDraw(arr, j, j + 1);
        arrayAccess += 4;
      }
      comparisons++;
      arrayAccess += 2;
    }
  }
  return [comparisons, arrayAccess];
}

async function selectionSort(arr, ms) {
  let comparisons = 0;
  let arrayAccess = 0;
  let min;
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      comparisons++;
      arrayAccess += 2;
    }
    // await sleep(ms);
    swapAndDraw(arr, min, i);
    arrayAccess += 4;
  }
  return [comparisons, arrayAccess];
}

async function coctailSort(arr, ms) {
  let comparisons = 0;
  let arrayAccess = 0;
  let swapped = true;
  let start = 0;
  let end = arr.length - 1;

  while (swapped) {
    for (let i = start; i < end; ++i) {
      if (arr[i] > arr[i + 1]) {
        // await sleep(ms);
        swapAndDraw(arr, i, i + 1);
        arrayAccess += 4;
        swapped = true;
      }
      comparisons++;
      arrayAccess += 2;
    }

    if (!swapped) break;

    swapped = false;
    --end;

    for (let i = end - 1; i >= start; --i) {
      if (arr[i] > arr[i + 1]) {
        // await sleep(ms);
        swapAndDraw(arr, i, i + 1);
        arrayAccess += 4;
        swapped = true;
      }
      comparisons++;
      arrayAccess += 2;
    }

    ++start;
  }

  return [comparisons, arrayAccess];
}

async function gnomeSort(arr, ms) {
  let comparisons = 0;
  let arrayAccess = 0;

  let index = 0;

  while (index < arr.length) {
    if (index == 0) {
      index++;
    } else if (arr[index] >= arr[index - 1]) {
      index++;
    } else {
      // await sleep(ms);
      swapAndDraw(arr, index, index - 1);
      index--;
      arrayAccess += 4;
    }
    comparisons++;
    arrayAccess += 2; // in else if
  }

  return [comparisons, arrayAccess];
}

async function merge(array, left, mid, right, comparisons, arrayAccess) {
  const subArrayOne = mid - left + 1;
  const subArrayTwo = right - mid;

  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < subArrayOne; i++) {
    leftArray[i] = array[left + i];
    arrayAccess += 2;
  }
  for (let i = 0; i < subArrayTwo; i++) {
    rightArray[i] = array[mid + i + 1];
    arrayAccess += 2;
  }

  let indexOfSubArrayOne = 0;
  let indexOfSubArrayTwo = 0;
  let indexOfMergedArray = left;

  while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) {
    comparisons += 2;
    if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo]) {
      array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
      indexOfSubArrayOne++;
    } else {
      array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
      indexOfSubArrayTwo++;
    }

    arrayAccess += 4;
    // await sleep(global.delay);
    drawLine(array, indexOfMergedArray);
    indexOfMergedArray++;
  }
  comparisons++;

  //copy elements from left array, if there are any
  while (indexOfSubArrayOne < subArrayOne) {
    comparisons++;
    array[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
    arrayAccess += 2;
    await sleep(global.delay);
    drawLine(array, indexOfMergedArray);
    indexOfSubArrayOne++;
    indexOfMergedArray++;
  }
  comparisons++;

  //copy elements from right array, if there are any
  while (indexOfSubArrayTwo < subArrayTwo) {
    comparisons++;
    array[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
    arrayAccess += 2;
    // await sleep(global.delay);
    drawLine(array, indexOfMergedArray);
    indexOfSubArrayTwo++;
    indexOfMergedArray++;
  }
  comparisons++;

  return [comparisons, arrayAccess];
}

async function mergeSort(arr, left, right, comparisons, arrayAccess) {
  if (left >= right) return [0, 0];

  let ret;
  let mid = left + parseInt((right - left) / 2);
  ret = await mergeSort(arr, left, mid, 0, 0);
  comparisons += ret[0];
  arrayAccess += ret[1];

  ret = await mergeSort(arr, mid + 1, right, 0, 0);
  comparisons += ret[0];
  arrayAccess += ret[1];

  ret = await merge(arr, left, mid, right, 0, 0);
  comparisons += ret[0];
  arrayAccess += ret[1];

  return [comparisons, arrayAccess];
}

// works with global delay, passing ms is useless
async function mergeSortStart(arr, ms) {
  // pass array, start, end, nr of comparisons, nr of array accesses
  return await mergeSort(arr, 0, arr.length - 1, 0, 0);
}

async function countingSort(arr, ms) {
  let arrayAccess = 0;
  let comparisons = 0;

  //we ignore the fact that size could be bigger that arr.length (real uses max element instead)
  let countArr = new Array(arr.length).fill(0);

  //counting instances of elements
  for (let i = 0; i < arr.length; i++) {
    j = arr[i]; // key
    countArr[j] += 1;
    arrayAccess += 2;
  }

  //adjusting index by adding all previous elements
  for (let i = 1; i < arr.length; i++) {
    countArr[i] += countArr[i - 1];
    arrayAccess += 2;
  }

  //init new sorted array, this is a not-in-place sorting
  let sorted = [];

  //filling sorted array
  for (let i = arr.length - 1; i >= 0; i--) {
    j = arr[i]; // key
    countArr[j] -= 1;
    sorted[countArr[j]] = arr[i];
    arrayAccess += 5;
    // await sleep(ms);
    drawLine(sorted, countArr[j]);
  }

  //copy sortted array to global
  global.array = sorted;

  return [comparisons, arrayAccess];
}

async function countingSortForRadix(arr, n, exp, ms, comparisons, arrayAccess) {
  let output = new Array(n);
  let count = new Array(10).fill(0);

  //storing count of occurences
  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
    arrayAccess += 2;
  }

  //changing count[i] so that it contains the actual position(index)
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
    arrayAccess += 2;
  }

  //building the output array
  for (let i = n - 1; i >= 0; --i) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
    arrayAccess += 6;
  }

  //copy sorted elements and draw
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
    await sleep(ms);
    drawLine(arr, i);
  }

  return [comparisons, arrayAccess];
}

async function radixSort(arr, ms) {
  let comparisons = 0;
  let arrayAccess = 0;
  let ret;

  //finding max element to know nr of digits
  m = arr[0];
  arrayAccess++;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > m) {
      m = arr[i];
    }
    arrayAccess++;
  }

  let n = arr.length;

  //iterate every 10 elements
  //passing array, array.length and index
  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
    ret = await countingSortForRadix(arr, n, exp, ms, comparisons, arrayAccess);
    comparisons += ret[0];
    arrayAccess += ret[1];
  }

  return [comparisons, arrayAccess];
}

//divides array into to partitions
async function partition(arr, low, high, ms, comparisons, arrayAccess) {
  //results

  let i = low;
  let j = high;
  let pivot = arr[low];

  while (i < j) {
    while (pivot >= arr[i]) {
      i++;
      comparisons++;
      arrayAccess++;
    }
    while (pivot < arr[j]) {
      j--;
      comparisons++;
      arrayAccess++;
    }
    if (i < j) {
      await sleep(ms);
      swapAndDraw(arr, i, j);
      arrayAccess += 4;
    }
  }
  comparisons += 2; // 2 while loops

  await sleep(ms);
  swapAndDraw(arr, low, j);
  arrayAccess += 4;
  return [j, comparisons, arrayAccess];

  //problem with this (pivot = high) is that it takes
  //extremely long to sort a sorted array, keeping as comment for later

  //selects lasts element as the pivot
  // let pivot = arr[high];

  // //temp pivot index
  // let i = low - 1;

  // for (let j = low; j < high; j++) {
  //   if (arr[j] < pivot) {
  //     i++;
  //     await sleep(global.delay);
  //     swapAndDraw(arr, i, j);
  //   }
  // }
  // i++;
  // await sleep(global.delay);
  // swapAndDraw(arr, i, high);
}

//sorts a (partition of an) array, divides into partitions, then sorts those
async function quickSort(arr, low, high, ms, comparisons, arrayAccess) {
  //ensure indices are in correct order
  if (low < high) {
    //partition array to get correct index
    let ret;
    ret = await partition(arr, low, high, ms, 0, 0);

    //ret[0] stores pivot
    let p = ret[0];

    //add to results (arr[1] and arr[2])
    comparisons += arr[1];
    arrayAccess += arr[2];

    //sort the two partitions
    ret = await quickSort(arr, low, p - 1, ms, 0, 0); // left side of the pivot
    comparisons += ret[0];
    arrayAccess += ret[1];

    ret = await quickSort(arr, p + 1, high, ms, 0, 0); // right side of the pivot
    comparisons += ret[0];
    arrayAccess += ret[1];
    console.log(comparisons + " : " + arrayAccess);
  }
  return [comparisons, arrayAccess];
}

async function quickSortStart(arr, ms) {
  let ret = await quickSort(arr, 0, arr.length - 1, ms, 0, 0);
  // drawArray(arr, ms);

  return [ret[0], ret[1]];
}
