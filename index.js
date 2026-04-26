// schedule
// start date, end date,

//

// date.now
// 09:00-10:00
// 11-12
// 09:30-10:30

// [[900, 1000]]
//
//
//
let storage = []; //[[start, end]]

function schedule(start, end) {
  for (let i = 0; i < storage.length; i++) {
    /*
      900
    */
    //                  900      1100             900       1200
    const isStartInBetween = start >= storage[i][0] && start < storage[i][1]; //start is in between
    //                      1800    1100             1800   1200

    const valitionEnd = end >= storage[i][0] && end < storage[i][1];

    // const

    console.log(isStartInBetween, valitionEnd);
    if (isStartInBetween || valitionEnd) {
      return console.log("already exist");
    }
  }

  storage = [...storage, [start, end]];
  console.log(storage);

  // storage
  //
  // add
  //
  return storage;
}

// 09:00-10:00
// 11-12
// 09:30-10:30
schedule(1100, 1200);
schedule(900, 1800);
