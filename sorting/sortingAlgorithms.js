//Durstenfeld shuffle
async function durstenfeldShuffle(arr, ms) {
  let comparisons = 0;
  let arrayAccess = 0;
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    await sleep(ms);
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
      await sleep(ms);
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
        await sleep(ms);
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
    await sleep(ms);
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
        await sleep(ms);
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
        await sleep(ms);
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
      await sleep(ms);
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
    await sleep(global.delay);
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
    await sleep(global.delay);
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
    await sleep(ms);
    drawLine(sorted, countArr[j]);
  }

  //copy sortted array to global
  global.array = sorted;

  return [comparisons, arrayAccess];
}
