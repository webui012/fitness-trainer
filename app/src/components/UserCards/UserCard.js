import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import './UserCards.scss';


const UserCard = props => {

  const users = props.data;

  return (
    <div className='user-table-main'>
      <Table className='user-table'>
        <thead className='user-table-head'>
          <tr className='first-row'>
            <th className='first-row-firstname'>Имя</th>
            <th className='first-row-lastname'>Фамилия</th>
            <th className='first-row-registration-date'>Дата регистрации</th>
            <th className='first-row-status'>Статус</th>
          </tr>
        </thead>
        {users.map((user, i) => {
        return (
          <tbody key={i}>
            <tr
                Link to={user.url}
                className='users-row'>
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
