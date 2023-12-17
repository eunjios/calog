export const formattedDate = (date: string) => {
  const year = date.substring(0, 4);
  const month = date.substring(4, 6);
  const day = date.substring(6, 8);

  return `${year}년 ${month}월 ${day}일`;
};

export const truncateText = (text: string, maxLength: number) => {
  return `${text.substring(0, maxLength)}...`;
};
