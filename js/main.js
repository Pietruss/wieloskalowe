// let numberOfRows;
// let numberOfColumns;
// let buttonMethodValue = '';
// let val1 = 0;
// let val2 = 0;
// let val3 = 0;
// let arrayToSend = new Array(numberOfRows);
//
//

//
// function validation() {
//     if (document.getElementById("rowSize").value) {
//         numberOfRows = document.getElementById("rowSize").value;
//     } else {
//         alert("Write a number!");
//         return;
//     }
//
//     if (document.getElementById("stepsSize").value) {
//         numberOfColumns = document.getElementById("stepsSize").value;
//     } else {
//         alert("Write a number!");
//         return;
//     }
//
//
//     if (document.getElementById('button30').checked) {
//         buttonMethodValue = document.getElementById('button30').value;
//     } else if (document.getElementById('button60').checked) {
//         buttonMethodValue = document.getElementById('button60').value;
//     } else if (document.getElementById('button90').checked) {
//         buttonMethodValue = document.getElementById('button90').value;
//     } else if (document.getElementById('button120').checked) {
//         buttonMethodValue = document.getElementById('button120').value;
//     } else if (document.getElementById('button225').checked) {
//         buttonMethodValue = document.getElementById('button225').value;
//     } else {
//         alert("You didn't chose a method!");
//         return;
//     }
// }
//
// function generateMatrix(randomValue) {
//     for (let i = 0; i < numberOfRows; i++) {
//         arrayToSend[i] = new Array(numberOfColumns);
//     }
//     for (let i = 0; i < numberOfRows; i++) {
//         for (let j = 0; j < numberOfColumns; j++) {
//             if (i === 0 && j === randomValue) {
//                 arrayToSend[i][j] = 1;
//             } else {
//                 arrayToSend[i][j] = 0;
//             }
//         }
//     }
// }
//
// function generateRandomNumber() {
//     return Math.floor((Math.random() * numberOfColumns));
// }
//
//
// function mainMethod() {
//
//     cleaningEnvironment();
//     validation();
//     let randomValue = generateRandomNumber();
//     generateMatrix(randomValue);
//
//     if (buttonMethodValue == 30) {
//         for (let i = 1; i < numberOfRows; i++) {
//             for (let j = 0; j < numberOfColumns; j++) {
//                 if (j === 0) {
//                     val1 = arrayToSend[i - 1][numberOfColumns - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 } else if (j === numberOfColumns - 1) {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][0];
//                 } else {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 }
//
//                 if (val1 === 0 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 }
//             }
//         }
//         drawing();
//
//     } else if (buttonMethodValue == 60) {
//         for (let i = 1; i < numberOfRows; i++) {
//             for (let j = 0; j < numberOfColumns; j++) {
//                 if (j === 0) {
//                     val1 = arrayToSend[i - 1][numberOfColumns - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 } else if (j === numberOfColumns - 1) {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][0];
//                 } else {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 }
//
//                 if (val1 === 0 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 }
//             }
//         }
//
//         drawing();
//
//     } else if (buttonMethodValue == 90) {
//         for (let i = 1; i < numberOfRows; i++) {
//             for (let j = 0; j < numberOfColumns; j++) {
//                 if (j === 0) {
//                     val1 = arrayToSend[i - 1][numberOfColumns - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 } else if (j === numberOfColumns - 1) {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][0];
//                 } else {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 }
//
//                 if (val1 === 0 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 }
//             }
//         }
//
//         drawing();
//
//     } else if (buttonMethodValue == 120) {
//
//         for (let i = 1; i < numberOfRows; i++) {
//             for (let j = 0; j < numberOfColumns; j++) {
//                 if (j === 0) {
//                     val1 = arrayToSend[i - 1][numberOfColumns - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 } else if (j === numberOfColumns - 1) {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][0];
//                 } else {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 }
//
//                 if (val1 === 0 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 }
//             }
//         }
//         drawing();
//
//     } else if (buttonMethodValue == 225) {
//         for (let i = 1; i < numberOfRows; i++) {
//             for (let j = 0; j < numberOfColumns; j++) {
//                 if (j === 0) {
//                     val1 = arrayToSend[i - 1][numberOfColumns - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 } else if (j === numberOfColumns - 1) {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][0];
//                 } else {
//                     val1 = arrayToSend[i - 1][j - 1];
//                     val2 = arrayToSend[i - 1][j];
//                     val3 = arrayToSend[i - 1][j + 1];
//                 }
//
//                 if (val1 === 0 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 0 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 0 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 0) {
//                     arrayToSend[i][j] = 0;
//                 } else if (val1 === 1 && val2 === 0 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 0) {
//                     arrayToSend[i][j] = 1;
//                 } else if (val1 === 1 && val2 === 1 && val3 === 1) {
//                     arrayToSend[i][j] = 1;
//                 }
//             }
//         }
//         drawing();
//     }
//     console.log(buttonMethodValue);
// }
//
// function drawing() {
//     for (let i = 0; i < numberOfColumns; i++) {
//         let element = document.createElement("div");
//         element.id = "row" + i;
//         document.getElementById("chosenMethod").appendChild(element);
//         for (let j = 0; j < numberOfRows; j++) {
//             if (arrayToSend[j][i] === 1) {
//                 let element = document.createElement("div");
//                 element.style.width = "10px";
//                 element.style.height = "10px";
//                 element.style.backgroundColor = "#ff0011";
//                 element.style.border = "1px solid #4f4f4f";
//                 document.getElementById("row" + i).appendChild(element);
//             } else {
//                 let element = document.createElement("div");
//                 element.style.width = "10px";
//                 element.style.height = "10px";
//                 element.style.backgroundColor = "#123321";
//                 element.style.border = "1px solid #4f4f4f";
//                 document.getElementById("row" + i).appendChild(element);
//             }
//         }
//     }
// }
//
// document.getElementById("myBtn").addEventListener("click", mainMethod);
//
//
// document.getElementById("myBtnGame").addEventListener("click", mainMethodGame);
//
//
// //game
// let numberOfRowsGame;
// let numberOfColumnsGame;
// let xCoordinate;
// let yCoordinate;
// let buttonMethodValueForGame = '';
// let arrayToSendForGame = new Array(numberOfRowsGame);
// let numberOfIteration;
// let amountOfRandomPoints;
// let array;
//
//
// function generateMatrixForGame() {
//     for (let i = 0; i < numberOfRowsGame; i++) {
//         arrayToSendForGame[i] = new Array(numberOfColumnsGame);
//     }
//     for (let i = 0; i < numberOfRowsGame; i++) {
//         for (let j = 0; j < numberOfColumnsGame; j++) {
//             if (i == (xCoordinate - 1) && j == (yCoordinate - 1)) {
//                 arrayToSendForGame[i][j] = 1;
//             } else {
//                 arrayToSendForGame[i][j] = 0;
//             }
//         }
//     }
//     let xCor = parseInt(xCoordinate);
//     let yCor = parseInt(yCoordinate);
//
//     if (buttonMethodValueForGame === 'constant') {
//         arrayToSendForGame[xCor][yCor] = 1;
//         arrayToSendForGame[xCor][yCor] = 1;
//         arrayToSendForGame[xCor][yCor + 1] = 1;
//         arrayToSendForGame[xCor - 2][yCor] = 1;
//         arrayToSendForGame[xCor - 2][yCor + 1] = 1;
//         arrayToSendForGame[xCor - 1][yCor + 2] = 1;
//     } else if (buttonMethodValueForGame === 'glider') {
//         arrayToSendForGame[xCor - 1][yCor] = 1;
//         arrayToSendForGame[xCor - 2][yCor] = 1;
//         arrayToSendForGame[xCor - 2][yCor + 1] = 1;
//         arrayToSendForGame[xCor][yCor + 1] = 1;
//     } else if (buttonMethodValueForGame === 'manualDefinition') {
//         console.log('test3');
//     } else if (buttonMethodValueForGame === 'oscillator') {
//         arrayToSendForGame[xCor - 1][yCor - 1] = 1;
//         arrayToSendForGame[xCor][yCor - 1] = 1;
//         arrayToSendForGame[xCor + 1][yCor - 1] = 1;
//     } else if (buttonMethodValueForGame === 'random') {
//         let randomPositionX;
//         let randomPositionY;
//         if (parseInt(amountOfRandomPoints) > parseInt(numberOfRowsGame) * parseInt(numberOfColumnsGame)) {
//             amountOfRandomPoints = numberOfRowsGame * numberOfColumnsGame;
//         }
//         for (let i = 0; i < amountOfRandomPoints; i++) {
//             randomPositionX = generateRandomNumberPositionX();
//             randomPositionY = generateRandomNumberPositionY();
//             if (arrayToSendForGame[randomPositionX - 1][randomPositionY - 1] == 1) {
//                 i--;
//             } else {
//                 arrayToSendForGame[randomPositionX - 1][randomPositionY - 1] = 1;
//             }
//         }
//     }
//     return arrayToSendForGame;
// }
//

