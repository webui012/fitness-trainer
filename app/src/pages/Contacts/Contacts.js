import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './Contacts.scss';
import dataContacts from './contactsData'
import {
  Map,
  ContactsField
} from 'Components';

const fields = dataContacts.fields
const mapData = dataContacts.mapData

const Contacts = () => {
  return (
    <div className='contacts'>
      <p className='contacts-title'>Контактная информация</p>
      <div className='wrap-contactsInfo'>
        <div className='wrap-contactsFields '>
          {fields.map( item =>
            <ContactsField
                key={item.id}
                title={item.Title}
                data={item.data}
            />)}
        </div>
        <Map data={mapData} />
      </div>
    </div>)
}

export default Contacts