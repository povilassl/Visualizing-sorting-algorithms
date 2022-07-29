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
    min = i; // get index
    for (let j = i; j < n; j++) {
      await sleep(ms);
      if (arr[j] < arr[min]) {
        swapAndDraw(arr, j, min);
        arrayAccess += 4;
      }
      comparisons++;
    }
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
