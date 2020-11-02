function add() {
// Simple loop using arguments
let tot =0;
console.log(tot);
for (let i=0; i<arguments.length; i++) { tot +=  arguments[i]; console.log(tot);} return tot;
}
