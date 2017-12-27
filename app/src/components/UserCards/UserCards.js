import React, { PropTypes } from 'react';
import UserCard from './UserCard';
import UserCardsData from './UserCardsData';
import './UserCards.scss';

const UserCards = () => {
  const users = UserCardsData.users;

    return (
      <div className='wrap-user-cards'>
        <UserCard data={users} />
      </div>
    )
  }

export default UserCards;
