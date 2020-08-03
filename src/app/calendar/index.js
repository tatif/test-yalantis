import React, { useState } from 'react';
import { Month } from '../month';
import { MONTHS } from '../utils/listOfMonth';
import { useGetStyles } from '../users/hooks/useGetStyles';
import { useSortUsers } from '../users/hooks/useSortUsers';
import { UsersList } from '../users';

export const Calendar = () => {

  const { getColorsByMonth } = useGetStyles();
  const { getUsersByMonth } = useSortUsers();
  const [users, setUsers] = useState([]);

  const handleClick = (event) => {
    event.persist();
    setUsers(() => getUsersByMonth(event.target.getAttribute('data-index')))
  };

  const calendar = MONTHS.map((month, index) =>
    <Month
      key={index}
      name={month}
      fill={getColorsByMonth()[index]}
      onClick={handleClick}
      index={index}
      content={<UsersList list={users} />}
    />
  );

  return (
    <>
      <h1>Calendar</h1>
      {calendar}
    </>
  )
};