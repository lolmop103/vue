<template>
    <div id="NavBar">
        <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item
        v-for="item in items"
        :key="item.name"
        :to="item.link"
        link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>ToDo Application</v-toolbar-title>
    </v-app-bar>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    drawer: false,
    items: [
      {
        name: 'home',
        icon: 'mdi-home',
        link: '/'
      },
      {
        name: 'about',
        icon: 'mdi-information',
        link: '/about'
      },
      {
        name: 'todo',
        icon: 'mdi-clipboard-list',
        link: '/todo'
      }
    ]
  })
}
</script>

<style>

</style>
