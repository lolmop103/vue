<template>
  <div>
      <Messages :messages="messages" @add="add" @remove="remove" />
  </div>
</template>

<script>

import Messages from "@/modules/messages/components/Messages.vue";
import MessageService from "@/modules/messages/services/FireDatabaseMessageService.js";

export default {
    name: "FiredatabaseMessages",
    components: {
        Messages
    },
    data () {
        return {
            messages: {},
            messageService: new MessageService
        }
    },
    created() {
        this.listenToMessagesService()
    },
    methods: {
        listenToMessagesService(){
            this.messageService.listen(this.listen);
        },
        
        listen(data) {
            this.messages = data;
        },

        add(message) {
            this.messageService.add( { message: message } );
        },

        remove(key) {
            this.messageService.remove(key);
        }
    }

}
</script>

<style>

</style>