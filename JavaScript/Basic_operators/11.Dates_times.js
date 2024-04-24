// 1
const date = new Date(`April 16, 2024 14:03:00`);
console.log(date);
// 2
let timeBlahBlah = new Date("April 30/2024");
console.log("2024");
//  3
const d = new Date("2024 March 17");
let month = d.getMonth();
console.log(month);
// 4
const f = new Date("2024 May 15");
let day = f.getDate();
console.log(day);
//  5
const g = new Date("2024 May 15");
let sdas = g.getDay();
console.log(sdas);
//  6
let w = new Date("2024 May 15 1:28:50 PM");
let h = w.getHours();
let m = w.getMinutes();
let s = w.getSeconds();
console.log(`hours:${h},Minutes:${m},Seconds:${s}`);
//  7
let l = new Date(2024, 3 + 1, 0);
let o = l.getDate();
console.log(o);