//
// function drawingForGame(array, k) {
//
//     for (let i = 0; i < numberOfColumnsGame; i++) {
//         let element = document.createElement("div");
//         element.id = "row" + i + k;
//         document.getElementById("chosenMethod").appendChild(element);
//         for (let j = 0; j < numberOfRowsGame; j++) {
//             if (array[j][i] === 1) {
//                 let element = document.createElement("div");
//                 element.classList.add("red");
//                 element.dataset.columns = "" + i;
//                 element.dataset.rows = "" + j;
//                 element.addEventListener("click", fulFill);
//                 document.getElementById("row" + i + k).appendChild(element);
//
//             } else {
//                 let element = document.createElement("div");
//                 element.classList.add("green");
//                 element.dataset.columns = "" + i;
//                 element.dataset.rows = "" + j;
//                 element.addEventListener("click", fulFill);
//                 document.getElementById("row" + i + k).appendChild(element);
//             }
//         }
//     }
//     document.getElementById("chosenMethod").appendChild(document.createElement("p"));
//
// }
//
// function generateRandomNumberPositionX() {
//     return Math.floor((Math.random() * numberOfColumnsGame + 1));
// }
//
// function generateRandomNumberPositionY() {
//     return Math.floor((Math.random() * numberOfRowsGame + 1));
// }
//
// function matrixIterations(arrayToGenerate) {
//     let newArrayToSendForGame = new Array(numberOfRowsGame);
//     for (let i = 0; i < numberOfRowsGame; i++) {
//         newArrayToSendForGame[i] = new Array(numberOfColumnsGame);
//     }
//     for (let i = 0; i < numberOfRowsGame; i++) {
//         for (let j = 0; j < numberOfColumnsGame; j++) {
//             newArrayToSendForGame[i][j] = 0;
//         }
//     }
//     for (let i = 0; i < numberOfRowsGame; i++) {
//         for (let j = 0; j < numberOfColumnsGame; j++) {
//             let alive = 0;
//             if (i === 0) {
//                 if (j === 0) {
//                     if (arrayToGenerate[numberOfRowsGame - 1][numberOfColumnsGame - 1]) {
//                         alive += 1;
//                     }
//                     if (arrayToGenerate[numberOfRowsGame - 1][j]) {
//                         alive += 1;
//                     }
//                     if (arrayToGenerate[numberOfRowsGame - 1][j + 1]) {
//                         alive += 1;
//                     }
//                     if (arrayToGenerate[i][numberOfColumnsGame - 1]) {
//                         alive += 1;
//                     }
//                     if (arrayToGenerate[i][j + 1]) {
//                         alive += 1;
//                     }
//                     if (arrayToGenerate[i + 1][numberOfColumnsGame - 1]) {
//                         alive += 1;
//                     }
//                     if (arrayToGenerate[i + 1][j]) {
//                         alive += 1;
//                     }
//                     if (arrayToGenerate[i + 1][j + 1]) {
//                         alive += 1
//                     }
//                 } else if (j === numberOfColumnsGame - 1) {
//                     if (arrayToGenerate[numberOfRowsGame - 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[numberOfRowsGame - 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[numberOfRowsGame - 1][0])
//                         alive += 1;
//                     if (arrayToGenerate[i][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][0])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][0])
//                         alive += 1;
//                 } else {
//                     if (arrayToGenerate[numberOfRowsGame - 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[numberOfRowsGame - 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[numberOfRowsGame - 1][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j + 1])
//                         alive += 1;
//                 }
//             } else if (i === numberOfRowsGame - 1) {
//                 if (j === 0) {
//                     if (arrayToGenerate[i - 1][numberOfColumnsGame - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][numberOfColumnsGame - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[0][numberOfColumnsGame - 1])
//                         alive += 1;
//                     if (arrayToGenerate[0][j])
//                         alive += 1;
//                     if (arrayToGenerate[0][j + 1])
//                         alive += 1
//                 } else if (j === numberOfColumnsGame - 1) {
//                     if (arrayToGenerate[i - 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][0])
//                         alive += 1;
//                     if (arrayToGenerate[i][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][0])
//                         alive += 1;
//                     if (arrayToGenerate[0][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[0][j])
//                         alive += 1;
//                     if (arrayToGenerate[0][0])
//                         alive += 1
//                 } else {
//                     if (arrayToGenerate[i - 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[0][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[0][j])
//                         alive += 1;
//                     if (arrayToGenerate[0][j + 1])
//                         alive += 1;
//                 }
//             } else {
//                 if (j === 0) {
//                     if (arrayToGenerate[i - 1][numberOfColumnsGame - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][numberOfColumnsGame - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][numberOfColumnsGame - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j + 1])
//                         alive += 1
//                 } else if (j === numberOfColumnsGame - 1) {
//                     if (arrayToGenerate[i - 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][0])
//                         alive += 1;
//                     if (arrayToGenerate[i][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][0])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][0])
//                         alive += 1
//                 } else {
//                     if (arrayToGenerate[i - 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i - 1][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i][j + 1])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j - 1])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j])
//                         alive += 1;
//                     if (arrayToGenerate[i + 1][j + 1])
//                         alive += 1;
//                 }
//             }
//             if (arrayToGenerate[i][j]) {
//                 if (alive < 2) {
//                     newArrayToSendForGame[i][j] = 0;
//                 } else if ((2 <= alive) && (alive <= 3)) {
//                     newArrayToSendForGame[i][j] = 1;
//                 } else {
//                     newArrayToSendForGame[i][j] = 0;
//                 }
//             } else {
//                 if (alive === 3) {
//                     newArrayToSendForGame[i][j] = 1;
//                 }
//             }
//         }
//     }
//     return newArrayToSendForGame;
// }
//
// function validationForGame() {
//
//     if (document.getElementById('constant').checked) {
//         buttonMethodValueForGame = document.getElementById('constant').value;
//     } else if (document.getElementById('glider').checked) {
//         buttonMethodValueForGame = document.getElementById('glider').value;
//     } else if (document.getElementById('manualDefinition').checked) {
//         buttonMethodValueForGame = document.getElementById('manualDefinition').value;
//     } else if (document.getElementById('oscillator').checked) {
//         buttonMethodValueForGame = document.getElementById('oscillator').value;
//     } else if (document.getElementById('random').checked) {
//         buttonMethodValueForGame = document.getElementById('random').value;
//     } else {
//         alert("You didn't chose a method!");
//         return;
//     }
//
//     if (document.getElementById("numberOfIteration").value) {
//         numberOfIteration = parseInt(document.getElementById("numberOfIteration").value);
//     } else {
//         alert("Write a number4!");
//     }
//
//     if (document.getElementById("rowSizeForGame").value) {
//         numberOfRowsGame = parseInt(document.getElementById("rowSizeForGame").value);
//     } else {
//         alert("Write a number1!");
//         return;
//     }
//
//     if (document.getElementById("stepsSizeForGame").value) {
//         numberOfColumnsGame = parseInt(document.getElementById("stepsSizeForGame").value);
//     } else {
//         alert("Write a number2!");
//         return;
//     }
//
//     if (buttonMethodValueForGame === 'random') {
//         if(document.getElementById("amountOfPointToDisplay").value){
//             amountOfRandomPoints = parseInt(amountOfRandomPoints = document.getElementById("amountOfPointToDisplay").value);
//         } else{
//             alert("Not enough points to display!");
//         }
//     } else {
//         if (document.getElementById("xCoordinate").value) {
//             xCoordinate = document.getElementById("xCoordinate").value;
//             if (parseInt(xCoordinate) > parseInt(numberOfRowsGame)) {
//                 alert("Number x is too much!");
//                 return;
//
//             }
//         } else {
//             alert("Write a number!");
//             return;
//         }
//         if (document.getElementById("yCoordinate").value) {
//             yCoordinate = document.getElementById("yCoordinate").value;
//             if (parseInt(yCoordinate) > parseInt(numberOfColumnsGame)) {
//                 alert("Number y is too much!");
//             }
//         } else {
//             alert("Write a number!");
//         }
//     }
//
// }
//
// async function mainMethodGame() {
//     cleaningEnvironment();
//     validationForGame();
//     let arrayToGenerate = generateMatrixForGame();
//     array = arrayToGenerate;
//     for (let i = 0; i < numberOfIteration; i++) {
//         cleaningEnvironment();
//         drawingForGame(array, i);
//         array = matrixIterations(array);
//         console.log(array);
//         await delay(10);
//     }
// }


