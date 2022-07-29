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
      comparisons++;
      arrayAccess += 2;
      if (arr[j] > arr[j + 1]) {
        await sleep(ms);
        swapAndDraw(arr, j, j + 1);
        arrayAccess += 4;
      }
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
      comparisons++;
      if (arr[j] < arr[min]) {
        swapAndDraw(arr, j, min);
        arrayAccess += 4;
      }
    }
  }
  return [comparisons, arrayAccess];
}
