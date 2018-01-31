import React from 'react';
import './UserCards.scss';
import { Header, Image, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserCards = props => {
  const userData = props.data;
  console.log(userData)
  return (
    <div className='user-cards-wrapper'>
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Пользователь</Table.HeaderCell>
            <Table.HeaderCell>Рост (см)</Table.HeaderCell>
            <Table.HeaderCell>Вес (кг)</Table.HeaderCell>
            <Table.HeaderCell>Противопоказания</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {userData.map((u, i) =>
            <Table.Row key={i}>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={u.userAvatar} rounded size='mini' />
                  <Header.Content>
                    <Link to='/user:id1'>{`${u.userPesonalData.name} ${u.userPesonalData.surname}`}</Link>
                    <Header.Subheader>{u.userPesonalData.birth}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell textAlign='center'>{u.userPesonalData.height}</Table.Cell>
              <Table.Cell textAlign='center'>{u.userPesonalData.weight}</Table.Cell>
              <Table.Cell textAlign='center'>{u.userContraindications}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default UserCards;
