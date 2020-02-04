/**
 * Title: JS Arrays
 * Author: Aline Vetrov
 * Date: Feb 4, 2020
 */

 let cars = ['wrangler', 'forester', 'defender', 'crossover'];
 let makes = new Array('jeep', 'subaru', 'land rover', 'mazada');

 let add = 'y';
let myNumbers = [];

while(add === 'y') {
    let number = prompt('add a number to the array');

    if (!isNaN(number)) {
        myNumbers.push(number);
    }

    add = prompt('continue adding numbers? y/n');
}