const { createApp } = Vue;

import { contacts } from "./contacts.js";

createApp({

  data() {

    return {

      contacts,
      activeThumb: 0,
      userText: '',

     };
  },

  methods: {
    //seleziono la thumb
    selectThumb(index) {
  
        //svuoto l'input quando cambio chat
        this.userText = '';
  
        this.activeThumb = index;

        console.log(this.activeThumb);
    },
  },

}).mount("#app");
