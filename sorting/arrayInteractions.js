async function paintArray(arr, ms) {
  for (let i = 0; i < arr.length; i++) {
    await sleep(ms);
    line(
      global.blockWidth * i,
      height - global.blockHeight * arr[i],
      global.blockWidth * i,
      height
    );
  }
}

function fillArrayDefaultValues(nr) {
  let arr = [];
  for (let i = 0; i < nr; i++) {
    arr[i] = i;
  }

  return arr;
}

function swap(arr, x, y) {
  temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function swapAndDraw(arr, x, y) {
  stroke("black");
  line(
    global.blockWidth * x,
    height - global.blockHeight * arr[x],
    global.blockWidth * x,
    height
  );
  line(
    global.blockWidth * y,
    height - global.blockHeight * arr[y],
    global.blockWidth * y,
    height
  );
  temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;

  stroke("white");
  line(
    global.blockWidth * x,
    height - global.blockHeight * arr[x],
    global.blockWidth * x,
    height
  );
  line(
    global.blockWidth * y,
    height - global.blockHeight * arr[y],
    global.blockWidth * y,
    height
  );
}
