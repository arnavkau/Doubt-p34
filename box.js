class Box {
    constructor(x, y, w, h) {
      let options = {
        restitution: 0.8
      };
      rectMode(CENTER)
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      this.image = loadImage("obstacle.png");
      console.log("error")
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.w, this.h);
      pop();
    }
  }
  