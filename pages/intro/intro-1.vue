<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 20px;
  .desc {
    font-weight: bold;
  }
}
.middle {
  .main-title {
    font-weight: bold;
  }
  .desc {
    line-height: 25px;
    padding: 0 30px;
    color: #6c6c6c;
  }
}
</style>

<template>
  <div class="page-intro-wrapper">
    <div class="bg mt-12">
      <v-img src="/images/intro/intro-1.png" />
    </div>

    <div class="middle d-flex flex-column align-center">
      <div class="main-title">پیدا کردن پزشک یا روان‌شناس</div>
      <div class="desc text-center mt-3">
        با جستجو در لیست پزشکان و روان‌شناسان شخص مورد نظرتان را پیدا کنید.
      </div>
    </div>

    <div class="footer d-flex flex-column">
      <v-btn outlined @click="onClick">خب</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

Component.registerHooks(['head'])

@Component({
  layout: 'intro',
})
export default class IntroPage1 extends Vue {
  public head() {
    return {
      title: 'intro-1',
      bodyAttrs: {
        class: 'page-intro page-intro-1',
      },
    }
  }

  onClick() {
    this.$router.push('/intro/intro-2')
  }
}
</script>
