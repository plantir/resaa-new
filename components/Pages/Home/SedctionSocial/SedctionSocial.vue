<style lang="scss" scoped>
.social-container {
  background-color: #f9f9f9;
  padding: 48px 0;
  @include media(sm) {
    padding: 0 135px;
  }
  .inner-wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;
    @include media(sm) {
      height: 372px;
    }
    @include media(xl) {
      height: 520px;
    }
    > div {
      flex: 1;
    }

    .main-title {
      color: #212121;
      font-weight: bold;
      font-size: 20px;
      text-align: center;
      @include media(sm) {
        text-align: right;
        font-size: 24px;
      }
    }

    .social-wrapper {
      width: 100%;
      margin-top: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @include media(sm) {
        align-items: flex-start;
        margin-top: 50px;
      }
    }

    .image-wrapper {
      display: none;
      @include media(sm) {
        display: block;
      }
      ::v-deep {
        .v-image__image {
          background-position: -55px center;
        }
      }
    }
  }
}
</style>

<template>
  <section class="social-container">
    <div class="inner-wrapper">
      <div>
        <div class="main-title">ما را در شبکه‌های اجتماعی دنبال کنید.</div>
        <div class="social-wrapper">
          <SocialButton link="https://t.me/pezeshkeresaa" network="telegram">
            مشاهده کانال تلگرام
          </SocialButton>
          <SocialButton
            link="https://www.instagram.com/resaanet/"
            network="instagram"
            class="mt-7"
          >
            مشاهده صفحه اینستاگرام
          </SocialButton>
        </div>
      </div>
      <div class="image-wrapper">
        <v-img src="/images/home/social.webp" max-height="100%"></v-img>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SocialButton from './SocialButton.vue'

@Component({
  components: {
    SocialButton,
  },
})
export default class SedctionSocial extends Vue {}
</script>
