<template>
  <v-theme-provider dark>
    <base-section
      id="info-alt"
      class="grey darken-4"
    >
      <v-responsive
        class="mx-auto"
        max-width="1400"
      >
        <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              md="3"
            >
              <base-img
                :src="require('@/assets/img/slwc_alt_icon_white.png')"
                contain
                max-width="96"
                min-height="78"
                width="100%"
              />

              <base-title
                size="text-body-1"
                space="4"
                title="SILVER LAKE WESLEYAN CAMP"
                weight="regular"
                class="mt-4"
              />

              <base-body>
                Established in 1958 by the Wesleyan Methodist Church as a place to gather for annual retreat, conference and children's camps.
              </base-body>

              <base-btn
                class="mb-12"
                color="white"
                outlined
              >
                Learn More
              </base-btn>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <base-info-card title="Contact" />

              <v-theme-provider :dark="dark">
                <div>
                  <base-info-card
                    :title="title"
                    color="primary"
                  >
                    <slot />
                  </base-info-card>

                  <template v-for="({ icon, text, title: t }, i) in business">
                    <base-avatar-card
                      :key="i"
                      :icon="icon"
                      :outlined="false"
                      :title="!dense ? t : undefined"
                      color="transparent"
                      horizontal
                      space="0"
                    >
                      <!-- Do not use v-html for user -->
                      <!-- provided values -->
                      <div v-html="text" />
                    </base-avatar-card>

                    <v-divider
                      v-if="i + 1 !== business.length"
                      :key="`divider-${i}`"
                      class="my-2"
                    />
                  </template>
                </div>
              </v-theme-provider>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <base-info-card title="Features">
                <a
                  v-for="feature in features"
                  :key="feature"
                  :text="feature"
                  class="mb-8 grey--text text-body-1 d-block text-none"
                  href="#"
                  v-html="`&rsaquo; ${feature}`"
                />
              </base-info-card>
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <base-info-card title="Instagram">
                <v-row dense>
                  <v-col
                    v-for="n in 6"
                    :key="n"
                    cols="auto"
                  >
                    <base-img
                      :src="require(`@/assets/insta-${n}.jpg`)"
                      color="grey lighten-1"
                      width="96"
                      tile
                    />
                  </v-col>
                </v-row>
              </base-info-card>
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'CampInfo',

    data: () => ({
      features: [
        'Zero Installation',
        'Easy Customization',
        'User Friendly Design',
        '24/7 Support Desk',
        'SEO Optimized',
      ],
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          text: '512 Wesleyan Camp Lane<br>Mayberly, ON, Canada<br>K0H 2B0',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          text: '1-877-511-2267',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'info@slwc.ca',
        },
      ],
    })
  }
</script>

<style lang="sass">
  #info-alt a
    text-decoration: none
</style>
