<template>
  <v-form>
      <v-text-field
      v-model="input.msg"
      label="msg"
      reqired>
      </v-text-field>

      <v-btn text
        @click="send"
      >Send</v-btn>
  </v-form>
</template>

<script>
export default {
    data: () => ({
        input: {
            msg: ''
        }
    }),

    methods: {
        send () {
            console.log(this.input.msg)
        }
    }

}
</script>

<style>

</style>