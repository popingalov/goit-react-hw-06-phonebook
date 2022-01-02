import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import { getVisibleContacts, getFilter } from './redux/selectors';
import Filter from './Components/Filter/Filter';
import contactsActions from 'redux/contacts/contacts-Actions';
import filterActions from './redux/filter/filter-Actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const contacts = useSelector(getVisibleContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(filterActions(e));
  };

  const deleteContact = contactId => {
    dispatch(contactsActions.deleteContact(contactId));
  };
  const addContact = (name, number) => {
    contacts.find(contact => name === contact.name)
      ? alert(name + ' is already in contacts')
      : dispatch(contactsActions.addContact({ name, number }));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>

      <Filter handleChangeFilter={handleChangeFilter} filter={filter} />

      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
