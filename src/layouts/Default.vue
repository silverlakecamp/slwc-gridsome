<template>
  <v-app>
    <app-bar />
    <base-view />
<!--     <app-view />
    <app-map />
    <app-info />
    <app-footer /> -->
  </v-app>
</template>

<script>
  export default {
    name: 'LandingPageLayout',

    components: {
      AppBar: () => import('@/components/AppBar')
    }
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
