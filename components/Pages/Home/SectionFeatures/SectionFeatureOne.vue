<style lang="scss" scoped>
.feature-one {
  background-color: #f9f9f9;
  padding: 70px 0;
  .right {
    width: 60%;
    @include media(xs-only) {
      align-items: center;
      display: flex;
      flex-direction: column;
      width: 100%;
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
    width: 40%;
    @include media(xs-only) {
      display: none;
    }
  }
}
</style>

<template>
  <div class="feature-one">
    <v-container class="d-flex">
      <div class="right">
        <h2>بهترین راه مشاوره پزشکی و روان‌شناسی</h2>
        <div class="small-desc mt-4">
          به ‌سرعت با پزشک‌ها و روان‌شناس‌های مد نظرت تماس بگیر.
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
              هیچ‌کس مرخصی گرفتن، ماندن در ترافیک و منتظر ایستادن در صف مطب برای
              یک سوال ساده، جواب آزمایش یا سوال راجع‌به یک داروی خاص را دوست
              ندارد. اگر شما هم از این دسته افراد .هستید، رسا را حتما امتحان
              کنید
            </p>
          </div>
          <div class="item mb-8">
            <Icon fileName="ic_tel.png" />
            <h3>بدون واسطه صحبت کنید</h3>
            <p>
              احتمالا برایتان پیش آمده که به‌جای خود پزشک، منشی یا دستیار او
              پاسخ سوال‌های شما را بدهد یا حتی شما را معاینه کند. با استفاده از
              رسا، این خود .پزشک است که با شما صحبت می‌کند
            </p>
          </div>
          <div class="item">
            <Icon fileName="ic_money.png" />
            <h3>کمتر هزینه کنید</h3>
            <p>
              ،اگر جدای از خستگی، هزینه رفت و آمد مرخصی گرفتن و ویزیت را در نظر
              بگیرید، استفاده از رسا برای شما بسیار به‌صرفه‌تر است. فقط کافی است
              هرجا .نشسته‌اید، تلفن خود را بردارید
            </p>
          </div>
        </div>
      </div>

      <div class="left">
        left
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class SectionFeatureOne extends Vue {}
</script>
