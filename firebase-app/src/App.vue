<template>
  <v-app>
    <MessageSend/>
  </v-app>
</template>

<script>
import MessageSend from './components/Message';

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
