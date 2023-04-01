export const dateNotFuture = (value: string) => {
  const selectedDate = new Date(value);
  const currentDate = new Date();
  if (selectedDate > currentDate) {
    return 'Date should not be in the future';
  }
  return true;
};
