import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
import contactsActions from '../../redux/contacts/contacts-Actions';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const addContact = (name, number) => {
    contacts.find(contact => name === contact.name)
      ? alert(name + ' is already in contacts')
      : dispatch(contactsActions.addContact({ name, number }));
  };
  const handleChange = e => {
    const { name, value } = e.target;

    name === 'name' ? setName(value) : setNumber(value);
  };
  const resetState = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact(name, number);

    resetState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Number
        <br />
        <input
          className={styles.margin}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <br />
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func,
};

export default ContactForm;
