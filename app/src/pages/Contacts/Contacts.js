import React,{ Component } from 'react';
/*import ContactsField from '../../components/ContactsField/ContactsField';
import Map from '../../components/Map/Map';*/
import './Contacts.scss';
import {
  Map,
  ContactsField
} from 'Components';

const dataContacts = {
  adressTitle: 'ADRESS',
  adress: '123, Rev Avenu, Hawai',

  phoneTitle: 'PHONE',
  phone: '+81 2345854646',

  emailTitle: 'EMAIL',
  email: 'email@email.com',

  storeTitle: 'STORE',
  store: '123, Rev Avenu, Hawai'
}

const Contacts = () =>
  <div className='contacts'>
    <Map />
    <h1>CONTACTS</h1>
    <ContactsField
        title={dataContacts.adressTitle}
        data={dataContacts.adress}
    />
    <ContactsField
        title={dataContacts.phoneTitle}
        data={dataContacts.phone}
    />
    <ContactsField
        title={dataContacts.emailTitle}
        data={dataContacts.email}
    />
    <ContactsField
        title={dataContacts.storeTitle}
        data={dataContacts.store}
    />
  </div>

export default Contacts