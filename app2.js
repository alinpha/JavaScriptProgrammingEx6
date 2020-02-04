let instructors = new Array('Carter', 'Cusack', 'Murray', 'Ryan', 'Pieroni');
console.log(instructors[2]);

console.log('----------------');


instructors[3] = 'Burchill';
console.log(instructors[3]);

console.log('----------------');

instructors.shift();
for(let i=0; i<instructors.length; i++) {
    console.log(instructors[i]);
}

console.log('----------------');

instructors.unshift('Murphy');
instructors.push('Croney');
instructors.sort();
for(let i in instructors) {
    console.log(instructors[i]);
}
console.log('----------------');

let instructorsCopy = instructors.slice(2,5);
instructorsCopy.pop();
instructorsCopy.forEach(x => {
    console.log(x);
});
console.log('----------------');