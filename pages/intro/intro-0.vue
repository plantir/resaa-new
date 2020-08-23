<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 20px;
  .desc {
    font-weight: bold;
  }
}
</style>

<template>
  <div class="page-intro-wrapper justify-center">
    <div class="logo">
      <v-img src="/images/intro/logo.png" />
    </div>

    <div class="footer d-flex flex-column">
      <div class="desc mb-2">
        کار با رسا خیلی ساده است!
      </div>

      <v-btn @click="onClick" class="resaa-btn">بریم ببینیم</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

Component.registerHooks(['head'])

@Component({
  layout: 'intro',
})
export default class IntroPage0 extends Vue {
  public head() {
    return {
      title: 'intro-0',
      bodyAttrs: {
        class: 'page-intro page-intro-0',
      },
    }
  }

  onClick() {
    this.$router.push('/intro/intro-1')
  }
}
</script>
