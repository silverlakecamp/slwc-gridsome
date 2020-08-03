<template>
  <v-main>
    <v-fade-transition mode="out-in">
      <slot />
    </v-fade-transition>
  </v-main>
</template>

<script>
  export default {
    name: 'BaseView',
  }
</script>
