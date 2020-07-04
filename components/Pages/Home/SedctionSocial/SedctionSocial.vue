<style lang="scss" scoped>
.social-container {
  background-color: #f9f9f9;
  ::v-deep {
    .container {
      padding: 0 12px;
    }
  }
  .inner-wrapper {
    // padding: 70px 0;
    display: flex;
    align-items: center;
    height: 550px;
    overflow: hidden;
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
      margin-top: 50px;
      align-items: center;
      @include media(sm) {
        align-items: flex-start;
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
    <v-container>
      <div class="inner-wrapper">
        <div>
          <div class="main-title">ما را در شبکه‌های اجتماعی دنبال کنید.</div>
          <div class="social-wrapper d-flex flex-column">
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
          <v-img src="/images/home/social.png" max-height="100%"></v-img>
        </div>
      </div>
    </v-container>
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
