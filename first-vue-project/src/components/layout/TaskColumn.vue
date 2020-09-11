<template>
  <v-col align="center">
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
