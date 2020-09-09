<template>
  <div class="todo">
      <v-container>
          <h1>the todo list</h1>
          <v-row>
            <v-col align="center">
              <h2>To do</h2>
              <Task v-bind:title="'task1'" v-bind:description="'description for task1'"/>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col align="center">
              <h2>Doing</h2>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col align="center">
              <h2>Done</h2>
            </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import Task from '@/components/Task'

export default {
  name: 'ToDo',
  components: {
    Task
  }
}
</script>

<style>

</style>
