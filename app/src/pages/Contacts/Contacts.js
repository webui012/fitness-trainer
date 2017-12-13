import React,{ Component } from 'react';
import PropTypes from 'prop-types';
/*import ContactsField from '../../components/ContactsField/ContactsField';
import Map from '../../components/Map/Map';*/
import './Contacts.scss';
import dataContacts from './contactsFieldsData'
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

    return (
      <div className='contacts'>
        <Map />
        <h1>CONTACTS</h1>
        {this.dataContacts.map( item =>
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
