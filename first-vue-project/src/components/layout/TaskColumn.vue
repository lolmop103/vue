<template>
  <v-col align="center" cols="12" sm="12" md="4" lg="4" xl="4">
    <h2>{{ title }}</h2>
    <slot>

    </slot>
  </v-col>
</template>

<script>
export default {
  name: 'TaskColumn',
  props: ['title']
}
</script>

<style scoped>

</style>
