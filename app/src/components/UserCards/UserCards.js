import React, { PropTypes } from 'react';
import UserCard from './UserCard';
import UserCardsData from './UserCardsData';
import './UserCards.scss';

const UserCards = () => {
  const data = UserCardsData.users;

    return (
      <div className='wrap-user-cards'>
        <UserCard data={data} />
      </div>
    )
  }

export default UserCards;
