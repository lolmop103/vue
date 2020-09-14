<template>
  <div id="Task">
    <v-hover
     v-slot:default="{ hover }"
     >
      <v-card
       :elevation="hover ? 10 : 5"
       >
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>{{ description }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <DeleteTaskPopup />
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
import DeleteTaskPopup from '@/components/popups/DeleteTaskPopup'

export default {
  name: 'Task',
  components: {
    DeleteTaskPopup
  },
  props: ['title', 'description']
}
</script>

<style>

</style>
