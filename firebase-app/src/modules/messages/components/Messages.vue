<template>
    <div>
      <div>
          <input v-model="message" type="text" placeholder="Type your message here">
          <button @click="add">add a message</button>
      </div>

        <div>total messages: {{ numberOfMessages() }}</div>

      <ul>
          <li v-for="(message, key) in messages" :key="key">
              <span>{{message.message}}</span>
              <button @click="remove(key)">x</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "Messages",
    props: {
        messages: {
            required: true
        },
    },
    data () {
        return {
            message: "",
        }
    },
    methods: {
        add() {
            this.$emit("add", this.message)
            this.message = "";
        },

        remove(key) {
            this.$emit("remove", key);
        },

        numberOfMessages() {
            if (Array.isArray(this.messages))
              return this.messages.length;

            return Object.keys(this.messages).length;
        }
    }
}
</script>

<style>

</style>