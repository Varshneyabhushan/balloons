var balloons
var count = 20
var speed = 15
function setup() {
    createCanvas(windowWidth,windowHeight)
    balloons = []
    for(var i=0;i<count;i++){
        var ball = new balloon(random(windowWidth),random(255),random(255),random(255))
        balloons.push(ball)
    }
}

function draw() {
    background(0)
    for(var i in balloons){
        balloons[i].show()
    }
}

function balloon(x,r,g,b){

    this.x = x
    this.y = windowHeight
    this.r = r
    this.g = g
    this.b = b
    this.speed = random(speed/2,speed)

    this.show = function(){
        ellipse(this.x,this.y,150,150)
        fill(this.r,this.g,this.b,200)
        this.float()
    }

    this.float = function(){
        if(this.y > 0){
            this.y -= this.speed
        }
    }

    this.reset = function(){
        this.y = windowHeight
        this.x = random(windowWidth)
        this.speed = random(speed/2,speed)
        this.r = random(255)
        this.g = random(255)
        this.b = random(255)
    }

}

function keyPressed(){
    if(event.code == 'Space'){
        for(var i=0;i<balloons.length;i++){
            balloons[i].reset()
        }
    }
}