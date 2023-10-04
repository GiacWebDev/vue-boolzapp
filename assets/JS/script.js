// TO DO: 

// Fix class active
// add date in

const { createApp } = Vue;

import { contacts } from "./contacts.js";


createApp({

  data() {

    return {

      contacts,
      activeContact: 0,
      userText: '',
      userMessage: [], // Aggiungo array per memorizzare i messaggi dell'utente
      searchText: '',

     };
  },

  methods: {

    filterContacts() {
      const search = this.searchText.toLowerCase();
  
      // controllo se il nome dei contatti è incluso nella ricerca
      this.contacts.forEach((contact) => {
        const name = contact.name.toLowerCase();
  
        // rendo visibile il contatto in base alla ricerca
        contact.visible = name.includes(search);
      });
    },


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
        date: this.formatTime(new Date()), // ottendo la data formattata
        status: 'sent',
      };
    
      this.contacts[this.activeContact].messages.push(userMessage);
      
      this.userText = '';
    
      setTimeout(() => {
        const replyMessage = {
          message: 'OK!',
          date: this.formatTime(new Date()),
          status: 'received',
        };
        console.log(replyMessage);
        
        this.contacts[this.activeContact].messages.push(replyMessage);
      }, 1000);
    },

    formatTime(dateTime) {
      // const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return new Intl.DateTimeFormat('it', options).format(dateTime);
    },
    
    
  } 
  
}).mount("#app");
