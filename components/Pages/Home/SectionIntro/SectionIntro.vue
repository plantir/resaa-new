<style lang="scss" scoped>
.intro {
  padding: 30px 0;
  background: url('/images/home/intro_doctor_mobile.png') no-repeat;
  background-color: var(--v-primary-lighten5);
  .intro-text {
    .right {
      width: 55%;
      @include media(sm) {
        width: 490px;
      }
      h1 {
        line-height: 30px;
        font-size: 14px;
        @include media(sm) {
          line-height: 45px;
          font-size: 24px;
        }
        span {
          color: #13d1f3;
          position: relative;
          &::before {
            content: '';
            height: 5px;
            border-radius: 10px;
            background-color: #13d1f3;
            position: absolute;
            bottom: -5px;
            right: 0;
            width: 100%;
          }
        }
      }
      p {
        font-weight: 500;
        font-size: 11px;
        line-height: 26px;
        color: #5e696e;
        @include media(sm) {
          font-size: 16px;
          line-height: 26px;
        }
      }
    }
  }
  .resaa-btn {
    font-size: 1.3rem;
    min-width: 320px;
  }
}
</style>

<template>
  <section class="intro">
    <div class="intro-text">
      <v-container>
        <div class="right">
          <h1>
            با پزشک یا روان شناس مد نظرتان
            <span>مستقیما</span> صحبت کنید.
          </h1>
          <p class="text-justify">
            رسا یا رسانه سلامت ایرانیان یک بستر مخابراتی بین شما و تمام پزشک‌ها
            و روانشناس‌های عضو آن است. از طریق رسا می‌توانید با هزینه کمتر، رقت
            و آمد کمتر و سرعت بیشتر با هر پزشک یا روانشناسی که بخواهید مستقیما
            صحبت کنید.
          </p>
        </div>
        <v-btn class="resaa-btn" color="primary" x-large>مشاهده لیست پزشکان</v-btn>
      </v-container>
    </div>

    <Doctors />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Doctors from './Doctors.vue'

@Component({
  components: {
    Doctors,
  },
})
export default class Intro extends Vue {}
</script>
