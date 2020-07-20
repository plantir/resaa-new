<style lang="scss" scoped>
section {
  background-color: #f9f9f9;
  padding: 100px 0;
}
.feature-one {
  display: flex;
  justify-content: space-between;
  .right {
    // width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    .main-title {
      text-align: center;
      @include media(sm) {
        text-align: right;
      }
      h2 {
        line-height: 40px;
      }
      p {
        font-size: 16px;
        font-weight: 500;
      }
    }
    @include media(sm) {
      align-items: flex-start;
      // width: 60%;
    }
    .items {
      .item {
        line-height: 30px;
        padding: 0 20px;
        width: 50%;
        @include media(xs-only) {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          p {
            font-size: 13px;
          }
          h3 {
            margin-top: 5px;
          }
        }
      }
    }
  }

  .left {
    display: none;
    @include media(md) {
      .bg {
        background: url(/images/home/img_phone_rotated.png) no-repeat;
        width: 537px;
        height: 849px;
        top: -180px;
        position: absolute;
        transform: scale(0.75);
      }
      display: flex;
      flex: 0 0 500px;
      margin-right: 100px;
      position: relative;
    }
    .doctor {
      position: absolute;
      width: 220px;
      max-width: 220px;
      height: 280px;
      &:nth-child(1) {
        top: 100px;
        left: 200px;
        z-index: 2;
        @include media(xl) {
          top: 10px;
        }
      }
      &:nth-child(2) {
        top: 320px;
        left: 20px;
        z-index: 1;
        @include media(xl) {
          top: 230px;
        }
      }
      &:nth-child(3) {
        top: 410px;
        left: 250px;
        @include media(xl) {
          top: 320px;
        }
      }
    }
  }
}
</style>

<template>
  <section>
    <v-container>
      <div class="feature-one">
        <div class="right text-right">
          <div class="main-title">
            <h2>بهترین راه مشاوره پزشکی و روان‌شناسی</h2>
            <p class="small-desc mt-4">
              بهترین راه مشاوره پزشکی و روان‌شناسی
            </p>
          </div>
          <div class="items d-flex flex-wrap mt-6">
            <div class="item mb-8">
              <Icon fileName="ic_search2.png" />
              <h3>سریع پیدا کنید</h3>
              <p>
                ما یکی از بزرگترین جوامع آماری را از پزشکان و روان‌شناسان ایرانی
                داریم که می‌توانید به جستجو در رسا، به‌سرعت اطلاعات شخص مورد
                نظرتان را پیدا .کنید
              </p>
            </div>
            <div class="item mb-8">
              <Icon fileName="ic_car.png" />
              <h3>کمتر در رفت و آمد باشید</h3>
              <p>
                هیچ‌کس مرخصی گرفتن، ماندن در ترافیک و منتظر ایستادن در صف مطب
                برای یک سوال ساده، جواب آزمایش یا سوال راجع‌به یک داروی خاص را
                دوست ندارد. اگر شما هم از این دسته افراد .هستید، رسا را حتما
                امتحان کنید
              </p>
            </div>
            <div class="item mb-8">
              <Icon fileName="ic_tel.png" />
              <h3>بدون واسطه صحبت کنید</h3>
              <p>
                احتمالا برایتان پیش آمده که به‌جای خود پزشک، منشی یا دستیار او
                پاسخ سوال‌های شما را بدهد یا حتی شما را معاینه کند. با استفاده
                از رسا، این خود .پزشک است که با شما صحبت می‌کند
              </p>
            </div>
            <div class="item">
              <Icon fileName="ic_money.png" />
              <h3>کمتر هزینه کنید</h3>
              <p>
                ،اگر جدای از خستگی، هزینه رفت و آمد مرخصی گرفتن و ویزیت را در
                نظر بگیرید، استفاده از رسا برای شما بسیار به‌صرفه‌تر است. فقط
                کافی است هرجا .نشسته‌اید، تلفن خود را بردارید
              </p>
            </div>
          </div>
        </div>
        <div class="left">
          <div class="bg"></div>
          <Doctor v-for="doctor in top3" :doctor="doctor" :key="doctor.id" />
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'
import Doctor from '@/components/Pages/Home/SectionIntro/Doctor.vue'
@Component({
  components: {
    Icon,
    Doctor,
  },
})
export default class SectionFeatureOne extends Vue {
  @Prop()
  doctors!: Doctor[]

  get top3() {
    return this.doctors.slice(0, 3)
  }
}
</script>
