<style lang="scss" scoped>
.social {
  background-color: #f9f9f9;
  .inner-wrapper {
    padding: 70px 0;
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
      padding: 40px;
      @include media(sm) {
        padding: 0;
        max-width: 250px;
      }
    }
  }
}
</style>

<template>
  <section class="social">
    <v-container>
      <div class="inner-wrapper py-">
        <div class="main-title">
          ما را در شبکه‌های اجتماعی دنبال کنید.
        </div>

        <div class="social-wrapper d-flex flex-column">
          <SocialButton network="telegram">
            مشاهده کانال تلگرام
          </SocialButton>
          <SocialButton network="instagram" class="mt-7">
            مشاهده صفحه اینستاگرام
          </SocialButton>
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
export default class extends Vue {}
</script>
