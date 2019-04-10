var funcc = require('./exportFun');
var ex = require('./extra');

//const ss = new Set()

// funcc.print();
// ex();
// funcc.print();
// ex();
// funcc.print();
var s1 = new funcc.Student("Mayank B the great",6);
var s2 = new funcc.Student("Ravi",13);
//console.log(s1);
console.log(s1.name + " - real age : sweet " + s1.increaseAge());
console.log(s2.name + " - real age : " + s2.increaseAge());