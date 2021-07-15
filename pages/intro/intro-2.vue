<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 20px;
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
      <v-img src="/images/intro/intro-2.png" />
    </div>

    <div class="middle d-flex flex-column align-center mt-5">
      <div class="main-title">پرداخت هزینه مشاور</div>
      <div class="desc text-center mt-3">
        چه تلفن هوشمند داشته باشید، چه نه، می‌توانید از رسا استفاده کنید.
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
export default class IntroPage2 extends Vue {
  public head() {
    return {
      title: 'intro-2',
      bodyAttrs: {
        class: 'page-intro page-intro-2',
      },
    }
  }

  onClick() {
    this.$router.push('/intro/intro-3')
  }
}
</script>
