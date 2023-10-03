const { createApp } = Vue;

import { contacts } from "./contacts.js";

createApp({
  data() {
    return {
      contacts,
      activeThumb: 0,
     };
  },
}).mount("#app");
