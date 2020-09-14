<template>
  <v-dialog
   v-model="popup"
   persistent
   max-width="30vw"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon
        color="red"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-delete-circle</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline justify-center">Are you sure you want to delete this task?</v-card-title>

      <v-card-actions class="justify-center">
        <v-btn
          color="green darken-1"
          text
          @click="popup = false"
          class="mr-16"
        >
          Cancel
        </v-btn>
        <v-btn
          color="red darken-1"
          text
          @click="popup = false"
          class="ml-16"
        >
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'DeletePopup',
  data: () => ({
    popup: false
  })
}
</script>

<style>

</style>
