import React, { PropTypes } from 'react';
import UserCardsData from './UserCardsData';
import './UserCards.scss';

const UsersTable = props => {
  let state = UserCardsData;
  const { data } = state;

  // return ()
};

UserCards.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  registrationDate: Proptypes.string,
  status: PropTypes.string,
  id: PropTypes.number
};

export default UserCards;
