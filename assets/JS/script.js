// TO DO: 

// Fix class active


const { createApp } = Vue;

import { contacts } from "./contacts.js";

createApp({

  data() {

    return {

      contacts,
      activeContact: 0,
      userText: '',
      userMessage: [], // Aggiungo array per memorizzare i messaggi dell'utente

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
      // Creo un oggetto messaggio ed inserisco nel nuovo array userMessages
      const userMessage = {
        message: this.userText,
        date: new Date().toLocaleTimeString(),
        // Imposto il messaggio mandato con 'sent'
        status: 'sent',
      };

      this.contacts[this.activeContact].messages.push(userMessage);
      
      this.userText = ''; // Resetto scritta input    

        setTimeout(() => {
          const replyMessage = {
            message: 'OK!',
            date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
            status: 'received'
          };
  
          console.log(replyMessage);
          this.contacts[this.activeContact].messages.push(replyMessage);
      
        }, 1000);
      console.log(userMessage);

    },
    
  } 
  
}).mount("#app");
