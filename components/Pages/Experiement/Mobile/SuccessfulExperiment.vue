<style lang="scss" scoped>
.gradient_background {
  position: relative;
  border: 1px solid #ffffff;
  > div {
    width: 100%;
    height: 140px;
    position: absolute;
    width: 100%;
    top: 0;
    background-image: linear-gradient(256deg, #13d1f3, #35d6c1);
  }
}
.box {
  margin: 3rem 1.5rem 1.5rem;
  .v-card {
    border-radius: 8px;
    text-align: center;
    .image {
      padding-top: 2rem;
    }
    .success_text {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.06;
      text-align: center;
      color: #000000;
    }
    .wrapper {
      display: flex;
      flex-direction: column;
      margin: 3rem 3rem 1rem;
      @include media(370) {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
      }
      .right_side {
        display: flex;
        justify-content: center;
        .days {
          display: flex;
          justify-content: center;
          flex-direction: column;
          span:first-child {
            font-size: 14px;
            font-weight: bold;
            line-height: 1.07;
            text-align: center;
            color: #f9a429;
            padding: 0 1rem;
          }
          .border {
            border-right: 1px solid #6c6c6c;
          }
          span:last-child {
            font-size: 10px;
            font-weight: normal;
            line-height: 1;
            text-align: center;
            color: #000000;
            padding: 0.2rem 1rem 0;
          }
        }
      }
      .left_side {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.07;
        text-align: center;
        color: #000000;
        padding-top: 1rem;
        @include media(370) {
          padding-top: 0;
        }
      }
    }
    .button {
      padding: 1rem 0 2rem;
      button {
        padding: 0.8rem 0;
        width: 70%;
        border-radius: 8px;
        color: #ffff;
        background-image: linear-gradient(256deg, #13d1f3, #35d6c1);
      }
    }
  }
  .hint {
    display: flex;
    padding: 2rem 0 3rem;
    > div {
      padding-left: 1rem;
      font-size: 12px;
      font-weight: 500;
      line-height: 2;
      text-align: right;
      color: #6c6c6c;
      img {
        height: 32px;
        width: 32px;
      }
    }
  }
  .return_home {
    width: 100%;
    border: 1px solid;
    box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.3);
    border: solid 1px #35d6c1;
    text-align: center;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    padding: 0.7rem;
    a {
      color: #35d6c1;
    }
  }
  .description {
    .title {
      h3 {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.36;
        text-align: right;
        color: #212121;
      }
      padding: 2rem 0 1rem;
      margin-bottom: 1rem;
      position: relative;
      width: 100%;
      &::before {
        background-color: #d9d9d9;
        height: 1px;
        width: 98%;
        content: '';
        position: absolute;
        bottom: 0;
      }
      &::after {
        background-color: #f9a429;
        height: 3px;
        width: 30px;
        content: '';
        position: absolute;
        bottom: -1px;
        right: 0;
      }
    }
    .body {
      .body_wrapper {
        display: flex;
        padding: 1rem 0 0.5rem;
        > div {
          padding-left: 0.5rem;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.79;
          text-align: right;
          color: #212121;
        }
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="gradient_background">
      <div></div>
    </div>
    <div class="box">
      <v-card>
        <div class="image">
          <img src="~assets/img/experiement/ic_success_large.png" alt="" />
        </div>
        <div class="success_text">
          <span>
            آزمایش شما با موفقیت ارسال شد.
          </span>
        </div>
        <div class="wrapper">
          <div class="right_side">
            <div class="days">
              <span>
                {{ 59 | persianDigit }}
              </span>
              <span>دقیقه</span>
            </div>
            <div class="days">
              <span class="border">
                {{ 59 | persianDigit }}
              </span>
              <span>ساعت</span>
            </div>
            <div class="days">
              <span class="border">{{ 47 | persianDigit }}</span>
              <span>روز</span>
            </div>
          </div>
          <div class="left_side">
            <span>تا دریافت پاسخ</span>
          </div>
        </div>
        <div class="button">
          <button>پیگیری آزمایش</button>
        </div>
      </v-card>
      <div class="hint">
        <div>
          <img src="~assets/img/experiement/attention@2x.png" alt="" />
        </div>
        <div>
          هنگامی که پزشک نتیجه آمایش شما را ارسال کند، از طریق پیامک شما را مطلع
          می‌کنیم.
        </div>
      </div>
      <div class="return_home">
        <a href="/">
          بازگشت به صفحه اصلی
        </a>
      </div>
      <div class="description">
        <div class="title">
          <h3>
            پاسخ سوالاتی که ممکن است برایتان پیش بیاید.
          </h3>
        </div>
        <div class="body">
          <div class="body_wrapper">
            <div>
              <img src="~assets/img/experiement/ic_cashback.png" alt="" />
            </div>
            <div>
              در صورت عدم رضایت شما از تماس، تمامی هزینه به حساب شما بازگردانده
              می‌شود.
            </div>
          </div>
          <div class="body_wrapper">
            <div>
              <img
                src="~assets/img/experiement/ic_successful_call.png"
                alt=""
              />
            </div>
            <div>
              در صورت عدم برقراری یا قطعی تماس در لحظات ابتدایی مکالمه، هزینه‌ای
              از حساب شما کسر نمی‌گردد.
            </div>
          </div>
          <div class="body_wrapper">
            <div>
              <img src="~assets/img/experiement/ic_timer.png" alt="" />
            </div>
            <div>
              هزینه مشاوره، بر حسب دقیقه محاسبه می‌شود و باقیمانده اعتبار شما در
              تماس‌های بعدی قابل استفاده است.
            </div>
          </div>
          <div class="body_wrapper">
            <div>
              <img src="~assets/img/experiement/ic_select.png" alt="" />
            </div>
            <div>
              شما می‌توانید با اعتباری که خریداری می‌کنید، با هر پزشک یا مشاور
              رسا که بخواهید صحبت کنید.
            </div>
          </div>
          <div class="body_wrapper">
            <div>
              <img src="~assets/img/experiement/ic_select_2.png" alt="" />
            </div>
            <div>
              رسا دارای گواهی اعتماد الکترونیکی e-namad است و پرداخت شما از طریق
              درگاه امن بانکی انجام می شود.
            </div>
          </div>
          <div class="body_wrapper">
            <div>
              <img src="~assets/img/experiement/ic_support.png" alt="" />
            </div>
            <div>
              پشتیبانی رسا در کلیه مراحل استفاده از سامانه در کنار شماست.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
@Component
export default class component_name extends Vue {}
</script>
