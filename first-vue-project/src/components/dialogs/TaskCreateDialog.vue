<template>
 <v-dialog
  v-model="dialog"
  persistent
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
        <v-progress-linear
          :active="progressBarActive"
          indeterminate
          color="light-blue"
        ></v-progress-linear>
        <v-card-text>
            <v-form>
                <v-text-field
                 v-model="input.title"
                 label="title"
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
                 :disabled="buttonDisabled"
                >
                    Create task
                </v-btn>

                <v-btn text
                 class="mr-4"
                 @click="clearDialog"
                 :disabled="buttonDisabled"
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
    buttonDisabled: false,
    progressBarActive: false,
    input: {
      title: '',
      description: '',
      doing: false
    }
  }),
  methods: {
    create () {
      this.wait()
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
        this.clearDialog()
        this.resume()
      })
    },

    wait () {
      this.buttonDisabled = true
      this.progressBarActive = true
    },

    resume () {
      this.buttonDisabled = false
      this.progressBarActive = false
    },

    clearDialog () {
      this.dialog = false
      this.input.title = ''
      this.input.description = ''
      this.input.doing = false
    }
  }
}
</script>

<style>

</style>
