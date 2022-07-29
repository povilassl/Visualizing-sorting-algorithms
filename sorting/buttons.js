function initButtons() {
  button = createButton("Shuffle Array");
  button.mouseClicked(durstenfeldButton);

  button = createButton("Bubble Sort");
  button.mouseClicked(bubbleButton);

  button = createButton("Selection Sort");
  button.mouseClicked(selectionButton);

  button = createButton("Insertion Sort");
  button.mouseClicked(insertionButton);
}

function printResults(message, ret) {
  console.log(message);
  // console.log(global.array);
  console.log("comparisons = " + ret[0] + ", array access = " + ret[1]);
}

async function insertionButton() {
  let ret = await insertionSort(global.array, global.delay);
  printResults("Insertion sort: ", ret);
}

async function bubbleButton() {
  let ret = await bubbleSort(global.array, global.delay);
  printResults("Bubble sort: ", ret);
}

async function selectionButton() {
  let ret = await selectionSort(global.array, global.delay);
  printResults("Selection sort: ", ret);
}

async function durstenfeldButton() {
  let ret = await durstenfeldShuffle(global.array, global.delay);
  printResults("Durstenfeld shuffle: ", ret);
}
