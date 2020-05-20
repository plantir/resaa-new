<style lang="scss" scoped>
.intro {
  .intro-text {
    height: 300px;
    background: url('/images/home/intro_doctor_mobile.png') no-repeat;
    background-position: -75px;
    .desc {
      width: 55%;
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
      }
    }
  }
}
</style>

<template>
  <section class="intro">
    <div class="intro-text">
      <v-container>
        <div class="desc">
          <h1>
            با پزشک یا روان شناس مد نظرتان <span>مستقیما</span> صحبت کنید.
          </h1>
          <p class="text-justify">
            رسا یا رسانه سلامت ایرانیان یک بستر مخابراتی بین شما و تمام پزشک‌ها
            و روانشناس‌های عضو آن است. از طریق رسا می‌توانید با هزینه کمتر، رقت
            و آمد کمتر و سرعت بیشتر با هر پزشک یا روانشناسی که بخواهید مستقیما
            صحبت کنید.
          </p>
        </div>
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
