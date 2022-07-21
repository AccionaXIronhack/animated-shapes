class Dromedary {
    constructor(ctx, posX, posY, width, height, speed, canvasSize, dromedaryImage) {
        this.ctx = ctx;
        this.dromedaryPos = { x: posX, y: posY };
        this.dromedarySize = { w: width, h: height };
        this.speed = speed;
        this.canvasSize = canvasSize;
        this.dromedaryImage = dromedaryImage;
        this.imageInstance = undefined;

        this.init();
    }

    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = `img/${this.dromedaryImage}`;
    }

    draw() {
        this.move();
        this.ctx.drawImage(this.imageInstance, this.dromedaryPos.x, this.dromedaryPos.y, this.dromedarySize.w, this.dromedarySize.h);
    }

    move() {
        if(this.dromedaryPos.x < 0 || this.dromedaryPos.x + this.dromedarySize.w > this.canvasSize.w) {
            this.turnAround();
        }
        this.dromedaryPos.x += this.speed;
    }

    turnAround() {
        this.speed *= -1;
    }
}