//growing
let myMapColor = new Map();
let mapSize = 0;
let numberOfRowsGrowing;
let numberOfColumnsGrowing;
let buttonMethodValueForGrowing;
let numberOfPointsInGrid;
let amountOfPointsInRows;
let amountOfPointsInColumns;
let numberOfPointsToRadiusOrRandomGrowing;
let radiusValueGrowing;
let arrayToSendForGrowing = new Array(numberOfRowsGrowing);
let arrayToGenerateGrowing;
let periodOrAbsorb;
let typeBoundary;
let typeOfHeksa;
let monteCarlo;
let arrayToMonteCarlo = new Array(numberOfRowsGrowing);
let energyArray = new Array(numberOfRowsGrowing);
let energyBoundaryColor = ["#e3f2fd", "#bbdefb", "#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2"];
let arrayCrystalised = new Array(numberOfRowsGrowing);
let arrayDislocation = new Array(numberOfRowsGrowing);

function drawingForGrowingMonteCarlo(array, k) {
    for (let i = 0; i < numberOfColumnsGrowing; i++) {
        let element = document.createElement("div");
        element.id = "row" + i + k;
        document.getElementById("chosenMethod").appendChild(element);
        for (let j = 0; j < numberOfRowsGrowing; j++) {
            if ((periodOrAbsorb === 'absorb' && j === 0 || periodOrAbsorb === 'absorb' && j === numberOfRowsGrowing - 1) || (periodOrAbsorb === 'absorb' && i === 0 || periodOrAbsorb === 'absorb' && i === numberOfColumnsGrowing - 1)) {
                let element = document.createElement("div");
                element.classList.add("white");
                element.dataset.columns = "" + i;
                element.dataset.rows = "" + j;
                element.addEventListener("click", fulFill);
                document.getElementById("row" + i + k).appendChild(element);
                continue;
            }
            let element = document.createElement("div");
            element.style.width = "10px";
            element.style.height = "10px";
            element.style.border = "1px solid #4f4f4f";
            element.style.backgroundColor = energyBoundaryColor[array[j][i]];
            element.dataset.columns = "" + i;
            element.dataset.rows = "" + j;
            element.addEventListener("click", fulFill);
            document.getElementById("row" + i + k).appendChild(element);
        }
    }
    document.getElementById("chosenMethod").appendChild(document.createElement("p"));

}

function cleaningEnvironment() {
    let myNode = document.getElementById("chosenMethod");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, 2));
}

function countEnergyForPoint(p1, p2, p3, p4, basePoint) {
    let sumOfEnergy = 0;
    if (basePoint !== p1) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p2) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p3) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p4) {
        sumOfEnergy += 1;
    }
    return sumOfEnergy;
}

function countEnergyForPointMoore(p1, p2, p3, p4, p5, p6, p7, p8, basePoint) {
    let sumOfEnergy = 0;
    if (basePoint !== p1) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p2) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p3) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p4) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p5) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p6) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p7) {
        sumOfEnergy += 1;
    }
    if (basePoint !== p8) {
        sumOfEnergy += 1;
    }
    return sumOfEnergy;
}

function countEnergyGap(energyBefore, energyAfter) {
    return energyAfter - energyBefore;
}

function checkEnergyGap(energyDelta) {
    return energyDelta <= 0 ? 1 : 0;
}

function calculateRandomOdds(energyDelta) {
    let kt = 0.3;
    let possibility = Math.exp(-(energyDelta / kt));
    let value = 100 - possibility;
    let random = generateRandomNumberWithScope(100);

    return random > value ? 1 : 0;

}

