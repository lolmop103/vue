<template>
 <v-dialog
  v-model="dialog"
  max-width="55vw"
 >
    <template v-slot:activator="{ on, attrs }">
        <v-btn icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
    </template>
    <v-card>
        <v-card-title>Create Task</v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                 v-model="input.title"
                 label="'title"
                 required
                >
                </v-text-field>

                <v-textarea
                 v-model="input.description"
                 label="description"
                 required
                >
                </v-textarea>

                <v-checkbox
                 v-model="input.doing"
                 label="Task in doing"
                 required
                >
                </v-checkbox>

                <v-btn text
                 class="mr-4"
                 @click="create"
                >
                    Create task
                </v-btn>

                <v-btn text
                 class="mr-4"
                 @click="dialog=false"
                 align="center"
                >
                    Cancel
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
 </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    dialog: false,
    input: {
      title: '',
      description: '',
      doing: false
    }
  }),
  methods: {
    create () {
      let state = 'ToDo'

      if (this.input.doing) {
        state = 'Doing'
      }

      axios.post('http://todo.test/api/tasks/add', {
        title: this.input.title,
        description: this.input.description,
        state: state
      }).then((response) => {
        console.log(response.data)
        this.dialog = false
      })
    }
  }
}
</script>

<style>

</style>
