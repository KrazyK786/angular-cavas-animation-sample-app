export class Square {
  private color: string;
  x = 0;
  private y = 0;
  private z = 30;
  max = this.ctx.canvas.width / this.z;

  constructor(
    private ctx: CanvasRenderingContext2D,
    color: string
  ) {
   this.color = color;
  }

  // method that uses ctx.fillRect to draw
  private draw(){
    this.ctx.fillStyle = this.color;
    // x coordinate, y coordinate, width, height
    this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);
  }

  moveRight(){
    this.x++;
    this.draw();
  }

  // change color
  changeColor(newColor: string){
    this.color = newColor;
  }
  // // Moved setInterval to app.componenet.ts so no need for move method. Variables now private and handled in draw method
  // move method using width of canvas to redraw square
  // move(y: number, z: number){
  //   const max = this.ctx.canvas.width / z;
  //   const canvas = this.ctx.canvas;
  //   let x = 0;
  //   // setInterval will loop over callback with a delay of ms in between
  //   // x is used as a counter, allowing the loop to be stopped when the object reaches the edge of the canvas
  //   // clearInterval needs the identifier for the interval to be cancelled, which is why setInterval must be stored
  //   const i = setInterval( () => {
  //     // clearRect clears between paints
  //     this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     this.draw(x, y, z);
  //     x++;
  //
  //     if (x >= max){
  //       clearInterval(i);
  //     }
  //   }, 200);


  //     for (let x = 0; x < max; x++){
  //       this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       this.draw(x, y, z);
  //     }
  // }

}