function monteCarloCalculation(arrayToGenerateGrowing) {
    if (monteCarlo && periodOrAbsorb === 'period' && typeBoundary === 'vonNeuman') {
        for (let i = 0; i < numberOfRowsGrowing; i++) {
            arrayToMonteCarlo[i] = new Array(numberOfColumnsGrowing);
            energyArray[i] = new Array(numberOfColumnsGrowing);
        }
        for (let i = 0; i < numberOfRowsGrowing; i++) {
            for (let j = 0; j < numberOfColumnsGrowing; j++) {
                arrayToMonteCarlo[i][j] = 0;
                energyArray[i][j] = 0;
            }
        }

        let xCoordiante;
        let yCoordiante;

        for (let i = 0; i < numberOfRowsGrowing; i++) {
            for (let j = 0; j < numberOfColumnsGrowing; j++) {
                xCoordiante = generateRandomNumberWithScope(numberOfRowsGrowing);
                yCoordiante = generateRandomNumberWithScope(numberOfColumnsGrowing);
                let energyBefore = 0;
                let randomValue = 0;
                let energyAfter = 0;
                let energyDelta = 0;
                let energyChecker = 0;
                let elementToChange;
                if (arrayToMonteCarlo[xCoordiante][yCoordiante] === 0) {
                    arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                    if (i === 0) {
                        if (j === 0) {
                            energyBefore = countEnergyForPoint(arrayToGenerateGrowing[numberOfRowsGrowing - 1][i], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][j]);
                            randomValue = generateRandomNumberWithScope(4);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = arrayToGenerateGrowing[numberOfRowsGrowing - 1][i];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[numberOfRowsGrowing - 1][i], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[numberOfRowsGrowing - 1][i]);
                                    break;
                                case 1:
                                    elementToChange = arrayToGenerateGrowing[i][j + 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[numberOfRowsGrowing - 1][i], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][j + 1]);
                                    break;
                                case 2:
                                    elementToChange = arrayToGenerateGrowing[i + 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[numberOfRowsGrowing - 1][i], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i + 1][j]);
                                    break;
                                case 3:
                                    elementToChange = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[numberOfRowsGrowing - 1][i], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else if (j === numberOfColumnsGrowing - 1) {
                            arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                            energyBefore = countEnergyForPoint(arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][j]);
                            randomValue = generateRandomNumberWithScope(4);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 2];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 2]);
                                    break;
                                case 1:
                                    elementToChange = arrayToGenerateGrowing[i][j + 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][j + 1]);
                                    break;
                                case 2:
                                    elementToChange = arrayToGenerateGrowing[i + 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i + 1][j]);
                                    break;
                                case 3:
                                    elementToChange = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else {
                            arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                            energyBefore = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][j], arrayToGenerateGrowing[i][j]);
                            randomValue = generateRandomNumberWithScope(3);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = arrayToGenerateGrowing[i][j - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][j], elementToChange);
                                    break;
                                case 1:
                                    elementToChange = arrayToGenerateGrowing[i][j + 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][j], elementToChange);
                                    break;
                                case 2:
                                    elementToChange = arrayToGenerateGrowing[i + 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][j], elementToChange);
                                    break;
                                case 3:
                                    elementToChange = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][j], elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        }
                    } else if (i === numberOfRowsGrowing - 1) {
                        if (j === 0) {
                            arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                            energyBefore = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j + 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[0][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][j]);
                            randomValue = generateRandomNumberWithScope(4);

                            switch (randomValue) {
                                case 0:
                                    elementToChange = arrayToGenerateGrowing[i - 1][j + 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j + 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[0][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                                case 1:
                                    elementToChange = arrayToGenerateGrowing[i][j + 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j + 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[0][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                                case 2:
                                    elementToChange = arrayToGenerateGrowing[0][0];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j + 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[0][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                                case 3:
                                    elementToChange = arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j + 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[0][0], arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else if (j === numberOfColumnsGrowing - 1) {
                            arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                            energyBefore = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][0], arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][j]);
                            randomValue = generateRandomNumberWithScope(4);

                            switch (randomValue) {
                                case 0:
                                    elementToChange = arrayToGenerateGrowing[i - 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][0], arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                                case 1:
                                    elementToChange = arrayToGenerateGrowing[i - 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][0], arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                                case 2:
                                    elementToChange = arrayToGenerateGrowing[numberOfRowsGrowing - 1][0];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][0], arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                                case 3:
                                    elementToChange = arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[numberOfRowsGrowing - 1][0], arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else {
                            arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                            energyBefore = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[0][j], arrayToGenerateGrowing[i][j]);
                            randomValue = generateRandomNumberWithScope(4);

                            switch (randomValue) {
                                case 0:
                                    elementToChange = arrayToGenerateGrowing[i][j - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[0][j], elementToChange);
                                    break;
                                case 1:
                                    elementToChange = arrayToGenerateGrowing[i][j + 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[0][j], elementToChange);
                                    break;
                                case 2:
                                    elementToChange = arrayToGenerateGrowing[i - 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[0][j], elementToChange);
                                    break;
                                case 3:
                                    elementToChange = arrayToGenerateGrowing[0][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[0][j], elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        }
                    } else {
                        if (j === 0) {
                            arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                            energyBefore = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], arrayToGenerateGrowing[i][j]);
                            randomValue = generateRandomNumberWithScope(4);

                            switch (randomValue) {
                                case 0:
                                    elementToChange = arrayToGenerateGrowing[i - 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                                case 1:
                                    elementToChange = arrayToGenerateGrowing[i + 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                                case 2:
                                    elementToChange = arrayToGenerateGrowing[i][j + 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                                case 3:
                                    elementToChange = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1], elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;

                        } else if (j === numberOfColumnsGrowing - 1) {
                            arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                            energyBefore = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][0], arrayToGenerateGrowing[i][j]);
                            randomValue = generateRandomNumberWithScope(4);

                            switch (randomValue) {
                                case 0:
                                    elementToChange = arrayToGenerateGrowing[i - 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][0], elementToChange);
                                    break;
                                case 1:
                                    elementToChange = arrayToGenerateGrowing[i + 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][0], elementToChange);
                                    break;
                                case 2:
                                    elementToChange = arrayToGenerateGrowing[i][j - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][0], elementToChange);
                                    break;
                                case 3:
                                    elementToChange = arrayToGenerateGrowing[i][0];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][0], elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else {

                            arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                            energyBefore = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], arrayToGenerateGrowing[i][j]);
                            randomValue = generateRandomNumberWithScope(4);

                            switch (randomValue) {
                                case 0:
                                    elementToChange = arrayToGenerateGrowing[i][j - 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], elementToChange);
                                    break;
                                case 1:
                                    elementToChange = arrayToGenerateGrowing[i][j + 1];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], elementToChange);
                                    break;
                                case 2:
                                    elementToChange = arrayToGenerateGrowing[i - 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], elementToChange);
                                    break;
                                case 3:
                                    elementToChange = arrayToGenerateGrowing[i + 1][j];
                                    energyAfter = countEnergyForPoint(arrayToGenerateGrowing[i][j - 1], arrayToGenerateGrowing[i][j + 1], arrayToGenerateGrowing[i - 1][j], arrayToGenerateGrowing[i + 1][j], elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        }
                    }
                } else {
                    j--;
                }
            }
        }
        console.log(arrayToMonteCarlo);
        console.log(arrayToGenerateGrowing);
        console.log(energyArray);
        drawingForGrowing(arrayToGenerateGrowing);
        drawingForGrowingMonteCarlo(energyArray, 5);
    } else if (monteCarlo && periodOrAbsorb === 'period' && typeBoundary === 'Moore') {
        for (let i = 0; i < numberOfRowsGrowing; i++) {
            arrayToMonteCarlo[i] = new Array(numberOfColumnsGrowing);
            energyArray[i] = new Array(numberOfColumnsGrowing);
        }
        for (let i = 0; i < numberOfRowsGrowing; i++) {
            for (let j = 0; j < numberOfColumnsGrowing; j++) {
                arrayToMonteCarlo[i][j] = 0;
                energyArray[i][j] = 0;
            }
        }

        let xCoordiante;
        let yCoordiante;

        for (let i = 0; i < numberOfRowsGrowing; i++) {
            for (let j = 0; j < numberOfColumnsGrowing; j++) {
                xCoordiante = generateRandomNumberWithScope(numberOfRowsGrowing);
                yCoordiante = generateRandomNumberWithScope(numberOfColumnsGrowing);
                let energyBefore = 0;
                let randomValue = 0;
                let energyAfter = 0;
                let energyDelta = 0;
                let energyChecker = 0;
                let elementToChange;
                if (arrayToMonteCarlo[xCoordiante][yCoordiante] === 0) {
                    arrayToMonteCarlo[xCoordiante][yCoordiante] = 1;
                    if (i === 0) {
                        if (j === 0) {
                            let basePoint = arrayToGenerateGrowing[i][j];
                            let point1 = arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1];
                            let point2 = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                            let point3 = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1];
                            let point4 = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                            let point5 = arrayToGenerateGrowing[i][j + 1];
                            let point6 = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                            let point7 = arrayToGenerateGrowing[i + 1][j];
                            let point8 = arrayToGenerateGrowing[i + 1][j + 1];

                            energyBefore = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, basePoint);
                            randomValue = generateRandomNumberWithScope(8);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = point1;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 1:
                                    elementToChange = point2;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 2:
                                    elementToChange = point3;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 3:
                                    elementToChange = point4;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 4:
                                    elementToChange = point5;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 5:
                                    elementToChange = point6;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 6:
                                    elementToChange = point7;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 7:
                                    elementToChange = point8;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else if (j === numberOfColumnsGrowing - 1) {
                            let basePoint = arrayToGenerateGrowing[i][j];
                            let point1 = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                            let point2 = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                            let point3 = arrayToGenerateGrowing[numberOfRowsGrowing - 1][0];
                            let point4 = arrayToGenerateGrowing[i][j - 1];
                            let point5 = arrayToGenerateGrowing[i][0];
                            let point6 = arrayToGenerateGrowing[i + 1][j - 1];
                            let point7 = arrayToGenerateGrowing[i + 1][j];
                            let point8 = arrayToGenerateGrowing[i + 1][0];

                            energyBefore = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, basePoint);
                            randomValue = generateRandomNumberWithScope(8);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = point1;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 1:
                                    elementToChange = point2;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 2:
                                    elementToChange = point3;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 3:
                                    elementToChange = point4;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 4:
                                    elementToChange = point5;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 5:
                                    elementToChange = point6;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 6:
                                    elementToChange = point7;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 7:
                                    elementToChange = point8;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else {
                            let basePoint = arrayToGenerateGrowing[i][j];
                            let point1 = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                            let point2 = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                            let point3 = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1];
                            let point4 = arrayToGenerateGrowing[i][j - 1];
                            let point5 = arrayToGenerateGrowing[i][j + 1];
                            let point6 = arrayToGenerateGrowing[i + 1][j - 1];
                            let point7 = arrayToGenerateGrowing[i + 1][j];
                            let point8 = arrayToGenerateGrowing[i + 1][j + 1];

                            energyBefore = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, basePoint);
                            randomValue = generateRandomNumberWithScope(8);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = point1;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 1:
                                    elementToChange = point2;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 2:
                                    elementToChange = point3;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 3:
                                    elementToChange = point4;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 4:
                                    elementToChange = point5;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 5:
                                    elementToChange = point6;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 6:
                                    elementToChange = point7;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 7:
                                    elementToChange = point8;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        }
                    } else if (i === numberOfRowsGrowing - 1) {
                        if (j === 0) {
                            let basePoint = arrayToGenerateGrowing[i][j];
                            let point1 = arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1];
                            let point2 = arrayToGenerateGrowing[i - 1][j];
                            let point3 = arrayToGenerateGrowing[i - 1][j + 1];
                            let point4 = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                            let point5 = arrayToGenerateGrowing[i][j + 1];
                            let point6 = arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1];
                            let point7 = arrayToGenerateGrowing[0][j];
                            let point8 = arrayToGenerateGrowing[0][j + 1];

                            energyBefore = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, basePoint);
                            randomValue = generateRandomNumberWithScope(8);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = point1;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 1:
                                    elementToChange = point2;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 2:
                                    elementToChange = point3;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 3:
                                    elementToChange = point4;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 4:
                                    elementToChange = point5;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 5:
                                    elementToChange = point6;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 6:
                                    elementToChange = point7;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 7:
                                    elementToChange = point8;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else if (j === numberOfColumnsGrowing - 1) {
                            let basePoint = arrayToGenerateGrowing[i][j];
                            let point1 = arrayToGenerateGrowing[i - 1][j - 1];
                            let point2 = arrayToGenerateGrowing[i - 1][j];
                            let point3 = arrayToGenerateGrowing[i - 1][0];
                            let point4 = arrayToGenerateGrowing[i][j - 1];
                            let point5 = arrayToGenerateGrowing[i][0];
                            let point6 = arrayToGenerateGrowing[0][j - 1];
                            let point7 = arrayToGenerateGrowing[0][j];
                            let point8 = arrayToGenerateGrowing[0][0];

                            energyBefore = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, basePoint);
                            randomValue = generateRandomNumberWithScope(8);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = point1;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 1:
                                    elementToChange = point2;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 2:
                                    elementToChange = point3;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 3:
                                    elementToChange = point4;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 4:
                                    elementToChange = point5;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 5:
                                    elementToChange = point6;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 6:
                                    elementToChange = point7;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 7:
                                    elementToChange = point8;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else {
                            let basePoint = arrayToGenerateGrowing[i][j];
                            let point1 = arrayToGenerateGrowing[i - 1][j - 1];
                            let point2 = arrayToGenerateGrowing[i - 1][j];
                            let point3 = arrayToGenerateGrowing[i - 1][j + 1];
                            let point4 = arrayToGenerateGrowing[i][j - 1];
                            let point5 = arrayToGenerateGrowing[i][j + 1];
                            let point6 = arrayToGenerateGrowing[0][j - 1];
                            let point7 = arrayToGenerateGrowing[0][j];
                            let point8 = arrayToGenerateGrowing[0][j + 1];

                            energyBefore = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, basePoint);
                            randomValue = generateRandomNumberWithScope(8);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = point1;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 1:
                                    elementToChange = point2;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 2:
                                    elementToChange = point3;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 3:
                                    elementToChange = point4;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 4:
                                    elementToChange = point5;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 5:
                                    elementToChange = point6;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 6:
                                    elementToChange = point7;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 7:
                                    elementToChange = point8;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        }
                    } else {
                        if (j === 0) {
                            let basePoint = arrayToGenerateGrowing[i][j];
                            let point1 = arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1];
                            let point2 = arrayToGenerateGrowing[i - 1][j];
                            let point3 = arrayToGenerateGrowing[i - 1][j + 1];
                            let point4 = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                            let point5 = arrayToGenerateGrowing[i][j + 1];
                            let point6 = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                            let point7 = arrayToGenerateGrowing[i + 1][j];
                            let point8 = arrayToGenerateGrowing[i + 1][j + 1];

                            energyBefore = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, basePoint);
                            randomValue = generateRandomNumberWithScope(8);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = point1;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 1:
                                    elementToChange = point2;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 2:
                                    elementToChange = point3;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 3:
                                    elementToChange = point4;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 4:
                                    elementToChange = point5;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 5:
                                    elementToChange = point6;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 6:
                                    elementToChange = point7;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 7:
                                    elementToChange = point8;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;

                        } else if (j === numberOfColumnsGrowing - 1) {
                            let basePoint = arrayToGenerateGrowing[i][j];
                            let point1 = arrayToGenerateGrowing[i - 1][j];
                            let point2 = arrayToGenerateGrowing[i - 1][0];
                            let point3 = arrayToGenerateGrowing[i][j - 1];
                            let point4 = arrayToGenerateGrowing[i][0];
                            let point5 = arrayToGenerateGrowing[i - 1][j - 1];
                            let point6 = arrayToGenerateGrowing[i + 1][j - 1];
                            let point7 = arrayToGenerateGrowing[i + 1][j];
                            let point8 = arrayToGenerateGrowing[i + 1][0];

                            energyBefore = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, basePoint);
                            randomValue = generateRandomNumberWithScope(8);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = point1;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 1:
                                    elementToChange = point2;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 2:
                                    elementToChange = point3;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 3:
                                    elementToChange = point4;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 4:
                                    elementToChange = point5;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 5:
                                    elementToChange = point6;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 6:
                                    elementToChange = point7;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 7:
                                    elementToChange = point8;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        } else {
                            let basePoint = arrayToGenerateGrowing[i][j];
                            let point1 = arrayToGenerateGrowing[i - 1][j - 1];
                            let point2 = arrayToGenerateGrowing[i - 1][j];
                            let point3 = arrayToGenerateGrowing[i - 1][j + 1];
                            let point4 = arrayToGenerateGrowing[i][j - 1];
                            let point5 = arrayToGenerateGrowing[i][j + 1];
                            let point6 = arrayToGenerateGrowing[i + 1][j - 1];
                            let point7 = arrayToGenerateGrowing[i + 1][j];
                            let point8 = arrayToGenerateGrowing[i + 1][j + 1];

                            energyBefore = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, basePoint);
                            randomValue = generateRandomNumberWithScope(8);
                            switch (randomValue) {
                                case 0:
                                    elementToChange = point1;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 1:
                                    elementToChange = point2;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 2:
                                    elementToChange = point3;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 3:
                                    elementToChange = point4;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 4:
                                    elementToChange = point5;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 5:
                                    elementToChange = point6;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 6:
                                    elementToChange = point7;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                                case 7:
                                    elementToChange = point8;
                                    energyAfter = countEnergyForPointMoore(point1, point2, point3, point4, point5, point6, point7, point8, elementToChange);
                                    break;
                            }
                            energyDelta = countEnergyGap(energyBefore, energyAfter);
                            energyChecker = checkEnergyGap(energyDelta);
                            if (energyChecker) {
                                arrayToGenerateGrowing[i][j] = elementToChange;
                            } else {
                                if (calculateRandomOdds(energyDelta)) {
                                    arrayToGenerateGrowing[i][j] = elementToChange;
                                }
                            }
                            energyArray[i][j] = energyAfter;
                        }
                    }
                } else {
                    j--;
                }
            }
        }
        console.log(arrayToMonteCarlo);
        console.log(arrayToGenerateGrowing);
        console.log(energyArray);
        drawingForGrowing(arrayToGenerateGrowing);
        drawingForGrowingMonteCarlo(energyArray, 5);
    }
}

