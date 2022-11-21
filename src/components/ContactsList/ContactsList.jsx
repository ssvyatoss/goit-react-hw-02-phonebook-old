import React from 'react'
import { ContactsListItem } from './ContactsListItem/ContactsListItem';
import scss from '../index.module.scss';

const ContactsList = ({ contacts, onDelete }) => {
  // console.log(contacts);
 return (
 <ul className={scss.formBox}>
  {contacts.map(contact => <ContactsListItem key={ contact.id }  contact={ contact } onDelete={ onDelete }/>)}
 </ul>
 )
}


export default ContactsList;
