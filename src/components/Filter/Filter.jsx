import React from 'react';
import scss from '../index.module.scss'

export function Filter({ handleChangeFilter, filter }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input className={scss.searhingForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={filter}
          onChange={handleChangeFilter}
        />
      </label>
    </div>
  );
}