function generateRandomNumber() {
    return Math.floor((Math.random() * 40));
}

function generateRandomNumberWithScope(number) {
    return Math.floor((Math.random() * number));
}

const findInMap = (myMapColor, color) => {
    for (let [k, v] of myMapColor) {
        if (v === color) {
            return true;
        }
    }
    return false;
};

function generateRandomColor(numberOfPointsInGrid) {
    let letters = '0123456789ABCDEF';
    let color;
    for (let i = 0; i < numberOfPointsInGrid; i++) {
        color = '#';
        for (let j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        let findColor = findInMap(myMapColor, color);
        if (findColor) {
            --i;
        } else {
            myMapColor.set(mapSize, color);
            mapSize++;
        }
    }
    //console.log(myMapColor);
    return myMapColor;
}

function validationForGrowing() {
    if (document.getElementById("period").checked) {
        periodOrAbsorb = document.getElementById("period").value;
    } else if (document.getElementById("absorb").checked) {
        periodOrAbsorb = document.getElementById("absorb").value;
    } else if (document.getElementById("period").checked && document.getElementById("absorb").checked) {
        alert("Choose a boundary method!");
        return;
    } else {
        alert("Choose a boundary method!");
        return;
    }

    if (document.getElementById("vonNeuman").checked) {
        typeBoundary = document.getElementById("vonNeuman").value;
    } else if (document.getElementById("Moore").checked) {
        typeBoundary = document.getElementById("Moore").value;
    } else if (document.getElementById("penta").checked) {
        typeBoundary = document.getElementById("penta").value;
    } else if (document.getElementById("heksa").checked) {
        typeBoundary = document.getElementById("heksa").value;
    } else {
        alert("Choose a boundary method!");
        return;
    }
    if (typeBoundary === 'heksa') {
        if (document.getElementById("left").checked) {
            typeOfHeksa = document.getElementById("left").value;
        } else if (document.getElementById("right").checked) {
            typeOfHeksa = document.getElementById("right").value;
        } else if (document.getElementById("randomHeksa").checked) {
            typeOfHeksa = document.getElementById("randomHeksa").value;
        } else {
            alert("Choose a boundary method for heksa!!");
            return;
        }
    }


    if (document.getElementById('jednorodne').checked) {
        buttonMethodValueForGrowing = document.getElementById('jednorodne').value;
    } else if (document.getElementById('randomGrowing').checked) {
        buttonMethodValueForGrowing = document.getElementById('randomGrowing').value;
    } else {
        alert("You didn't chose a method!");
        return;
    }


    if (document.getElementById("rowSizeForGrowing").value) {
        numberOfRowsGrowing = parseInt(document.getElementById("rowSizeForGrowing").value);
    } else {
        alert("Write a number!");
        return;
    }

    if (document.getElementById("stepsSizeForGrowing").value) {
        numberOfColumnsGrowing = parseInt(document.getElementById("stepsSizeForGrowing").value);
    } else {
        alert("Write a number!");
        return;
    }

    if (buttonMethodValueForGrowing === 'jednorodne') {
        if (document.getElementById("numberOfColumnsToGrow").value) {
            amountOfPointsInRows = parseInt(document.getElementById("numberOfColumnsToGrow").value);
        } else {
            alert("Not enough points to display!");
        }
        if (document.getElementById("numberOfRowsToGrow").value) {
            amountOfPointsInColumns = parseInt(document.getElementById("numberOfRowsToGrow").value);
        } else {
            alert("Not enough points to display!");
        }
    }
    if (buttonMethodValueForGrowing === 'randomGrowing') {
        if (document.getElementById("amountOfPointToDisplayForGrowing").value) {
            numberOfPointsToRadiusOrRandomGrowing = parseInt(document.getElementById("amountOfPointToDisplayForGrowing").value);
        } else {
            alert("Not enough points to display!");
        }
    }


    if (buttonMethodValueForGrowing === 'radius') {
        if (document.getElementById("amountOfPointToDisplayForGrowing").value) {
            numberOfPointsToRadiusOrRandomGrowing = parseInt(document.getElementById("amountOfPointToDisplayForGrowing").value);
        } else {
            alert("Not enough points to display!");
        }
        if (document.getElementById("radiusValue").value) {
            radiusValueGrowing = parseInt(document.getElementById("radiusValue").value);
        } else {
            alert("Not enough points to display!");
        }
    }
    if (numberOfRowsGrowing < amountOfPointsInRows) {
        alert("Number of points is bigger than size");
        return;
    }
    if (numberOfColumnsGrowing < amountOfPointsInColumns) {
        alert("Number of points is bigger than size");
    }
    if (document.getElementById("monteCarlo").value) {
        monteCarlo = true;
    }

}

function generateMatrixForGrowing() {
    if (periodOrAbsorb === 'period') {
        for (let i = 0; i < numberOfRowsGrowing; i++) {
            arrayToSendForGrowing[i] = new Array(numberOfColumnsGrowing);
        }
        for (let i = 0; i < numberOfRowsGrowing; i++) {
            for (let j = 0; j < numberOfColumnsGrowing; j++) {
                arrayToSendForGrowing[i][j] = 0;
            }
        }
    } else {
        console.log('test');
        numberOfColumnsGrowing += 2;
        numberOfRowsGrowing += 2;
        for (let i = 0; i < numberOfRowsGrowing; i++) {
            arrayToSendForGrowing[i] = new Array(numberOfColumnsGrowing);
        }
        for (let i = 0; i < numberOfRowsGrowing; i++) {
            for (let j = 0; j < numberOfColumnsGrowing; j++) {
                arrayToSendForGrowing[i][j] = 0;
            }
        }
        console.log(arrayToSendForGrowing);
    }
    if (buttonMethodValueForGrowing === 'jednorodne') {
        let size = 1;

        if (numberOfRowsGrowing > numberOfColumnsGrowing) {
            console.log('test');
        }
        console.log('rows: ' + numberOfRowsGrowing);
        console.log('columns: ' + numberOfColumnsGrowing);
        let gapForRowsGrowing = Math.floor((Math.floor((numberOfColumnsGrowing - amountOfPointsInColumns) / amountOfPointsInColumns)) / 2);
        let gapForColumnsGrowing = Math.floor((numberOfColumnsGrowing - amountOfPointsInColumns) / amountOfPointsInColumns);
        console.log('gap columns: ' + gapForColumnsGrowing);
        console.log('gap rows: ' + gapForRowsGrowing);
        console.log(arrayToSendForGrowing);
        for (let j = 0; j < amountOfPointsInRows; j++) {
            gapForRowsGrowing = Math.floor((Math.floor((numberOfColumnsGrowing - amountOfPointsInColumns) / amountOfPointsInColumns)) / 2);
            for (let k = 0; k < amountOfPointsInColumns; k++) {
                arrayToSendForGrowing[parseInt(j + gapForColumnsGrowing)][parseInt(k + gapForRowsGrowing)] = size;
                gapForRowsGrowing += Math.floor((numberOfColumnsGrowing - amountOfPointsInColumns) / (amountOfPointsInColumns));
                size++;
            }
            gapForColumnsGrowing += Math.floor((numberOfRowsGrowing - amountOfPointsInRows) / amountOfPointsInRows);
        }
    }
    if (buttonMethodValueForGrowing === 'randomGrowing') {
        mapSize = myMapColor.size;
        for (let i = 0; i < mapSize; i++) {
            let x = generateRandomNumberWithScope(numberOfRowsGrowing);
            let y = generateRandomNumberWithScope(numberOfColumnsGrowing);
            if (arrayToSendForGrowing[x][y]) {
                i--;
            } else {
                arrayToSendForGrowing[x][y] = i;
            }
        }
    }
    if (buttonMethodValueForGrowing === 'radius') {
        console.log('test');
    }
    console.log(arrayToSendForGrowing);
    return arrayToSendForGrowing;
}

function drawingForGrowing(array, k) {
    for (let i = 0; i < numberOfColumnsGrowing; i++) {
        let element = document.createElement("div");
        element.id = "row" + i + k;
        document.getElementById("chosenMethod").appendChild(element);
        for (let j = 0; j < numberOfRowsGrowing; j++) {
            if ((periodOrAbsorb === 'absorb' && j === 0 || periodOrAbsorb === 'absorb' && j === numberOfRowsGrowing - 1) || (periodOrAbsorb === 'absorb' && i === 0 || periodOrAbsorb === 'absorb' && i === numberOfColumnsGrowing - 1)) {
                let element = document.createElement("div");
                element.classList.add("white");
                element.dataset.columns = "" + i;
                element.dataset.rows = "" + j;
                element.addEventListener("click", fulFill);
                document.getElementById("row" + i + k).appendChild(element);
                continue;
            }
            if (array[j][i] !== 0) {
                let element = document.createElement("div");
                element.style.width = "10px";
                element.style.height = "10px";
                element.style.border = "1px solid #4f4f4f";
                // console.log(array[j][i]);
                // console.log(myMapColor.get(array[j][i]));
                element.style.backgroundColor = myMapColor.get(array[j][i]);
                element.dataset.columns = "" + i;
                element.dataset.rows = "" + j;
                element.addEventListener("click", fulFill);
                document.getElementById("row" + i + k).appendChild(element);

            } else {
                let element = document.createElement("div");
                element.classList.add("green");
                element.dataset.columns = "" + i;
                element.dataset.rows = "" + j;
                element.addEventListener("click", fulFill);
                document.getElementById("row" + i + k).appendChild(element);
            }
        }
    }
    document.getElementById("chosenMethod").appendChild(document.createElement("p"));

}

function fulFill(e) {

    let columns = parseInt(e.target.dataset.columns);
    let rows = parseInt(e.target.dataset.rows);
    if (arrayToGenerateGrowing[rows][columns] === 0) {
        generateRandomColor(1);
        arrayToGenerateGrowing[rows][columns] = mapSize;
        e.target.style.backgroundColor = myMapColor.get(mapSize);
    } else {
        arrayToGenerateGrowing[rows][columns] = 0;
        e.target.classList.add("green");
    }
    console.log(arrayToGenerateGrowing);
}

function matrixIterationsGrowing(arrayToGenerateGrowing) {


    // console.log(arrayToGenerateGrowing);
    let arrayToReturnFromMatrixIterationGrowing = new Array(numberOfRowsGrowing);
    for (let i = 0; i < numberOfRowsGrowing; i++) {
        arrayToReturnFromMatrixIterationGrowing[i] = new Array(numberOfColumnsGrowing);
    }
    for (let i = 0; i < numberOfRowsGrowing; i++) {
        for (let j = 0; j < numberOfColumnsGrowing; j++) {
            arrayToReturnFromMatrixIterationGrowing[i][j] = 0;
        }
    }
    if (periodOrAbsorb === 'period') {
        if (typeBoundary === 'vonNeuman') {
            for (let i = 0; i < numberOfRowsGrowing; i++) {
                for (let j = 0; j < numberOfColumnsGrowing; j++) {
                    if (arrayToGenerateGrowing[i][j] === 0) {
                        let alive = 0;
                        let tmp = arrayToGenerateGrowing[i][j];
                        if (i === 0) {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][i]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][i];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 2]) {
                                    tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 2];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][0]) {
                                    tmp = arrayToGenerateGrowing[i][0];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                    alive += 1;
                                }
                            }
                        } else if (i === numberOfRowsGrowing - 1) {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][0]) {
                                    tmp = arrayToGenerateGrowing[0][0];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][0]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][0];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][j]) {
                                    tmp = arrayToGenerateGrowing[0][j];
                                    alive += 1;
                                }
                            }
                        } else {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][0]) {
                                    tmp = arrayToGenerateGrowing[i][0];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                            }
                        }

                        if (alive) {
                            arrayToReturnFromMatrixIterationGrowing[i][j] = tmp;
                        }

                    } else {
                        arrayToReturnFromMatrixIterationGrowing[i][j] = arrayToGenerateGrowing[i][j];
                    }
                }
            }
        } else if (typeBoundary === 'Moore') {
            for (let i = 0; i < numberOfRowsGrowing; i++) {
                for (let j = 0; j < numberOfColumnsGrowing; j++) {
                    if (arrayToGenerateGrowing[i][j] === 0) {
                        let alive = 0;
                        let tmp = arrayToGenerateGrowing[i][j];
                        if (i === 0) {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][0]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][0];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][0]) {
                                    tmp = arrayToGenerateGrowing[i][0];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][0]) {
                                    tmp = arrayToGenerateGrowing[i + 1][0];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                    alive += 1;
                                }
                            }
                        } else if (i === numberOfRowsGrowing - 1) {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][j]) {
                                    tmp = arrayToGenerateGrowing[0][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][j + 1]) {
                                    tmp = arrayToGenerateGrowing[0][j + 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][0]) {
                                    tmp = arrayToGenerateGrowing[i - 1][0];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][0]) {
                                    tmp = arrayToGenerateGrowing[i][0];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][j - 1]) {
                                    tmp = arrayToGenerateGrowing[0][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][j]) {
                                    tmp = arrayToGenerateGrowing[0][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][0]) {
                                    tmp = arrayToGenerateGrowing[0][0];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][j - 1]) {
                                    tmp = arrayToGenerateGrowing[0][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][j]) {
                                    tmp = arrayToGenerateGrowing[0][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[0][j + 1]) {
                                    tmp = arrayToGenerateGrowing[0][j + 1];
                                    alive += 1;
                                }
                            }
                        } else {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][0]) {
                                    tmp = arrayToGenerateGrowing[i - 1][0];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][0]) {
                                    tmp = arrayToGenerateGrowing[i][0];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][0]) {
                                    tmp = arrayToGenerateGrowing[i + 1][0];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                    alive += 1;
                                }
                            }
                        }

                        if (alive) {
                            arrayToReturnFromMatrixIterationGrowing[i][j] = tmp;
                        }

                    } else {
                        arrayToReturnFromMatrixIterationGrowing[i][j] = arrayToGenerateGrowing[i][j];
                    }
                }
            }
        } else if (typeBoundary === 'penta') {
            for (let i = 0; i < numberOfRowsGrowing; i++) {
                for (let j = 0; j < numberOfColumnsGrowing; j++) {
                    if (arrayToGenerateGrowing[i][j] === 0) {
                        let randomCase = generateRandomNumberWithScope(3);
                        let alive = 0;
                        let tmp = arrayToGenerateGrowing[i][j];
                        switch (randomCase) {
                            case 0:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j - 1]) {
                                            tmp = arrayToGenerateGrowing[0][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j - 1]) {
                                            tmp = arrayToGenerateGrowing[0][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                            case 1:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][0]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][0]) {
                                            tmp = arrayToGenerateGrowing[i + 1][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j + 1]) {
                                            tmp = arrayToGenerateGrowing[0][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][0]) {
                                            tmp = arrayToGenerateGrowing[i - 1][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][0]) {
                                            tmp = arrayToGenerateGrowing[0][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j + 1]) {
                                            tmp = arrayToGenerateGrowing[0][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][0]) {
                                            tmp = arrayToGenerateGrowing[i - 1][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][0]) {
                                            tmp = arrayToGenerateGrowing[i + 1][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                            case 2:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][0]) {
                                            tmp = arrayToGenerateGrowing[i + 1][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j + 1]) {
                                            tmp = arrayToGenerateGrowing[0][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j - 1]) {
                                            tmp = arrayToGenerateGrowing[0][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][0]) {
                                            tmp = arrayToGenerateGrowing[0][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j - 1]) {
                                            tmp = arrayToGenerateGrowing[0][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j + 1]) {
                                            tmp = arrayToGenerateGrowing[0][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][0]) {
                                            tmp = arrayToGenerateGrowing[i + 1][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                            case 3:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][0]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][0]) {
                                            tmp = arrayToGenerateGrowing[i - 1][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][0]) {
                                            tmp = arrayToGenerateGrowing[i - 1][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                        }
                        if (alive) {
                            arrayToReturnFromMatrixIterationGrowing[i][j] = tmp;
                        }

                    } else {
                        arrayToReturnFromMatrixIterationGrowing[i][j] = arrayToGenerateGrowing[i][j];
                    }
                }
            }
        } else if (typeBoundary === 'heksa') {
            for (let i = 0; i < numberOfRowsGrowing; i++) {
                for (let j = 0; j < numberOfColumnsGrowing; j++) {
                    if (arrayToGenerateGrowing[i][j] === 0) {
                        let randomCase;
                        if (typeOfHeksa === 'randomHeksa') {
                            randomCase = generateRandomNumberWithScope(2);
                        } else if (typeOfHeksa === 'right') {
                            randomCase = 0;
                        } else if (typeOfHeksa === 'left') {
                            randomCase = 1;
                        }
                        let alive = 0;
                        let tmp = arrayToGenerateGrowing[i][j];
                        switch (randomCase) {
                            case 0:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][0]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j + 1]) {
                                            tmp = arrayToGenerateGrowing[0][j + 1];
                                            alive += 1
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][0]) {
                                            tmp = arrayToGenerateGrowing[i - 1][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j - 1]) {
                                            tmp = arrayToGenerateGrowing[0][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j - 1]) {
                                            tmp = arrayToGenerateGrowing[0][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][0]) {
                                            tmp = arrayToGenerateGrowing[i - 1][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                            case 1:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][0]) {
                                            tmp = arrayToGenerateGrowing[i + 1][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[0][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][0]) {
                                            tmp = arrayToGenerateGrowing[0][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j]) {
                                            tmp = arrayToGenerateGrowing[0][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[0][j + 1]) {
                                            tmp = arrayToGenerateGrowing[0][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][0]) {
                                            tmp = arrayToGenerateGrowing[i][0];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][0]) {
                                            tmp = arrayToGenerateGrowing[i + 1][0];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                        }
                        if (alive) {
                            arrayToReturnFromMatrixIterationGrowing[i][j] = tmp;
                        }

                    } else {
                        arrayToReturnFromMatrixIterationGrowing[i][j] = arrayToGenerateGrowing[i][j];
                    }
                }
            }
        }
    } else {
        if (typeBoundary === 'vonNeuman') {
            for (let i = 1; i < numberOfRowsGrowing - 1; i++) {
                for (let j = 1; j < numberOfColumnsGrowing - 1; j++) {
                    if (arrayToGenerateGrowing[i][j] === 0) {
                        let alive = 0;
                        let tmp = arrayToGenerateGrowing[i][j];
                        if (i === 0) {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                            }
                        } else if (i === numberOfRowsGrowing - 1) {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                            }
                        } else {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                            }
                        }

                        if (alive) {
                            arrayToReturnFromMatrixIterationGrowing[i][j] = tmp;
                        }
                    } else {
                        arrayToReturnFromMatrixIterationGrowing[i][j] = arrayToGenerateGrowing[i][j];
                    }
                }
            }
        } else if (typeBoundary === 'Moore') {
            for (let i = 0; i < numberOfRowsGrowing; i++) {
                for (let j = 0; j < numberOfColumnsGrowing; j++) {
                    if (arrayToGenerateGrowing[i][j] === 0) {
                        let alive = 0;
                        let tmp = arrayToGenerateGrowing[i][j];
                        if (i === 0) {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                    alive += 1;
                                }
                            }
                        } else if (i === numberOfRowsGrowing - 1) {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }

                            } else {
                                if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                            }
                        } else {
                            if (j === 0) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                    alive += 1;
                                }
                            } else if (j === numberOfColumnsGrowing - 1) {
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                            } else {
                                if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i][j + 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j];
                                    alive += 1;
                                }
                                if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                    tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                    alive += 1;
                                }
                            }
                        }

                        if (alive) {
                            arrayToReturnFromMatrixIterationGrowing[i][j] = tmp;
                        }

                    } else {
                        arrayToReturnFromMatrixIterationGrowing[i][j] = arrayToGenerateGrowing[i][j];
                    }
                }
            }
        } else if (typeBoundary === 'penta') {
            for (let i = 0; i < numberOfRowsGrowing; i++) {
                for (let j = 0; j < numberOfColumnsGrowing; j++) {
                    if (arrayToGenerateGrowing[i][j] === 0) {
                        let randomCase = generateRandomNumberWithScope(3);
                        let alive = 0;
                        let tmp = arrayToGenerateGrowing[i][j];
                        switch (randomCase) {
                            case 0:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                            case 1:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[numberOfRowsGrowing - 1][j]) {
                                            tmp = arrayToGenerateGrowing[numberOfRowsGrowing - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                            case 2:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                            case 3:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                        }
                        if (alive) {
                            arrayToReturnFromMatrixIterationGrowing[i][j] = tmp;
                        }

                    } else {
                        arrayToReturnFromMatrixIterationGrowing[i][j] = arrayToGenerateGrowing[i][j];
                    }
                }
            }
        } else if (typeBoundary === 'heksa') {
            for (let i = 0; i < numberOfRowsGrowing; i++) {
                for (let j = 0; j < numberOfColumnsGrowing; j++) {
                    if (arrayToGenerateGrowing[i][j] === 0) {
                        let randomCase = 0;
                        if (typeOfHeksa === 'randomHeksa') {
                            randomCase = generateRandomNumberWithScope(2);
                        } else if (typeOfHeksa === 'right') {
                            randomCase = 0;
                        } else if (typeOfHeksa === 'left') {
                            randomCase = 1;
                        }
                        let alive = 0;
                        let tmp = arrayToGenerateGrowing[i][j];
                        switch (randomCase) {
                            case 0:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                            case 1:
                                if (i === 0) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else if (i === numberOfRowsGrowing - 1) {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1]) {
                                            tmp = arrayToGenerateGrowing[i][numberOfColumnsGrowing - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                    }
                                } else {
                                    if (j === 0) {
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1
                                        }
                                    } else if (j === numberOfColumnsGrowing - 1) {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                    } else {
                                        if (arrayToGenerateGrowing[i - 1][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i - 1][j]) {
                                            tmp = arrayToGenerateGrowing[i - 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j - 1]) {
                                            tmp = arrayToGenerateGrowing[i][j - 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i][j + 1];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j];
                                            alive += 1;
                                        }
                                        if (arrayToGenerateGrowing[i + 1][j + 1]) {
                                            tmp = arrayToGenerateGrowing[i + 1][j + 1];
                                            alive += 1;
                                        }
                                    }
                                }
                                break;
                        }
                        if (alive) {
                            arrayToReturnFromMatrixIterationGrowing[i][j] = tmp;
                        }

                    } else {
                        arrayToReturnFromMatrixIterationGrowing[i][j] = arrayToGenerateGrowing[i][j];
                    }
                }
            }
        }
    }
    return arrayToReturnFromMatrixIterationGrowing;
}

