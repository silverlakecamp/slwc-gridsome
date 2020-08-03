<style lang="scss">
  .bg-video {
    video {
      object-fit: cover;
      width: 100%;
    }
    .overlay {
      position: absolute;
      top: 25px;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
</style>

<template>
  <section id="hero" class="hidden-xs-only">
    <!-- TODO: this minHeight isnt working -->
    <v-container fluid pa-0 :height="minHeight">
      <div class="bg-video">
        <base-img
          :src="require('@/assets/img/slwc_alt_logo_white.png')"
          :height="overlayHeight"
          contain
          alt="Silver Lake Wesleyan Camp Logo"
          class="overlay"
        />
        <video loop autoplay muted>
          <source :src="require('@/assets/video/index-bg.mp4')" />
        </video>
      </div>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'HeroVideo',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },

      overlayHeight () {
        const height = this.$vuetify.breakpoint.lgAndUp ? '35%' : '300px'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      }
    },
  }
</script>
