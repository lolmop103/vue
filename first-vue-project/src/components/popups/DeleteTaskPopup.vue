<template>
    <v-card>
    <v-card-title class="headline">Are you sure you want to delete this task?</v-card-title>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        color="green darken-1"
        text
        @click="dialog = false"
      >
        Cancel
      </v-btn>

      <v-btn
        color="green darken-1"
        text
        @click="dialog = false"
      >
        Delete
      </v-btn>
    </v-card-actions>
      </v-card>
</template>

<script>
export default {
  name: 'DeletePopup',
  data: () => ({
    dialog: false
  })
}
</script>

<style>

</style>
