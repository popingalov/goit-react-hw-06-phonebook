import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { ADD_CONTACT, DELETE_CONTACT } from 'redux/types';
const addContact = createAction(ADD_CONTACT, ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction(DELETE_CONTACT);

const contactsActions = { addContact, deleteContact };

export default contactsActions;
