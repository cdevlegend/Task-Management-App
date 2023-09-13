export const getTaskValue = (id: number, count: number, time: number) => {
  switch (id) {
    case 1:
      return count;
    case 2:
      return Number((time / 8).toFixed(2));
    default:
      return time;
  }
};
