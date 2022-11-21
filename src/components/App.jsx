import React from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import ContactsList from './ContactsList/ContactsList';
import scss from './index.module.scss';
import './index.css'

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = param => {
    // console.log(param);
    const paramId = nanoid();
    const newContact = {
      id: paramId,
      name: param.name,
      number: param.number,
    };
    // console.log(this.state.contacts.filter(contact => newContact.name === contact.name).length);
    this.state.contacts.filter(contact => newContact.name === contact.name)
      .length
      ? window.alert('There is some user with such name')
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  handleChangeFilter = e => {
    console.log(e);
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts() {
    const contactsFilteredByName = this.state.contacts?.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()) );
    console.log(contactsFilteredByName);
    return this.state.filter ? contactsFilteredByName : this.state.contacts; 
  }

  onDeleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: filteredContacts }) 
  }

  render() {
    const filteredContacts = this.filterContacts();

    console.log(filteredContacts);
    return (
      <div className={scss.mainForm}>
      <h1 className={scss.mainFormTitle}>
      Phonebook
      </h1>
        <Form addContact={this.addContact} />
      <h1 className={scss.mainFormTitle}>
      Contacts
      </h1>
        <Filter
          handleChangeFilter={this.handleChangeFilter}
          filter={this.filter}
        />
        <ContactsList contacts={filteredContacts} onDelete={this.onDeleteContact}/>
      </div>
    );
  }
}
