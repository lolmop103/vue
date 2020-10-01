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
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyD1hSBuZEkppHflbHurf2B5MGdesQQB_dQ",
    authDomain: "fir-app-f9a3a.firebaseapp.com",
    databaseURL: "https://fir-app-f9a3a.firebaseio.com",
    projectId: "fir-app-f9a3a",
    storageBucket: "fir-app-f9a3a.appspot.com",
    messagingSenderId: "807192506695",
    appId: "1:807192506695:web:59da03ab95bf1489b5dc62"
};

firebase.initializeApp(config, "firestore");
const database = firebase.app("firestore").firestore();
const databaseName = "messages";

export default {
    name: "FirestoreMessagesView",
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
            database.collection(databaseName).onSnapshot(snapshot => {
                snapshot.docChanges().forEach(data => {
                    const type = data.type;

                    const id = data.doc.id;
                    const message = data.doc.data().message;

                    if (type == "removed") {
                        this.$delete(this.messages, id);
                        return;
                    }

                    if (type == "added") {
                        this.$set(this.messages, id, message);
                        this.message = "";
                        return;
                    }
                });
            });
        },
        add() {
            database
              .collection(databaseName)
              .add({message: this.message});
        },
        remove(key) {
            database
              .collection(databaseName)
              .doc(key)
              .delete();
        }
    }
}
</script>

<style>

</style>