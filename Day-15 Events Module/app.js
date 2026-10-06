//!====================================================
const EventEmitterm = require("events");
const event = new EventEmitterm();
// console.log(event);

//! 1. Create Event
//event.on("event name", event_listener_function)
event.on("login", (fullname) => {
  console.log(`User  ${fullname} Logged In....`);
});

event.on("logout", (fn, ln) => {
  console.log(`User ${fn} ${ln} Logout....`);
});

//!2. Run Event
//event.emit()

// event.emit("login", "Raj");
// event.emit("logout", "Raj", "Yadav");

//!====================================================

// event.removeAllListeners();
//! event.removeListener();--------------

event.emit("login", "Dinga");
event.emit("logout", "Dinga");

//!Remove Listener===============================
//! event.removeListener("event name", listener function)
//! event.off("event name", listener function)
//! event.removeAllListeners()
