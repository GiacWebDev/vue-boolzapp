const {createApp} = Vue;

import { contacts } from "./contacts.js";

createApp({
  data() {
    return {
      contacts,
      activeContact: 0, //contatto selezionato con contatotore
      
    }
  }
}).mount('#app')