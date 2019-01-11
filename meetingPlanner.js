function meetingPlanner(slotsA, slotsB, dur) {
  let shorter = slotsA.length <= slotsB.length ? slotsA : slotsB;
  let longer = slotsA.length > slotsB.length ? slotsA : slotsB;
  for (let i = 0; i < shorter.length; i++) {
    for (let j = 0; j < longer.length; j++) {
      let startA = shorter[i][0];
      let endA = shorter[i][1];
      let startB = longer[j][0];
      let endB = longer[j][1];
      if (startA < endB || endA > startB) {
        let earliestStart = Math.max(startA, startB);
        let latestEnd = Math.min(endA, endB);
        if (latestEnd - earliestStart >= dur) {
          return [earliestStart, earliestStart + dur];
        }
      }
    }
  }
  return [];
}
