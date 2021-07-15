<style lang="scss" scoped>
.section-weblog {
  padding: 48px 0;
  @include media(sm) {
    padding: 38px 30px 106px;
  }
  ::v-deep {
    .container {
      padding: 0 12px;
    }
  }
  .post-title {
    color: #212121;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    @include media(sm) {
      font-size: 24px;
    }
  }
  .blog-link {
    box-shadow: 0 15px 40px 0 rgba(19, 209, 243, 0.15) !important;
    border: 1px solid $primary-color;
    font-size: 16px;
    border-radius: 8px;
    font-weight: bold;
    margin: 0 !important;
    width: 330px;
    height: 48px !important;
    @include media(sm) {
      height: 56px !important;
      width: 256px;
    }
  }
}
</style>

<template>
  <section class="section-weblog">
    <!-- <v-container> -->
    <div class="post-title">آخرین‌ها در مجله تخصصی پزشکی رسا</div>
    <WeblogMobile v-if="$device.isMobile" :posts="posts" />
    <WeblogDesktop v-else :posts="posts" />
    <div class="text-center">
      <v-btn
        class="blog-link resaa-btn"
        outlined
        href="https://resaa.net/blog"
        target="_blank"
      >
        ورود به مجله سلامت رسا
      </v-btn>
    </div>
    <!-- </v-container> -->
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    WeblogMobile: () => import('./Mobile/WeblogMobile.vue'),
    WeblogDesktop: () => import('./Desktop/WeblogDesktop.vue'),
  },
})
export default class SectionWeblog extends Vue {
  @Prop({
    required: true,
  })
  readonly posts!: Array<Object>
}
</script>
