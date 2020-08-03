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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
