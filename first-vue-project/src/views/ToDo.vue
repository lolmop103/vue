<template>
  <div class="todo">
      <v-container>
          <h1>the todo list</h1>
          <Task v-bind:title="'task1'" v-bind:description="'description for task1'"/>
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
