// The main goal is to have a function to simulate a appointment system
// I failed the last attempt on a live coding, :(
//
// my initial proccess was to try to figure out how to handle date,
// I wrongly thinked as Date and how would I treat this. so the actual problem was not related to days, only hours
// so the workflow should use a 24 hours HOUR:MINUTE and then converting it to minutes entirely.
//
// how treat date, hours as number and calculate what I need -> getMinutes
//
// rules:
// each appointment: AP will be start, end
// Appointments -> [start, end][]
//
// for creating a new AP
// we should verify what we already have as appointments.
// we can do a loop for each appointment and checking if:
//
// 1 - does it start in between another AP?
// A----B
//   A----B
// start > e.end
//
// 2 - does the end is between another AP
//    A----B
// A----B
// end < e.start
// 3 - does another AP is inside this AP (like a reverse check for each?)
//  A----B
//A--------B
// start > e.start &&
//
// start > e.end || end < e.start ||
//
//         A----B
//                A----B start > e.end
//A----B end < e.start
//A-------------------B covered? yes because start or is bigger than E or end is smaller then A, never overllaping
//
//
// would cover edge cases, if pass, we add new AP to AP_STORAGE.
// in the live coding I was thinking on how to prevent, instead of just checking the case where is valid.
//
//

const getMinutes = (hour) => {
  const [hours, minutes] = hour.split(":");
  return Number(hours) * 60 + Number(minutes);
};

function scheduler() {
  //closure here is for keeping storage protected and inside scheduler, nothing can change outside the function validation.
  const storage = [];

  return function (start, end) {
    const startMinutes = getMinutes(start);
    const endMinutes = getMinutes(end);

    for (let i = 0; i < storage.length; i++) {
      const currentStart = getMinutes(storage[i][0]);
      const currentEnd = getMinutes(storage[i][1]);

      const validation = startMinutes > currentEnd || endMinutes < currentStart;
      if (!validation) {
        return `${start} to ${end} has conflict`;
      }
    }

    storage.push([start, end]);
    return storage;
  };
}

const schedule = scheduler();

console.log(schedule("09:00", "10:00"));
console.log(schedule("11:00", "12:00"));
console.log(schedule("09:00", "18:00"));
console.log(schedule("09:30", "10:30"));
