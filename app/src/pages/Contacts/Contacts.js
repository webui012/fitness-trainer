import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './Contacts.scss';
import dataContacts from './contactsData'
import {
  Map,
  ContactsField
} from 'Components';


class Contacts extends Component{
  constructor(props) {
    super(props)
    this.dataContacts = dataContacts
  }

  render() {
    const fields = this.dataContacts.fields
    const mapData = this.dataContacts.mapData

    return (
      <div className='contacts'>
        <p className='contactsTitle'>Контактная информация</p>
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
}


export default Contacts
