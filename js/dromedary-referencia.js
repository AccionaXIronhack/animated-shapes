class Dromedary {

    constructor(ctx, posX, posY, width, height ,speed, canvasSize) {

        this.ctx = ctx
        this.dromedaryPos = { x: posX, y: posY }
        this.dromedarySize = { w: width, h: height }
        this.dromedaryImg = 'img/dromedary.png'
        this.imageInstance = undefined
        this.dromedarySpeed = speed
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.dromedaryImg
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.dromedaryPos.x, this.dromedaryPos.y, this.dromedarySize.w, this.dromedarySize.h)
    }

    move() {
        if (this.dromedaryPos.x >= this.canvasSize.w - this.dromedarySize.w || this.dromedaryPos.x < 0) {
            this.turnAround()
        }
        this.dromedaryPos.x += this.dromedarySpeed
    }

    turnAround() {
        this.dromedarySpeed *= -1
    }
}