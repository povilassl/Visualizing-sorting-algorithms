function initButtons() {
  button = createButton("Shuffle Array");
  button.mouseClicked(shuffleButton);

  button = createButton("Bubble Sort");
  button.mouseClicked(bubbleButton);

  button = createButton("Selection Sort");
  button.mouseClicked(selectionButton);

  button = createButton("Insertion Sort");
  button.mouseClicked(insertionButton);
}

function printResults(name, ret) {
  console.log(name + " sort: ");
  console.log(global.array);
  console.log("comparisons = " + ret[0] + ", swaps = " + ret[1]);
}

async function insertionButton() {
  let ret = await insertionSort(global.array, global.delay);
  printResults("Insertion", ret);
}

async function bubbleButton() {
  let ret = await bubbleSort(global.array, global.delay);
  printResults("Bubble", ret);
}

async function selectionButton() {
  let ret = await selectionSort(global.array, global.delay);
  printResults("Selection", ret);
}

async function shuffleButton() {
  shuffleArray(global.array);
  console.log("shuffled array: ");
  console.log(global.array);
  background("black");
  await paintArray(global.array, global.delay);
}
