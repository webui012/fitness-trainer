import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import UserCardsData from './UserCardsData';
import './UserCards.scss';


const UserCard = props => {

  const rows = UserCardsData.rows[0];
  const users = props.data;

  return (
    <div className='user-table-main'>
      <Table className='user-table'>
        <thead className='user-table-head'>
          <tr className='first-row'>
            <th className='first-row-firstname'>{rows.firstname}</th>
            <th className='first-row-lastname'>{rows.lastname}</th>
            <th className='first-row-registration-date'>{rows.date}</th>
            <th className='first-row-status'>{rows.status}</th>
          </tr>
        </thead>

        {users.map((user, i) => {
          return (
            <tbody key={i}>
              <tr className='users-row'>
                <th className='user-firstname'>{user.firstname}</th>
                <th className='user-lastname'>{user.lastname}</th>
                <th className='user-registration-date'>{user.registrationDate}</th>
                <th className='user-status'>{user.status}</th>
              </tr>
            </tbody>
          )
        })
        }
      </Table>
    </div>
    )
  }

export default UserCard;
