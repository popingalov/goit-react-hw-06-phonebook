import { useState } from 'react';
import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactsHook from './hooks/ContactsHook';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContacts] = ContactsHook('contacts');
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    if (contacts.find(contact => name === contact.name)) {
      alert(name + ' is already in contacts');
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    setContacts(e => [...e, contact]);
  };

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const filteredContact = () => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const deleteContact = contactId => {
    setContacts(e => e.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <Filter handleChangeFilter={handleChangeFilter} filter={filter} />
      )}

      <ContactList contacts={filteredContact()} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
