import React from 'react';
import scss from '../../index.module.scss';

export const ContactsListItem = ({ contact, onDelete }) => {

  const handleDeleteClick = () => {
    onDelete(contact.id);
  } 

  return (
    <li className={scss.todoList__item}>
    <span>
        { contact.name }
        :
        { contact.number }
    </span>
    <button className={scss.todoList__deleteButton} onClick={ handleDeleteClick } >Delete</button>
    </li>
  )
}

