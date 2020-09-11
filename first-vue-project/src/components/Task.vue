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
            <v-btn
            color="red"
            icon
            >
            <v-icon>mdi-delete-circle</v-icon>
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['title', 'description']
}
</script>

<style>

</style>
