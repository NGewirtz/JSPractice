class SpiralFinder {
  constructor(arr) {
    this.matrix = arr;
    this.spiral = [];
    this.data = {
      i: 0,
      j: 0,
      move: "right",
      rightBound: arr[0].length - 1,
      bottomBound: arr.length - 1,
      leftBound: 0,
      upBound: 1,
    };
  }

  moveUp() {
    if (this.data.j > this.data.upBound) {
      this.data.j -= 1;
    }else{
      this.data.move = "right";
      this.data.upBound += 1;
      this.data.i += 1;
    }
  }

  moveRight() {
    if (this.data.i < this.data.rightBound) {
      this.data.i += 1;
    }else {
      this.data.move = "down";
      this.data.rightBound -= 1;
      this.moveDown();
    }
  }

  moveDown() {
    if (this.data.j < this.data.bottomBound) {
      this.data.j += 1;
    }else{
      this.data.move = "left";
      this.data.bottomBound -= 1;
      this.moveLeft();
    }
  }

  moveLeft() {
    if (this.data.i > this.data.leftBound) {
      this.data.i -= 1;
    }else{
      this.data.move = "up";
      this.data.leftBound += 1;
      this.moveUp();
    }
  }

  solve() {
    while(this.spiral.length < (this.matrix.length * this.matrix[0].length)) {
      this.spiral.push(this.matrix[this.data.j][this.data.i]);
      switch(this.data.move) {
        case "right":
        this.moveRight();
        break;
        case "down":
        this.moveDown();
        break;
        case "left":
        this.moveLeft();
        break;
        case "up":
        this.moveUp();
        break;
      }
    }
    return this.spiral;
  }
}

let spiral = new SpiralFinder([[1,2,3],[4,5,6], [7,8,9]]);
console.log(spiral.solve());
