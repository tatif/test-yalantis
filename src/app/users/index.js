import React from 'react';
import PropTypes from 'prop-types';

export const UsersList = ({ list }) => {
  const userList = list.map(({ id, firstName, lastName }) => (
    <p key={id}>
      {firstName} {lastName}
    </p>
  ));

  return (
    <>
      {userList}
    </>
  )
};

UsersList.propTypes = {
  list: PropTypes.array
};