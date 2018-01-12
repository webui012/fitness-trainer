import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { rows, users } from './UserCardsData';
import './UserCards.scss';


const UserCards = props => {

  return (
    <div className='wrap-user-cards'>
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

          {users.map((user, id) => {
            return (
              <tbody key={user.id}>
                <tr className='users-row'>
                  <td className='user-firstname'>{user.firstname}</td>
                  <td className='user-lastname'>{user.lastname}</td>
                  <td className='user-registration-date'>
                    {user.registrationDate}</td>
                  <td className='user-status'>{user.status}</td>
                </tr>
              </tbody>
            )
          })
          }
        </Table>
      </div>
    </div>
      )
      };

UserCards.PropTypes = {
  firstaname: PropTypes.string,
  lastname: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string
};

export default UserCards;
