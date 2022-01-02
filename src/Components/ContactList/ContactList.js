import PropTypes from 'prop-types';
import React from 'react';
import styles from './ContactListItem.module.scss';
const ContactList = ({ deleteContact, contacts }) => (
  <section>
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.listItem}>
          {contact.name}: {contact.number}
          {deleteContact && (
            <button
              className={styles.btn}
              onClick={() => {
                deleteContact(contact.id);
              }}
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  </section>
);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),

  deleteContact: PropTypes.func,
};
export default ContactList;
