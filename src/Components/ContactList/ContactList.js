import PropTypes from 'prop-types';
import styles from './ContactListItem.module.scss';
import contactsActions from '../../redux/contacts/contacts-Actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';
function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const deleteContact = contactId => {
    dispatch(contactsActions.deleteContact(contactId));
  };

  return (
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
}
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
