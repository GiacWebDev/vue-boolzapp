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
      const userMessage = {
        message: this.userText,
        date: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
        status: 'sent',
      };
    
      this.contacts[this.activeContact].messages.push(userMessage);
      
      this.userText = '';
    
      this.contacts[this.activeContact].messages.push(replyMessage);
      
      console.log(userMessage);
      
      setTimeout(() => {
        const replyMessage = {
          message: 'OK!',
          date: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS),
          status: 'received',
        };
        console.log(replyMessage);
        
      }, 1000);
    }
    
  } 
  
}).mount("#app");
