//! Nodejs Event Loop Executions-----------------------------

console.log("start");

//!nodejs- outer loop - Queue - (Low priority Queue)
setTimeout(() => {
  console.log("Async task-1");
}, 2000);

//nodejs- outer loop - Queue - (Low priority Queue)
setTimeout(() => {
  console.log("Async task-2");
}, 2000);

setImmediate(() => {
  console.log("Immediate check task");
});
//!nodejs inner Loop- Process.nextTick() - NEXT TICK, - (high priority Queue),
process.nextTick(() => {
  console.log("NextTick");
});

//!nodejs inner loop- Promise - MICROTASK(high priority Queue),
Promise.resolve().then(() => console.log("Promise"));

console.log("end");

//!Queue-  FIFO
//! ofLoad,
