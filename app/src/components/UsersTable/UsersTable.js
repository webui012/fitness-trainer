import React, { PropTypes } from 'react';
import ReactTable from 'react-table';
import UsersTableData from './UsersTableData';
// import './UsersTable.scss';
import 'react-table/react-table.css';

const UsersTable = props => {
  let state = UsersTableData;
  const { data } = state;

  return (
    <div className='user-table'>
      <ReactTable
        className='user-table-main'
        data={data}
        columns={[
          {
            Header: 'Пользователь',
            columns: [
            {
              Header: 'Имя',
              id: 'name'
            },
            {
              Header: 'Фамилия',
              id: 'lastname'
            },
          ]},
          {
            Header: 'Информация о пользователе',
            columns: [
            {
              Header: 'Возраст',
              id: 'age'
            },
            {
              Header: 'Дата регистрации',
              id: 'registration-date'
            },
            {
              Header: 'Статус',
              id: 'status'
            }
            ]
          }
        ]}
      />
    </div>
  )
};

UsersTable.propTypes = {
  header: PropTypes.string,
  name: PropTypes.string,
  lastName: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.number
};

export default UsersTable;
