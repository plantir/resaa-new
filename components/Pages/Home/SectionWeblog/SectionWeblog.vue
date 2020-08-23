<style lang="scss" scoped>
.section-weblog {
  padding: 50px 0;
  .blog-link {
    box-shadow: 0 15px 40px 0 rgba(19, 209, 243, 0.15) !important;
    display: inline-block;
    border: 1px solid $primary-color;
    line-height: 56px;
    border-radius: 8px;
    padding: 0 20px;
    font-weight: 500;
  }
}
</style>

<template>
  <section class="section-weblog">
    <v-container>
      <div class="section-title text-center">
        آخرین‌ها در مجله تخصصی پزشکی رسا
      </div>
      <WeblogMobile v-if="$device.isMobile" />
      <WeblogDesktop v-else />
      <div class="text-center">
        <v-btn class="blog-link resaa-btn" color="teel" outlined x-large>
          ورورد به مجله خبری آنلاین
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import WeblogMobile from './Mobile/WeblogMobile.vue'

@Component({
  components: {
    WeblogMobile: () => import('./Mobile/WeblogMobile.vue'),
    WeblogDesktop: () => import('./Desktop/WeblogDesktop.vue'),
  },
})
export default class SectionWeblog extends Vue {}
</script>
