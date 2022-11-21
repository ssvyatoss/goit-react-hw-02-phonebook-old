import React from 'react';
import scss from '../index.module.scss';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    // console.log(evt.currentTarget);
    const { name, value } = evt.currentTarget;
    // console.log(name, value);
    this.setState({ [name]: value });
  };

  handleClick = () => {
    if (this.state.name && this.state.number) {
      this.props.addContact(this.state);
      this.formReset();
    } else {
        window.alert("There is not filled field");
    }
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    // console.log(this.props);

    return (
      <fieldset className={scss.inputField}>
        <label className={scss.nameField}>
          <h3 className={scss.nameField__title}>
          Name
          </h3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={scss.numberField}>
        <h3 className={scss.nameField__title}>
          Number
        </h3>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={scss.addButton} onClick={this.handleClick}>Add contact</button>
      </fieldset>
    );
  }
}
