const interestCalculator = a => {
  const interestData = [];
  a.forEach(e => {
    let r;
    if (e.principal >= 2500 && e.time > 1 && e.time < 3) {
      r = 3;
    } else if (e.principal >= 2500 && e.time >= 3) {
      r = 4;
    } else if (e.principal < 2500 || e.time <= 3) {
      r = 2;
    } else {
      r = 1;
    }
    const interest = (e.principal * e.time * r) / 100;
    const interestObj = new Map();
    interestObj.set("Prinicipal", e.principal);
    interestObj.set("Time", e.time);
    interestObj.set("Rate", r);
    interestObj.set("Interest", interest);
    interestData.push(interestObj);
  });
  return interestData;
};
console.log(
  interestCalculator([
    {
      principal: 2500,
      time: 1.8
    },
    {
      principal: 3000,
      time: 1
    },
    {
      principal: 2000,
      time: 3
    }
  ])
);
