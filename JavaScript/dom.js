'use strict'

let workHours = 14;

function getRandomInt(min, max) {  // function to generate random number of customers
    min = Math.ceil(min);
    max = Math.floor(max);  //  Global function 
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// ---------------------------------------------------------------- //
/*
First Point Of Objects Area  
*/
// ---------------------------------------------------------------- //


// let seattle = {  // Object for Seattle

//     minHourCustomers: 23,  //  minimum number of customers
//     maxHourCustomers: 65,  // maximum number of customers
//     avgHourCookies: 6.3,  // average cookies per hour

//     numberOfCookies: [],  // number of cookies => dynamic

//     numOfCustomerHour: [],  // number of customers => random

//     addingCustomers: function () {  // function to call and generate generate random number of customers
//         for (let i = 0; i < workHours; i++) {
//             let num = getRandomInt(this.minHourCustomers, this.maxHourCustomers);
//             this.numOfCustomerHour[i] = num;
//         }
//     },

//     addingCookies: function () {  // function to calculate numbers of cookies
//         for (let i = 0; i < workHours; i++) {
//             this.numberOfCookies[i] = this.numOfCustomerHour[i] * this.avgHourCookies;
//         }
//     }

// }  //  End of Seattle object

// seattle.addingCustomers();  // calling functions  to add customers
// seattle.addingCookies();    // calling functions to add cookies


// // for(let i=0;i<workHours;i++){  //  for loop => to test Seattle customers function
// //     console.log(seattle.numOfCustomerHour[i]);  
// // }  //  for loop => to test Seattle customers function

// /*
// -------------line between objects-----------------
// */

// let Tokyo = {  // Object for Tokyo

//     minHourCustomers: 3,  //  minimum number of customers
//     maxHourCustomers: 24,  // maximum number of customers
//     avgHourCookies: 1.2,  // average cookies per hour

//     numberOfCookies: [],  // number of cookies => dynamic

//     numOfCustomerHour: [],  // number of customers => random

//     addingCustomers: function () {  // function to call and generate generate random number of customers
//         for (let i = 0; i < workHours; i++) {
//             let num = getRandomInt(this.minHourCustomers, this.maxHourCustomers);
//             this.numOfCustomerHour[i] = num;
//         }
//     },

//     addingCookies: function () {  // function to calculate numbers of cookies
//         for (let i = 0; i < workHours; i++) {
//             this.numberOfCookies[i] = this.numOfCustomerHour[i] * this.avgHourCookies;
//         }
//     }

// }  //  End of Tokyo object

// Tokyo.addingCustomers();  // calling functions  to add customers
// Tokyo.addingCookies();    // calling functions to add cookies


// // for(let i=0;i<workHours;i++){  //  for loop => to test Tokyo customers function
// //     console.log(Tokyo.numOfCustomerHour[i]);  
// // }  //  for loop => to test Tokyo customers function

// /*
// -------------line between objects-----------------
// */

// let Dubai = {  // Object for Dubai

//     minHourCustomers: 11,  //  minimum number of customers
//     maxHourCustomers: 38,  // maximum number of customers
//     avgHourCookies: 3.7,  // average cookies per hour

//     numberOfCookies: [],  // number of cookies => dynamic

//     numOfCustomerHour: [],  // number of customers => random

//     addingCustomers: function () {  // function to call and generate generate random number of customers
//         for (let i = 0; i < workHours; i++) {
//             let num = getRandomInt(this.minHourCustomers, this.maxHourCustomers);
//             this.numOfCustomerHour[i] = num;
//         }
//     },

//     addingCookies: function () {  // function to calculate numbers of cookies
//         for (let i = 0; i < workHours; i++) {
//             this.numberOfCookies[i] = this.numOfCustomerHour[i] * this.avgHourCookies;
//         }
//     }

// }  //  End of Dubai object

// Dubai.addingCustomers();  // calling functions  to add customers
// Dubai.addingCookies();    // calling functions to add cookies


// // for(let i=0;i<workHours;i++){  //  for loop => to test Dubai customers function
// //     console.log(Dubai.numOfCustomerHour[i]);  
// // }  //  for loop => to test Dubai customers function

// /*
// -------------line between objects-----------------
// */


// let Paris = {  // Object for Paris

//     minHourCustomers: 20,  //  minimum number of customers
//     maxHourCustomers: 38,  // maximum number of customers
//     avgHourCookies: 2.3,  // average cookies per hour

//     numberOfCookies: [],  // number of cookies => dynamic

//     numOfCustomerHour: [],  // number of customers => random

//     addingCustomers: function () {  // function to call and generate generate random number of customers
//         for (let i = 0; i < workHours; i++) {
//             let num = getRandomInt(this.minHourCustomers, this.maxHourCustomers);
//             this.numOfCustomerHour[i] = num;
//         }
//     },

//     addingCookies: function () {  // function to calculate numbers of cookies
//         for (let i = 0; i < workHours; i++) {
//             this.numberOfCookies[i] = this.numOfCustomerHour[i] * this.avgHourCookies;
//         }
//     }

// }  //  End of Paris object

// Paris.addingCustomers();  // calling functions  to add customers
// Paris.addingCookies();    // calling functions to add cookies


// // for(let i=0;i<workHours;i++){  //  for loop => to test Paris customers function
// //     console.log(Paris.numOfCustomerHour[i]);  
// // }  //  for loop => to test Paris customers function

// /*
// -------------line between objects-----------------
// */


// let Lima = {  // Object for Lima

//     minHourCustomers: 2,  //  minimum number of customers
//     maxHourCustomers: 16,  // maximum number of customers
//     avgHourCookies: 4.6,  // average cookies per hour

//     numberOfCookies: [],  // number of cookies => dynamic

//     numOfCustomerHour: [],  // number of customers => random

//     addingCustomers: function () {  // function to call and generate generate random number of customers
//         for (let i = 0; i < workHours; i++) {
//             let num = getRandomInt(this.minHourCustomers, this.maxHourCustomers);
//             this.numOfCustomerHour[i] = num;
//         }
//     },

//     addingCookies: function () {  // function to calculate numbers of cookies
//         for (let i = 0; i < workHours; i++) {
//             this.numberOfCookies[i] = this.numOfCustomerHour[i] * this.avgHourCookies;
//         }
//     }

// }  //  End of Lima object

// Lima.addingCustomers();  // calling functions  to add customers
// Lima.addingCookies();    // calling functions to add cookies


// // for(let i=0;i<workHours;i++){  //  for loop => to test Lima customers function
// //     console.log(Lima.numOfCustomerHour[i]);  
// // }  //  for loop => to test Lima customers function


// Objects by Constructure

let objectsArray = [];
// constructure function 
function Cookies(minHourCustomers, maxHourCustomers, avgHourCookies, name) {
    this.minHourCustomers = minHourCustomers;  //  minimum number of customers
    this.maxHourCustomers = maxHourCustomers;  // maximum number of customers
    this.avgHourCookies = avgHourCookies; // average cookies per customer

    this.name = name;

    this.numberOfCookies = [];  // number of cookies => dynamic

    this.numOfCustomerHour = [];  // number of customers => random

    objectsArray.push(this);
}

// generate bjects
let seattle = new Cookies(23, 65, 6.3, 'seattle');
let Tokyo = new Cookies(3, 24, 1.2, 'Tokyo');
let Dubai = new Cookies(11, 38, 3.7, 'Dubai');
let Paris = new Cookies(20, 38, 2.3, 'Paris');
let Lima = new Cookies(2, 16, 4.6, 'Lima');

// generate functions 
Cookies.prototype.addingCustomers = function () {
    for (let i = 0; i < workHours; i++) {
        let num = getRandomInt(this.minHourCustomers, this.maxHourCustomers);
        this.numOfCustomerHour[i] = num;
    }
}

Cookies.prototype.addingCookies = function () {
    for (let i = 0; i < workHours; i++) {
        this.numberOfCookies[i] = this.numOfCustomerHour[i] * this.avgHourCookies;
    }
}

seattle.addingCustomers();
seattle.addingCookies();

Tokyo.addingCustomers();
Tokyo.addingCookies();

Dubai.addingCustomers();
Dubai.addingCookies();

Paris.addingCustomers();
Paris.addingCookies();

Lima.addingCustomers();
Lima.addingCookies();

// ---------------------------------------------------------------- //
/*
Last Point Of Objects Area  
*/
// ---------------------------------------------------------------- //


// Generate list inside HTML page

// connect variable with div Id
// let divEl = document.getElementById('salesData');

// generate and connect ul container
// let ulEl = document.createElement('ul');
// divEl.appendChild(ulEl);

// // for loop => to create list of itmes
// for (let t = 0; t < 5; t++) {
//     let pEl = document.createElement('p');
//     ulEl.appendChild(pEl);
//     pEl.id = 'areaId';

//     let sum = 0; // variable for total amount 

//     switch (t) {
//         case 0:  // Seattle

//             pEl.textContent = 'seattle'
//             break;

//         case 1:  // Tokyo
//             pEl.textContent = 'Tokyo'

//             break;

//         case 2:  //  Dubai
//             pEl.textContent = 'Dubai'
//             break;

//         case 3:  //  Paris
//             pEl.textContent = 'Paris'
//             break;

//         case 4:  //  Lima
//             pEl.textContent = 'Lima'
//             break;
//     }
//     // for loop => to inherit numbers
//     for (let i = 0; i < workHours; i++) {

//         let liEl = document.createElement('li');
//         liEl.id = "itemslist";
//         ulEl.appendChild(liEl);

//         switch (t) {
//             case 0:  // Seattle
//                 liEl.textContent = `=> ${i + 6} Oclock : ${parseInt(seattle.numberOfCookies[i])} cookies`;
//                 sum = sum + parseInt(seattle.numberOfCookies[i]);
//                 break;

//             case 1:  // Tokyo
//                 liEl.textContent = `=> ${i + 6} Oclock : ${parseInt(Tokyo.numberOfCookies[i])} cookies`;
//                 sum = sum + parseInt(Tokyo.numberOfCookies[i]);
//                 break;

//             case 2:  //  Dubai
//                 liEl.textContent = `=> ${i + 6} Oclock : ${parseInt(Dubai.numberOfCookies[i])} cookies`;
//                 sum = sum + parseInt(Dubai.numberOfCookies[i]);
//                 break;

//             case 3:  //  Paris
//                 liEl.textContent = `=> ${i + 6} Oclock : ${parseInt(Paris.numberOfCookies[i])} cookies`;
//                 sum = sum + parseInt(Paris.numberOfCookies[i]);
//                 break;

//             case 4:  //  Lima
//                 liEl.textContent = `=> ${i + 6} Oclock : ${parseInt(Lima.numberOfCookies[i])} cookies`;
//                 sum = sum + parseInt(Lima.numberOfCookies[i]);
//                 break;
//         } // finish switch

//     }  // finish inner loop

//     // show Total
//     let liEl = document.createElement('li');
//     liEl.id = "total";
//     ulEl.appendChild(liEl);
//     liEl.textContent = `  => Total : ${sum} cookies`;

// } // finish outer loop


/*
------------  End of Lab 06  ------------
*/

/*
------------  Start Point of Lab 07  ------------
*/

// add places from form


let divEl = document.getElementById('salesData');
let tableEl = document.createElement('table');

tableEl.id = 'tableId';
divEl.appendChild(tableEl);

let headerEl = document.createElement('tr');
tableEl.appendChild(headerEl);
// header elements

for (let i = 0; i < 16; i++) {  // loop => To create header elements of table
    let headCell = document.createElement('th');
    headerEl.appendChild(headCell);
    headCell.id = 'headID';

    if (i == 0) {
        headCell.textContent = 'Time';
    } else if (i < 15) {
        headCell.textContent = `${i + 5} Oclock`;
    } else {
        headCell.textContent = 'Total';
    }
}

//  loops => to add total feild for each place

function totalEachPlace() {
    for (let index = 0; index < objectsArray.length; index++) {
        let sum = 0;
        for (let num = 0; num < workHours; num++) {
            sum = sum + objectsArray[index].numberOfCookies[num];
        }
        objectsArray[index].numberOfCookies.push(sum);
    }
}

totalEachPlace();

// loops => to create array of total cookies per hour

let totalHourCookies = [];
function totalPerHour() {
    for (let row = 0; row <= workHours; row++) {
        let total = 0;
        for (let index = 0; index < objectsArray.length; index++) {
            total = total + objectsArray[index].numberOfCookies[row];
        }
        totalHourCookies.push(total);
    }
}

totalPerHour()

//  loops => to enter table values
let row1 = objectsArray.length;
for (let row = 0; row <= row1; row++) {

    let rowEl = document.createElement('tr');
    tableEl.appendChild(rowEl);

    for (let cell = 0; cell < 16; cell++) {
        let innerCell = document.createElement('td');
        rowEl.appendChild(innerCell);
        innerCell.id = 'innerID';

        if ((cell == 0) && (row !== row1)) {
            innerCell.id = 'firstColomn';
            innerCell.textContent = objectsArray[row].name;

        } else if (row !== row1) {

            innerCell.textContent = parseInt(objectsArray[row].numberOfCookies[cell - 1]);
            innerCell.id = 'totalCell';
        } else {
            innerCell.id = 'lastRow';
            if (cell == 0)
                innerCell.textContent = 'Total';
            else {
                innerCell.textContent = parseInt(totalHourCookies[cell - 1]);
            }
        }

    }

}






let newStore = document.getElementById('newStore');

newStore.addEventListener("submit", newPlaceFunction);

function newPlaceFunction(event) {

    event.preventDefault();

    let newArea = new Cookies(3, 24, 1.2, 'Tokyo');
    newArea.addingCustomers();
    newArea.addingCookies();

    let rowEl2 = document.createElement('tr');
    tableEl.appendChild(rowEl2);

    for (let count = 0; count < 2; count++) {

        let totalSum = 0;
        for (let cell = 0; cell < 16; cell++) {
            if (count == 0) {
                let innerCell2 = document.createElement('td');
                rowEl2.appendChild(innerCell2);
                innerCell2.id = 'innerID';

                if (cell == 0) {
                    innerCell2.id = 'firstColomn';
                    innerCell2.textContent = newArea.name;
                } else if (cell < 15) {
                    // totalSum = totalSum + parseInt(newArea.numberOfCookies[cell - 1])
                    innerCell2.textContent = parseInt(newArea.numberOfCookies[cell - 1]);
                    innerCell2.id = 'totalCell';
                    
                } else {
                    innerCell.textContent = parseInt(newArea.numberOfCookies[cell]);
                }

            } else {
                
            }
            totalEachPlace();
            totalPerHour()

        }
    }

}


