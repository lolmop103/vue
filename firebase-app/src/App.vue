<template>
  <v-app>
    <MessageSend/>
  </v-app>
</template>

<script>
import MessageSend from './components/MessageSend';

export default {
  name: 'App',

  components: {
    MessageSend,
  },

  data: () => ({
    //
  }),
};
</script>
