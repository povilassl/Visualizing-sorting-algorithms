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

  button = createButton("Radix Sort");
  button.mouseClicked(radixSortButton);

  button = createButton("Quick Sort");
  button.mouseClicked(quickSortButton);
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
  if (!global.inProgress) {
    global.inProgress = true;
    global.array = fillArrayLinearValues(global.nrOfValues);
    await drawArray(global.array, global.delay);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function newNonLinearArray() {
  if (!global.inProgress) {
    global.inProgress = true;
    global.array = fillArrayRandomValues(global.nrOfValues);
    await drawArray(global.array, global.delay);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function insertionSortButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await insertionSort(global.array, global.delay);
    let endTime = new Date();
    printResults("Insertion sort: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function bubbleSortButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await bubbleSort(global.array, global.delay);
    let endTime = new Date();
    printResults("Bubble sort: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function selectionSortButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await selectionSort(global.array, global.delay);
    let endTime = new Date();
    printResults("Selection sort: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function durstenfeldShuffleButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await durstenfeldShuffle(global.array, global.delay);
    let endTime = new Date();
    printResults("Durstenfeld shuffle: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function coctailSortButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await coctailSort(global.array, global.delay);
    let endTime = new Date();
    printResults("Coctail sort: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function gnomeSortButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await gnomeSort(global.array, global.delay);
    let endTime = new Date();
    printResults("Gnome sort: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function mergeSortButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await mergeSortStart(global.array, global.ms);
    let endTime = new Date();
    printResults("Merge sort: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function countingSortButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await countingSort(global.array, global.ms);
    let endTime = new Date();
    printResults("Counting sort: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function radixSortButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await radixSort(global.array, global.ms);
    let endTime = new Date();
    printResults("Radix sort: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}

async function quickSortButton() {
  if (!global.inProgress) {
    global.inProgress = true;
    let startTime = new Date();
    let ret = await quickSortStart(global.array, global.ms);
    let endTime = new Date();
    printResults("Quick sort: ", ret, endTime - startTime);
    global.inProgress = false;
  } else {
    console.log("Other process is currently in progress...");
  }
}
