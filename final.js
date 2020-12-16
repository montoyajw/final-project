console.log('Starting polygon app...')

let points = []
let shapes = []
let subjects = ["Chair","Plane","Phone","Computer","TV","Car","Key","Sun","Snowflake"]
let size = 50
let isDrawing = false
let subjectEl = document.getElementById('findSubject')
let scoreEl = document.getElementById('score')
//let subjectClickedEl = document.getElementById('findSubject')
let playerEl = document.getElementById('playerName')
let playerName = prompt('Insert Player Name')
let rulesEl = document.getElementById('rules')
let rules1El = document.getElementById('rules1')

let timePassed = 0;
let TIME_LIMIT = 0
let timeLeft = TIME_LIMIT;
let timerInterval = null;

playerEl.innerHTML = `${playerName}`
//scoreEl.innerHTML = `${score}/10`


function setup() {
    createCanvas(1265,500)
}

function inputScore() {
    var enteredScore = prompt("Insert Score out of 10");
    document.getElementById("scoreDisplay").innerHTML = "The Score is " + enteredScore + "/10"

    //window.prompt('Insert Score out of 10').innerHTML = scoreEl.innerHTML = 
    //console.log('Insert Score Clicked')
}

//scoreEl.innerHTML = `${score}/10`

function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('drawTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
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

function promptScore() {
    if (keyCode === 13)
    score = prompt('Insert Score out of 10')
    scoreEl.innerHTML = `${score}/10`
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

//


//subjects.forEach((subject) => {
    //if (subjectClicked)
    //subject = getRandomInt(9)
//},

function subjectClicked() {
    console.log('Subject Button Clicked')
    subjectEl.innerHTML(getRandomInt(subjects))
}


function pickSubject() {

    
    var x = Math.floor(Math.random()*8)
    //document.getElementById("number").innerHTML = x;
    console.log('number')

    document.getElementById("subject").innerHTML = subjects[x];
    


    console.log('Subject Clicked')

}



//function show() {
    //rulesEl.classList.add('show')
//}

//function hide() {
    //rules1El.classList.add('hide')
//}

//rulesEl.addEventListener('click', show)
//rules1El.addEventListener('click', hide)




subjectEl.addEventListener('click', pickSubject)



//let score = prompt('Insert Score out of 10')





