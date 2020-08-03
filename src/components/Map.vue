<template>
  <base-section
    id="map"
    space="0"
  >
    <iframe
      allowfullscreen
      aria-hidden="false"
      frameborder="0"
      height="500"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11317.272312879688!2d-76.5932308!3d44.8354553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x224570bad32dad0c!2sSilver+Lake+Wesleyan+Camp!5e0!3m2!1sen!2sca!4v1473269309127"
      style="border:0; display: block;"
      tabindex="0"
      width="100%"
    />
  </base-section>
</template>

<script>
  export default {
    name: 'CampMap',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
