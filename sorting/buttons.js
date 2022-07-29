function initButtons() {
  button = createButton("Shuffle Array");
  button.mouseClicked(durstenfeldButton);

  button = createButton("Bubble Sort");
  button.mouseClicked(bubbleButton);

  button = createButton("Selection Sort");
  button.mouseClicked(selectionButton);

  button = createButton("Insertion Sort");
  button.mouseClicked(insertionButton);

  button = createButton("Coctail Sort");
  button.mouseClicked(conctailButton);
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

async function insertionButton() {
  let startTime = new Date();
  let ret = await insertionSort(global.array, global.delay);
  let endTime = new Date();
  printResults("Insertion sort: ", ret, endTime - startTime);
}

async function bubbleButton() {
  let startTime = new Date();
  let ret = await bubbleSort(global.array, global.delay);
  let endTime = new Date();
  printResults("Bubble sort: ", ret, endTime - startTime);
}

async function selectionButton() {
  let startTime = new Date();
  let ret = await selectionSort(global.array, global.delay);
  let endTime = new Date();
  printResults("Selection sort: ", ret, endTime - startTime);
}

async function durstenfeldButton() {
  let startTime = new Date();
  let ret = await durstenfeldShuffle(global.array, global.delay);
  let endTime = new Date();
  printResults("Durstenfeld shuffle: ", ret, endTime - startTime);
}

async function conctailButton() {
  let startTime = new Date();
  let ret = await conctailSort(global.array, global.delay);
  let endTime = new Date();
  printResults("Coctail sort: ", ret, endTime - startTime);
}
