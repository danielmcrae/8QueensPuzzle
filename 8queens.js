
const answer = [];; //final answer, 2D array
const n = 4; // the number of queens

let workingSolution = [];
//const display = document.getElementById('answer');


// Initialize the starting array size based on n.        remake using new Array method
const initializeVariable = () => {
    let iv = [];
    for(let i = 0; i < n; i++) {
        iv.push(-6);
    }
    return iv;
}

//Checks for challenges queens
const sameRowConflict = (e, ws) => {
    for(let i = e-1; i >= 0; i--) {
        if (ws[i] == ws[e] ) {
            return true;
        } 
    }
    return false;
}

//Checks for queens challenges at a diagonal
const diagonalConflict = (e, ws) => {
    for(let i=e-1, j=1; i >= 0; i--, j++) {
        if(e == i) {
            // Skip
        } else if (ws[e] == ws[i] - j) {
            return true;
        } else if (ws[e] == ws[i] + j) {
            return true;
        } 
    }
    return false;    
}

// main loop
const mainLoop = (loop, ws) => {
    for(let i = loop; i < n; i++ ) {
        if(ws[i] == -6) {
            ws[i] = 0;
        }
    
        if(sameRowConflict(i, ws) || diagonalConflict(i, ws)) {
            ws[i] = ws[i] + 1;
            i = i-1;
        }
        if (ws[i] >= n) {
            ws[i] = -6;
            ws[i-1] = ws[i-1] + 1;
            i = i-2;
        }
    }
    
        console.log("main loop ended ", ws);
    return ws;
}

const loopAgain = (ws) => {
    if (ws[n-1] < n) {
        ws[n-1] = ws[n-1] + 1;
        
            console.log("Reset:", ws);
    }
    return ws;
}

const loopDLoop = (ws) => {
    if (areWeDoneYet) {}
}

const areWeDoneYet = (currentIteration) => {
    for (let i = 0; i < n-1; i++){
        if (currentIteration[i] < n) {
            return false;
        }
    return true;
    }
}

//   **THE START**
workingSolution = initializeVariable();
    console.log(workingSolution);

answer.push(mainLoop(0, workingSolution));
workingSolution = answer[answer.length-1];

    console.log(answer);
    console.log(workingSolution);
//display.innerHTML = answer;

let workingSolution2 = loopAgain(workingSolution);
    console.log(workingSolution2);

    console.log(workingSolution);
    console.log(answer);


answer.push(mainLoop(n-1, workingSolution2));
    console.log(answer);


//display.innerHTML = answer;
    console.log("Answer ", answer);
