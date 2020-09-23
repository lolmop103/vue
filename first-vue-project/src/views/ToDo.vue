<template>
  <div class="todo">
      <v-container>
          <h1>the todo list</h1>
          <v-toolbar dense elevation="2">
            <TaskCreateDialog />
          </v-toolbar>
          <v-row>
            <TaskColumn v-bind:title="'To do'">
              <Task
                v-for="task in tasks[0]"
                :key="task.title"
                v-bind:title="task.title"
                v-bind:description="task.description"
              />
            </TaskColumn>
            <TaskColumn v-bind:title="'Doing'">
              <Task
                v-for="task in tasks[1]"
                :key="task.title"
                v-bind:title="task.title"
                v-bind:description="task.description"
              />
            </TaskColumn>
            <TaskColumn v-bind:title="'Done'">
              <Task
                v-for="task in tasks[2]"
                :key="task.title"
                v-bind:title="task.title"
                v-bind:description="task.description"
              />
            </TaskColumn>
            <v-divider vertical></v-divider>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import Task from '@/components/Task'
import TaskColumn from '@/components/layout/TaskColumn'
import TaskCreateDialog from '@/components/dialogs/TaskCreateDialog'
import axios from 'axios'

export default {
  name: 'ToDo',
  components: {
    Task,
    TaskColumn,
    TaskCreateDialog
  },
  created () {
    console.log('hello')
    this.init()
  },
  methods: {
    init () {
      console.log('initialized')
      axios.get(`http://${process.env.VUE_APP_API_HOST}/api/v${process.env.VUE_APP_API_VERSION}/tasks`)
        .then((response) => {
          this.getAllTasks(response.data.last_page)
        })
    },
    getAllTasks (lastPage) {
      for (let i = 1; i <= lastPage; i++) {
        axios.get(`http://${process.env.VUE_APP_API_HOST}/api/v${process.env.VUE_APP_API_VERSION}/tasks?page=${i}`)
          .then((response) => {
            response.data.data.forEach(task => {
            })
          })
      }
    }
  },
  data: () => ({
    tasks: [
      [
        {
          id: 1,
          title: 'Task 1',
          description: 'This is the description of task 1'
        }
      ],
      [
        {
          id: 1,
          title: 'Task 1',
          description: 'This is the description of task 1'
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'This is the description of task 2'
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'This is the description of task 3'
        }
      ],
      [
        {
          id: 1,
          title: 'Task 1',
          description: 'This is the description of task 1'
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'This is the description of task 2'
        }
      ]
    ]
  })
}
</script>

<style>

</style>
