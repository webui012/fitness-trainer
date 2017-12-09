import React, { Component } from 'react'
import ContactsField from '../../ContactsField/ContactsField.js';
import Map from '../../Map/Map.js';
import './Contacts.scss'

/*This data for contacts fields must be transfere in to store*/
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

class Contacts extends Component {
    constructor(props) {
        super(props)
        this.dataContacts = dataContacts;
    }

    render() {
        return (
            <div className='contacts'>                
                <h1>CONTACTS</h1>
                <Map />
                <ContactsField
                    title={this.dataContacts.adressTitle}
                    data={this.dataContacts.adress}
                />
                <ContactsField
                    title={this.dataContacts.phoneTitle}
                    data={this.dataContacts.phone}
                />
                <ContactsField
                    title={this.dataContacts.emailTitle}
                    data={this.dataContacts.email}
                />
                <ContactsField
                    title={this.dataContacts.storeTitle}
                    data={this.dataContacts.store}
                />
            </div>
        );
    }
}

export default Contacts
