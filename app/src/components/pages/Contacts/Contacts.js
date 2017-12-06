import React,{ Component } from 'react'
import styles from './Contacts.scss'
import ContactsField from '../../ContactsField/ContactsField.js';
import Map from '../../Map/Map.js';

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
  <div className={styles.contacts}>

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
