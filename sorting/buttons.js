function initButtons() {
  button = createButton("Shuffle Array");
  button.mouseClicked(shuffleButton);

  button = createButton("Bubble Sort");
  button.mouseClicked(bubbleButton);

  button = createButton("Selection Sort");
  button.mouseClicked(selectionButton);
}

async function bubbleButton() {
  let ret = await bubbleSort(global.array, global.delay);
  console.log("Bubble sort: ");
  //   console.log(global.array);
  console.log("comparisons = " + ret[0] + ", swaps = " + ret[1]);
}

async function shuffleButton() {
  shuffleArray(global.array);
  console.log("shuffled array: ");
  console.log(global.array);
  background("black");
  await paintArray(global.array, global.delay);
}

async function selectionButton() {
  let ret = await selectionSort(global.array, global.delay);
  console.log("Selection sort: ");
  console.log(global.array);
  console.log("comparisons = " + ret[0] + ", swaps = " + ret[1]);
}
