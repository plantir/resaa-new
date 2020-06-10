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
      <v-img src="/images/intro/intro-3.png" />
    </div>

    <div class="middle d-flex flex-column align-center mt-5">
      <div class="main-title">تماس تلفنی مستقیم</div>
      <div class="desc text-center mt-3">
        به‌راحتی و به‌طور مستقیم با پزشک یا روان‌شناس مد نظرتان تلفنی صحبت کنید
        هزینه تماس شما به‌صورت دقیقه‌ای محاسبه می‌شود.
      </div>
    </div>

    <div class="footer d-flex flex-column">
      <v-btn @click="onClick">ورود به رسا</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

Component.registerHooks(['head'])

@Component({
  layout: 'intro',
})
export default class IntroPage3 extends Vue {
  public head() {
    return {
      title: 'intro-3',
      bodyAttrs: {
        class: 'page-intro page-intro-3',
      },
    }
  }

  onClick() {
    this.$auth.$storage.setCookie('seeIntro', 1, false)
    this.$router.push('/patient/login')
  }
}
</script>
