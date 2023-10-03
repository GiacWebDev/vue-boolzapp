const {createApp} = Vue;

import { contacts } from "./contacts.js";

createApp({
  data() {
    return {
      contacts
      
    }
  }
}).mount('#app')