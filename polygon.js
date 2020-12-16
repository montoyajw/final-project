


console.log('Starting polygon app...')

let points = []
let shapes = []
let size = 50
let isDrawing = false

function setup() {
    createCanvas(800, 600)
}

function draw() {
    background('wheat')

    drawShapes()

    drawDots()
    drawLines()
    if (isDrawing) {
        drawMouseDot()
    }
}

function drawShapes() {
    stroke('blue')
    strokeWeight(10)
    shapes.forEach(shape => {
        for (let i = 0; i < shape.length - 1; i++) {
            line(shape[i].x, shape[i].y,
                shape[i + 1].x, shape[i + 1].y)
        }
        line(shape[0].x, shape[0].y, 
            shape[shape.length-1].x,
            shape[shape.length-1].y)
    }) 
}

function drawMouseDot() {
    fill('cyan')
    if (currentPointIsCloseToFirst()) {
        fill('purple')
    }
    noStroke()

    circle(mouseX, mouseY, size)

    stroke('white')
    strokeWeight(10)

    line(mouseX, mouseY, 
         points[points.length-1].x, points[points.length-1].y)
}

function currentPointIsCloseToFirst() {
    return distance({ x: mouseX, y: mouseY }, points[0]) < size
}

function distance(pt1, pt2) {
    let deltaX = pt2.x - pt1.x
    let deltaY = pt2.y - pt1.y
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
}

function drawDots() {
    fill('darkred')
    noStroke()
    
    points.forEach(point => {
        circle(point.x, point.y, size)
    })
    //addEventListener('rightClick',)
}


function drawLines() {
    stroke('gray')
    strokeWeight(10)

    for (let i = 0; i < points.length - 1; i++) {
        line(points[i].x, points[i].y, 
             points[i+1].x, points[i+1].y)
    }
}

function mousePressed() {
    if (isDrawing && currentPointIsCloseToFirst()) {
        shapes.push(points)
        clearDots()
    } else {
        isDrawing = true
        points.push({x: mouseX, y: mouseY})
    }
}

function deleteClicked() {
    if (keyCode === 39) {
        deleteDots()
    }
}

function deleteDots() {
    points = []
    isDrawing = false    
}

function keyPressed() {
    if (keyCode === 32) { // spacebar
        clearDots()
    }
}

function clearDots() {
    points = []
    isDrawing = false
}
