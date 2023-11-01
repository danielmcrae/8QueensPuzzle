
let answer = []; //final answer, 2D array
const n = 4;
let workingSolution = [];


// Initialize the starting array size based on n.        remake using new Array method
for(let i = 0; i < n; i++) {
    workingSolution.push(-6);
}


//Checks for challenges queens
const sameRowConflict = (e) => {
    for(let i = e-1; i >= 0; i--) {
        if (workingSolution[i] == workingSolution[e] ) {
            return true;
        } 
    }
    return false;
}

//Checks for queens challenges at a diagonal
const diagonalConflict = (e) => {
    for(let i=e-1, j=1; i >= 0; i--, j++) {
        if(e == i) {
            // Skip
        } else if (workingSolution[e] == workingSolution[i] - j) {
            return true;
        } else if (workingSolution[e] == workingSolution[i] + j) {
            return true;
        } 
    }
    return false;    
}

// main loop
const mainLoop = (loop) => {
    for(let i = loop; i < n; i++ ) {
        if(workingSolution[i] == -6) {
            workingSolution[i] = 0;
        }
    
        if(sameRowConflict(i) || diagonalConflict(i)) {
            workingSolution[i] = workingSolution[i] + 1;
            i = i-1;
        }
        if (workingSolution[i] >= n) {
            workingSolution[i] = -6;
            workingSolution[i-1] = workingSolution[i-1] + 1;
            i = i-2;
        }
    }
    // answer.push(workingSolution);
    console.log("main loop ended " + answer); //?
}

const loopAgain = () => {
    console.log("Running Loop Again");
    if (workingSolution[n-1] < n) {
        workingSolution[n-1] = workingSolution[n-1] + 1;
        
        console.log("Reset:" + workingSolution);
    }
    mainLoop(n-1);
}

mainLoop(0);
answer.push(workingSolution);
console.log(answer);

loopAgain();
answer.push(workingSolution);
console.log("Answer" + answer);
