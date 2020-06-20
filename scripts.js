function Apple(x, y, color, score) {

    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;

    return this;
}

var apple1 = new Apple(1,2,"red",200);
var apple2 = new Apple(1,2,"blue",200);
var apple3 = new Apple(1,2,"green",200);