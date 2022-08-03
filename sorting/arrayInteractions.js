async function drawArray(arr, ms) {
  for (let i = 0; i < arr.length; i++) {
    await sleep(ms);
    drawLine(arr, i);
  }
}

function drawLines(arr, x, y) {
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

function drawLine(arr, index) {
  //draw a black full height line
  stroke("black");
  line(global.blockWidth * index, height, global.blockWidth * index, 0);

  //draw real value line - this way its gradual drawing
  stroke("white");
  line(
    global.blockWidth * index,
    height,
    global.blockWidth * index,
    height - global.blockHeight * arr[index]
  );
}

function fillArrayLinearValues(nr) {
  let arr = [];
  for (let i = 0; i < nr; i++) {
    arr[i] = i;
  }

  return arr;
}

function fillArrayRandomValues(nr) {
  let arr = [];
  for (let i = 0; i < nr; i++) {
    arr[i] = Math.floor(Math.random() * nr);
  }
  return arr;
}

//array access = +4
function swap(arr, x, y) {
  temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

//maybe move await sleep(ms) here?
//array access = +4
function swapAndDraw(arr, x, y) {
  stroke("black");
  line(global.blockWidth * x, height, global.blockWidth * x, 0);
  line(global.blockWidth * y, height, global.blockWidth * y, 0);
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
