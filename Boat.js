class Boat {
    constructor(x, y, width, height) {
        var options = {
            'friction': 1.0,
            'density': 1.0
        };
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage('Boat.png');
        World.add(world, this.body);
    };
    display() {

        // imageMode(CENTER);
        image(this.image, 1000, 500, 185, 187);
    };
};