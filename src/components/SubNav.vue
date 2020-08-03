<style lang="scss">
  .subnav-item-hovered {
    filter: grayscale(100%);
    transition: 1s ease-out;
  }
</style>

<template>
  <base-section id="main-subnav" space=0>
    <v-container fluid pa-0>
      <v-row>
        <v-col md=4 class="pa-0">
          <g-link to="/camps">
            <v-hover v-slot:default="{ hover }">
              <base-img
                :height="$vuetify.breakpoint.smAndDown ? '250px' : '500px'"
                :src="require('@/assets/img/features/2020/1.jpg')"
                v-bind:class="{ 'subnav-item-hovered': hover }"
              >
                <v-overlay absolute opacity="0.2">
                  <base-subheading>Day Camps</base-subheading>
                </v-overlay>
            </base-img>
            </v-hover>
          </g-link>
        </v-col>
        <v-col md=8 class="pa-0">
          <v-row>
            <v-col md=6 class="pa-0">
              <g-link to="/events">
                <v-hover v-slot:default="{ hover }">
                  <base-img
                    height="250px"
                    :src="require('@/assets/img/features/8.jpg')"
                    v-bind:class="{ 'subnav-item-hovered': hover }"
                  >
                    <v-overlay absolute pa-6 opacity="0.2">
                      <base-subheading>Events</base-subheading>
                    </v-overlay>
                  </base-img>
                </v-hover>
              </g-link>
            </v-col>
            <v-col md=6 class="pa-0">
              <g-link to="/give">
                <v-hover v-slot:default="{ hover }">
                  <base-img
                    height="250px"
                    :src="require('@/assets/img/features/9.jpg')"
                    v-bind:class="{ 'subnav-item-hovered': hover }"
                  >
                    <v-overlay absolute pa-6 opacity="0.2">
                      <base-subheading>Give</base-subheading>
                    </v-overlay>
                  </base-img>
                </v-hover>
              </g-link>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols=12 class="pa-0">
              <g-link to="/rentals">
                <v-hover v-slot:default="{ hover }">
                  <base-img
                    height="250px"
                    :src="require('@/assets/img/features/14.jpg')"
                    v-bind:class="{ 'subnav-item-hovered': hover }"
                  >
                    <v-overlay absolute pa-6 opacity="0.2">
                      <base-subheading>Rentals</base-subheading>
                    </v-overlay>
                  </base-img>
                </v-hover>
              </g-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SubNav'
  }
</script>
