const dateFormat = (date: string) => {
  const newDate = new Date(date);

  return {
    year: newDate.getFullYear(),
    month: newDate.toLocaleDateString('en-US', { month: 'long' }),
  };
};

export default dateFormat;
