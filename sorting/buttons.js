function initButtons() {
  button = createButton("New Array (Linear)");
  button.mouseClicked(newLinearArrayButton);

  button = createButton("New Array (Non-Linear)");
  button.mouseClicked(newNonLinearArray);

  button = createButton("Durstenfeld Shuffle");
  button.mouseClicked(durstenfeldShuffleButton);

  button = createButton("Bubble Sort");
  button.mouseClicked(bubbleSortButton);

  button = createButton("Selection Sort");
  button.mouseClicked(selectionSortButton);

  button = createButton("Insertion Sort");
  button.mouseClicked(insertionSortButton);

  button = createButton("Coctail Sort");
  button.mouseClicked(coctailSortButton);

  button = createButton("Gnome Sort");
  button.mouseClicked(gnomeSortButton);

  button = createButton("Merge Sort");
  button.mouseClicked(mergeSortButton);

  button = createButton("Counting Sort");
  button.mouseClicked(countingSortButton);
}

function printResults(message, ret, time) {
  // console.log(global.array);
  console.log(
    message +
      "comparisons = " +
      ret[0] +
      ", array access = " +
      ret[1] +
      ", delay = " +
      global.delay +
      "ms" +
      ", time elapsed = " +
      time +
      "ms"
  );
}

async function newLinearArrayButton() {
  global.array = fillArrayLinearValues(global.nrOfValues);
  background("black");
  await drawArray(global.array, global.delay);
}

async function newNonLinearArray() {
  global.array = fillArrayRandomValues(global.nrOfValues);
  background("black");
  await drawArray(global.array, global.delay);
}

async function insertionSortButton() {
  let startTime = new Date();
  let ret = await insertionSort(global.array, global.delay);
  let endTime = new Date();
  printResults("Insertion sort: ", ret, endTime - startTime);
}

async function bubbleSortButton() {
  let startTime = new Date();
  let ret = await bubbleSort(global.array, global.delay);
  let endTime = new Date();
  printResults("Bubble sort: ", ret, endTime - startTime);
}

async function selectionSortButton() {
  let startTime = new Date();
  let ret = await selectionSort(global.array, global.delay);
  let endTime = new Date();
  printResults("Selection sort: ", ret, endTime - startTime);
}

async function durstenfeldShuffleButton() {
  let startTime = new Date();
  let ret = await durstenfeldShuffle(global.array, global.delay);
  let endTime = new Date();
  printResults("Durstenfeld shuffle: ", ret, endTime - startTime);
}

async function coctailSortButton() {
  let startTime = new Date();
  let ret = await coctailSort(global.array, global.delay);
  let endTime = new Date();
  printResults("Coctail sort: ", ret, endTime - startTime);
}

async function gnomeSortButton() {
  let startTime = new Date();
  let ret = await gnomeSort(global.array, global.delay);
  let endTime = new Date();
  printResults("Gnome sort: ", ret, endTime - startTime);
}

async function mergeSortButton() {
  let startTime = new Date();
  let ret = await mergeSortStart(global.array, global.ms);
  let endTime = new Date();
  printResults("Merge sort: ", ret, endTime - startTime);
}

async function countingSortButton() {
  let startTime = new Date();
  let ret = await countingSort(global.array, global.ms);
  let endTime = new Date();
  printResults("Counting sort: ", ret, endTime - startTime);
}
