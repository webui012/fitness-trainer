import React,{ Component } from 'react';
/*import ContactsField from '../../components/ContactsField/ContactsField';
import Map from '../../components/Map/Map';*/
import './Contacts.scss';
import {
  Map,
  ContactsField
} from 'Components';

const dataContacts = [
  {
    Title: 'ADRESS',
    data: '123, Rev Avenu, Hawai'
  },

  {
    Title: 'PHONE',
    data: '+81 2345854646'
  },

  {
    Title: 'EMAIL',
    data: 'email@email.com'
  },

  {
    Title: 'STORE',
    data: '123, Rev Avenu, Hawai'
  }
]

class Contacts extends Conponent{
  constructor(props) {
    super(props)
    this.dataContacts = dataContacts
  }

  render() {

    return (
      <div className='contacts'>
        <Map />
        <h1>CONTACTS</h1>
        {this.dataContacts.map( item, i =>
          <ContactsField
              key={i}
              title={this.dataContacts.Title}
              data={this.dataContacts.data}
          />)
        }
      </div>)
  }
}

export default Contacts
