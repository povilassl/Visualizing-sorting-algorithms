//Durstenfeld shuffle
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  global.array = arr;
}

async function insertionSort(arr, ms) {
  let key, j;
  let comparisons = 0;
  let swaps = 0;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      comparisons++;
      // swaps++;
      await sleep(ms);
      arr[j + 1] = arr[j];
      drawLine(arr, j + 1);
      j = j - 1;
    }
    comparisons++;
    arr[j + 1] = key;
    drawLine(arr, j + 1);
  }

  global.array = arr;
  return [comparisons, -1];
}

async function bubbleSort(arr, ms) {
  let comparisons = 0;
  let swaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        swaps++;
        await sleep(ms);
        swapAndDraw(arr, j, j + 1);
      }
    }
  }
  return [comparisons, swaps];
}

async function selectionSort(arr, ms) {
  let comparisons = 0;
  let swaps = 0;
  let min;
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    min = i; // get index
    for (let j = i; j < n; j++) {
      //   await sleep(ms);
      comparisons++;
      if (arr[j] < arr[min]) {
        swaps++;
        swapAndDraw(arr, j, min);
      }
    }
  }
  return [comparisons, swaps];
}
