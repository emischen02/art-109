let socket;

function setup() {
  createCanvas(600, 400);
  background(51);

  socket = io();

  socket.on('mouse', (data) => {
    fill(255, 0, 100);
    noStroke();
    ellipse(data.x, data.y, 24, 24);
  });
}

function mouseDragged() {
  let data = {
    x: mouseX,
    y: mouseY
  };

  fill(255);
  noStroke();
  ellipse(data.x, data.y, 24, 24);

  socket.emit('mouse', data);
}