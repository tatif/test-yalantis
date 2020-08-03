import { useSortUsers } from './useSortUsers';


export const useGetStyles = () => {
  const { sortedUsersByMonth } = useSortUsers();

  const getColors = (count) => {
    switch (true) {
      case count < 3:
        return 'grey';
      case count < 7:
        return 'blue';
      case count < 11:
        return 'green';
      default:
        return 'red';
    }
  };

  const getColorsByMonth = () => {
    const sytyleList = [];

    for (let key in sortedUsersByMonth) {
      let value = sortedUsersByMonth[key];
      sytyleList.push(getColors(value))
    }
    return sytyleList;
  };

  return { getColorsByMonth }
};
