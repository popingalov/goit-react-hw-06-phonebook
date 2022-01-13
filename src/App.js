import './App.css';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';

import Filter from './Components/Filter/Filter';

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
}

export default App;