async function mainMethodGrowing() {
    validationForGrowing();
    let colorMap;
    if (buttonMethodValueForGrowing === 'jednorodne') {
        colorMap = generateRandomColor((amountOfPointsInRows * amountOfPointsInColumns));
    } else if (buttonMethodValueForGrowing === 'randomGrowing') {
        console.log(numberOfPointsToRadiusOrRandomGrowing);
        colorMap = generateRandomColor(numberOfPointsToRadiusOrRandomGrowing);
    } else {
        colorMap = generateRandomColor(numberOfPointsInGrid);
    }
    console.log(colorMap);
    arrayToGenerateGrowing = generateMatrixForGrowing();
    drawingForGrowing(arrayToGenerateGrowing, 0);
    await delay(500);
    for (; ;) {
        let i = 1;
        let checkAndGo = false;
        cleaningEnvironment();
        drawingForGrowing(arrayToGenerateGrowing, i);
        await delay(500);
        arrayToGenerateGrowing = matrixIterationsGrowing(arrayToGenerateGrowing);
        for (let j = 0; j < numberOfRowsGrowing; j++) {
            if (arrayToGenerateGrowing[j].includes(0)) {
                checkAndGo = true;
            }
        }
        if (checkAndGo) {
            i++;
            cleaningEnvironment();
            drawingForGrowing(arrayToGenerateGrowing, i);
            arrayToGenerateGrowing = matrixIterationsGrowing(arrayToGenerateGrowing);
            await delay(500);
        } else {
            cleaningEnvironment();
            drawingForGrowing(arrayToGenerateGrowing, i);
            break;
        }
    }
    console.log(arrayToGenerateGrowing);
    monteCarloCalculation(arrayToGenerateGrowing);
}

