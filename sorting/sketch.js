let global = {
  nrOfValues: 0,
  blockHeight: 0,
  blockWidth: 0,
  array: [],
  delay: 0,
  inProgress: false,
};

async function setup() {
  createCanvas(400, 400);
  noLoop();

  initGlobal();
  initButtons();
}

async function initGlobal() {
  global.nrOfValues = 100;
  global.blockHeight = Math.floor(width / global.nrOfValues);
  global.blockWidth = Math.floor(height / global.nrOfValues);
  global.array = fillArrayLinearValues(global.nrOfValues);
  global.delay = 10;
}

let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function draw() {
  translate(1, 1); //TODO: remove this when fixing UI
  background("black");
  global.inProgress = true;
  await drawArray(global.array, global.delay);
  global.inProgress = false;
}
