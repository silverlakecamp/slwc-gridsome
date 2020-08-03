<template>
  <v-app>
    <app-bar />
    <v-main>
      <slot />
    </v-main>
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
