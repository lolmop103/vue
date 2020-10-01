<template>
    <div>
      <div>
          <input v-model="message" type="text" placeholder="Type your message here">
          <button @click="add">add a message</button>
      </div>
      <ul>
          <li v-for="(message, key) in messages" :key="key">
              <span>{{message}}</span><button @click="remove(key)">x</button>
          </li>
      </ul>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyD1hSBuZEkppHflbHurf2B5MGdesQQB_dQ",
    authDomain: "fir-app-f9a3a.firebaseapp.com",
    databaseURL: "https://fir-app-f9a3a.firebaseio.com",
    projectId: "fir-app-f9a3a",
    storageBucket: "fir-app-f9a3a.appspot.com",
    messagingSenderId: "807192506695",
    appId: "1:807192506695:web:59da03ab95bf1489b5dc62"
};

firebase.initializeApp(config);
const database = firebase.database();
const databaseName = "messages";

export default {
    name: "FiredatabaseMessagesView",
    data () {
        return {
            message: "",
            messages: {}
        };
    },
    created() {
        this.listen()
    },
    methods: {
        listen() {
            let databaseRef = database.ref(databaseName);
            databaseRef.on("value", (data) => {
                this.messages = data.val()
            });
        },
        add() {
            let databaseRef = database.ref(databaseName);
            let newDatebaseRef = databaseRef.push();
            newDatebaseRef.set(this.message);
            this.message = ""
        },
        remove(key) {
            let databaseRef = database.ref(databaseName + "/" + key);
            databaseRef.remove();
        }
    }

}
</script>

<style>

</style>