document.getElementById("myBtnGrowing").addEventListener("click", mainMethodGrowing);

function density(timeStep){
    let A = 86710969050178.5;
    let B = 9.41268203527779;

    return  (A / B) + (1 - (A / B)) * Math.exp(-B * timeStep);

}

function checkCrystallization(arrayToSendForGrowing) {

}

function distributeRestOfDislocations(roToDistribute, time) {
    while(roToDistribute >= 0.01){
        let part = generateRandomNumberWithScope(10) + 1 / 10; // check if is correct

        let randomPart = part * roToDistribute;
        roToDistribute -= randomPart;

        let i = generateRandomNumberWithScope(numberOfRowsGrowing);
        let j = generateRandomNumberWithScope(numberOfColumnsGrowing);

        if(arrayToGenerateGrowing){
            continue;
        }


        //to do
        if(energyArray !== 0){

        }

    }
}

function distributeDislocations(deltaDensity, time){
    let perEmbryo = deltaDensity / (numberOfRowsGrowing * numberOfColumnsGrowing);
    let rest = 0;
    for (let i = 0; i < numberOfRowsGrowing; i++) {
        for (let j = 0; j < numberOfColumnsGrowing; j++) {
            if(arrayCrystalised[i][j])
                continue;
            arrayDislocation[i][j] += 0.3 * perEmbryo;
            rest += perEmbryo - 0.3 * perEmbryo;

            checkCrystallization(arrayToSendForGrowing);
        }
    }

    distributeRestOfDislocations(rest, time);


}
