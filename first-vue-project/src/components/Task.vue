<template>
  <div id="Task">
    <v-card>
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
