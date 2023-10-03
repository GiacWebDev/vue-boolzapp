const { createApp } = Vue;

import { contacts } from "./contacts.js";

createApp({

  data() {

    return {

      contacts,
      activeThumb: 0,
      userText: '',
      userMessages: [], // Aggiungo array per memorizzare i messaggi dell'utente

     };
  },

  methods: {
    // seleziono la thumb
    selectThumb(index) { 
      // svuoto l'input quando cambio chat
      this.userText = '';
      this.activeThumb = index;
      console.log(this.activeThumb);
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
      console.log(userMessage); // Aggiungi questo console.log

    }
    
    
  },
  
  
}).mount("#app");
