const canvasApp = {
    description: 'Canvas app for basic shapes controlling',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    dromedaries: [],
    framesIndex: 0,             // ayudita para obstáculos
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
        
        this.createAll();
        this.drawAll();
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },
    createAll() {
        this.dromedaries.push(
            // new Dromedary(this.ctx, 50, 100, 200, 160, 8, this.canvasSize, "dromedary.png"),
            // new Dromedary(this.ctx, 50, 400, 200, 160, 20, this.canvasSize, "dromedary.png"),
            new Dromedary(this.ctx, 50, 400, 200, 160, 100, this.canvasSize, "dromedary.png")
        )
    },
    drawAll() {
        setInterval(() => {
            this.framesIndex++;
            this.clearAll();
            this.dromedaries.forEach((dromedary) => {
                dromedary.draw();
            })

            if(this.framesIndex % 50 === 0) {
                this.generateObstacle();
            }
        }, 50)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },
    generateObstacle() {
        console.warn('Generar obstáculo')
    },
    checkCollision() {
        // https://developer.mozilla.org/es/docs/Games/Techniques/2D_collision_detection
    }
}