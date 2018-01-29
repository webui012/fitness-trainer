import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import UserCardsData from './UserCardsData';
import './UserCards.scss';
import { Header, Image, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class UserCards extends Component {
  render() {
    console.log(this.props.data)
    const users = this.props.data.users;
    return (
      <div className='user-cards-wrapper'>
        <Table basic='very' celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Пользователь</Table.HeaderCell>
              <Table.HeaderCell>Дата регистрации</Table.HeaderCell>
              <Table.HeaderCell>Вес, кг</Table.HeaderCell>
              <Table.HeaderCell>Статус</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.map((u, i) =>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src={u.img} rounded size='mini' />
                    <Header.Content>
                      <Link to='/user:id1' key='i'>{`${u.firstname} ${u.lastname}`}</Link>
                      <Header.Subheader>{u.sport}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell textAlign='center'>{u.registrationDate}</Table.Cell>
                <Table.Cell textAlign='center'>{u.weight}</Table.Cell>
                <Table.Cell textAlign='center'>{u.status}</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
export default UserCards;
