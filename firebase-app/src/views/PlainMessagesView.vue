<template>
  <div>
      <div>
          <input v-model="message" type="text" placeholder="Type your message here">
          <button @click="add">add a message</button>
      </div>
      <ul>
          <li v-for="(message, index) in messages" :key="index">
              <span>{{message.message}}</span><button @click="remove(index)">x</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "PlainMessagesView",
    data () {
        return {
            message: "",
            messages: []
        };
    },
    methods: {
        add() {
            this.messages.push({message: this.message})
            this.message = ""
        },
        remove(index) {
            this.$delete(this.messages, index);
        }
    }

}
</script>

<style>

</style>