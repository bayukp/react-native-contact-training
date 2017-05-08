import { combineReducers } from 'redux'

import Contact from './Contact.reducer'
import ContactForm from './ContactForm.reducer'

export default combineReducers({
    contact: Contact,
    contactForm: ContactForm
})