export const percentageChange = (initial: number, final: number) => {
  return (((initial - final) / final) * 100).toFixed(2);
};
