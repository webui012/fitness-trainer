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
        <Map data={mapData} />
        <h1>CONTACTS</h1>
        {fields.map( item =>
          <ContactsField
              key={item.id}
              title={item.Title}
              data={item.data}
          />)
        }
      </div>)
  }
}

Contacts.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string,
  data: PropTypes.string
};

export default Contacts
