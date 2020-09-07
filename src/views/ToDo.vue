<template>
  <div class="todo">
      <v-container>
          <h1>the todo list</h1>
        <v-card>
            <v-card-title>Task1</v-card-title>
            <v-card-text>description task1</v-card-text>
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
      </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
