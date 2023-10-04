const { createApp } = Vue;

import { contacts } from "./contacts.js";

createApp({

  data() {

    return {

      contacts,
      activeContact: 0,
      userText: '',
      userMessages: [], // Aggiungo array per memorizzare i messaggi dell'utente

     };
  },

  methods: {
    // seleziono la thumb
    selectContact(index) { 
      // svuoto l'input quando cambio chat
      this.userText = '';
      this.activeContact = index;
      console.log(this.activeContact);
    },
  
    sendMessage() {
      if (this.userText.trim() === '') {
        return; // Non invio messaggi vuoti
      }
      // Creo un oggetto messaggio ed inserisco nel nuovo array userMessages
      const userMessage = {
        message: this.userText,
        // Imposto il messaggio mandato con 'sent'
        status: 'sent',

      };

      this.contacts[this.activeContact].messages.push(userMessage);

    }
    
  },
  
  
}).mount("#app");
