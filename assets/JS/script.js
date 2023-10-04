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
      // creo orario per messaggio da inclusere con data
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      return new Intl.DateTimeFormat('it', options).format(dateTime);
    },
    
    
  },

  computed: {
    filteredContacts() {
      const search = this.searchText.toLowerCase();
      // Filtro i contatti in base al testo di ricerca
      // Uso il metodo "filter" per creare un nuovo array
      return this.contacts.filter((contact) => {
        // nome del contatto in minuscolo per falicitare la ricerca
        const name = contact.name.toLowerCase();
        //includo il nome nel contatto filtrato
        return name.includes(search);
      });
    },
  },

}).mount("#app");
