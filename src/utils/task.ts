export const getTaskValue = (id: number, count: number, time: number) => {
  switch (id) {
    case 1:
      return count;
    case 2:
      return Math.ceil(time / 8);
    default:
      return time;
  }
};
