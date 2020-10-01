<template>
  <div>
      <Messages :messages="messages" @add="add" @remove="remove" />
  </div>
</template>

<script>
import Messages from '@/components/Messages.vue'

export default {
    name: "PlainMessagesView",
    components: {
        Messages
    },
    data () {
        return {
            messages: []
        };
    },
    methods: {
        add(message) {
            this.messages.push( { message } )
        },
        remove(index) {
            this.$delete(this.messages, index);
        }
    }

}
</script>

<style>

</style>