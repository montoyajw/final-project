function setup() {
    createCanvas(800,400)
}

function draw() {
    background (150)


    fill('#FF71CE')
    noStroke()

    for(let j = 65; j < 100; j++) {
        for(let i=0; i <=800; i= i + 50) {
            rect(i, 5*j, 100, 100)
    }
 
    }

    for(let k = 30; k < 150; k= k + 30)
        rect(k, 2*j, 100, 100)
        fill('#018B23')
}



