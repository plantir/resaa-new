<style lang="scss" scoped>
.box {
  margin: 2rem 2rem 2rem 0;
  .font-style {
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }
  .title {
    > div {
      @extend .font-style;
      font-size: 14px;
      font-weight: bold;
      color: #212121;
    }
    h3 {
      @extend .font-style;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.07;
      text-align: right;
      color: #f9a429;
      padding: 1rem 0 0.5rem;
    }
    padding: 2rem 1rem 1rem;
    position: relative;
    width: 100%;
    &::before {
      background-color: #d9d9d9;
      height: 1px;
      width: 90%;
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
      right: 10px;
    }
  }
  .description {
    display: flex;
    > div {
      @extend .font-style;
      padding: 1rem 0.7rem 3rem;
      font-size: 12px;
      font-weight: bold;
      line-height: 1.67;
      text-align: right;
      color: #13d1f3;
      img {
        height: 32px;
        width: 32px;
        margin-top: 7px;
      }
    }
  }
  .time_table {
    .bullet_line_top {
      display: flex;
      justify-content: space-around;
      .shape_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .date {
          display: flex;
          flex-direction: column;
        }
        .circle {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin: 1.5rem 0 0.3rem;
          border: 1px solid #13d1f3;
          div {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #13d1f3;
            border: 1px solid #13d1f3;
          }
        }
        .dot_wrapper {
          .dot {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            margin-top: 3px;
            background-color: #13d1f3;
            border: 1px solid #13d1f3;
          }
        }
      }
    }
    .line_week {
      border-radius: 0 50px 50px 0;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0.5rem 0;
      padding: 0.4rem 1rem;
      .today {
        border: 1px solid #f9a429;
        border-radius: 50px;
        padding: 0.3rem 0;
        color: #f9a429;
        text-align: center;
        width: 30%;
      }
    }
    .bullet_line_bottom {
      @extend .bullet_line_top;
      .circle {
        margin: 0.6rem 0 1.5rem !important;
      }
    }
  }
}
</style>
<template>
  <div class="box">
    <div class="title">
      <div>بازه‌های زمانی دسترسی به پزشک</div>
      <h3>
        بر اساس موقعیت جغرافیای شما (کانادا)
      </h3>
    </div>
    <div class="description">
      <div>
        <img src="@/assets/img/attention.png" alt="" />
      </div>
      <div>
        بعد از نهایی شدن درخواست مشاوره شما، در نزدیک‌ترین بازه زمانی پاسخگویی
        پزشک، ساعت دقیق مشاوره پس از هماهنگی با پزشک و شما قطعی می‌شود.
      </div>
    </div>
    <div class="time_table">
      <div class="bullet_line_top">
        <div class="shape_wrapper"></div>
        <div class="shape_wrapper">
          <div class="img">
            <img src="@/assets/img/moon.png" alt="" />
          </div>
          <div class="date">
            <span>{{ '18:00' | persianDigit }}</span>
            <span>
              {{ '23:59' | persianDigit }}
            </span>
          </div>
          <div class="circle">
            <div></div>
          </div>
          <div class="dot_wrapper">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="shape_wrapper"></div>
      </div>
      <div class="line_week">
        <div>شنبه</div>
        <div class="today">امروز</div>
        <div>دوشنبه</div>
        <!-- <div >سه شنبه</div>
        <div >چهارشنبه</div>
        <div >پنجشنبه</div>
        <div >جمعه</div> -->
      </div>
      <div class="bullet_line_bottom">
        <div class="shape_wrapper">
          <div class="dot_wrapper">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div class="circle">
            <div></div>
          </div>
          <div class="img">
            <img src="@/assets/img/moon_3.png" alt="" />
          </div>
          <div class="date">
            <span>{{ '18:00' | persianDigit }}</span>
            <span>
              {{ '23:59' | persianDigit }}
            </span>
          </div>
        </div>
        <div class="shape_wrapper"></div>
        <div class="shape_wrapper">
          <div class="dot_wrapper">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <div class="circle">
            <div></div>
          </div>
          <div class="img">
            <img src="@/assets/img/moon_3.png" alt="" />
          </div>
          <div class="date">
            <span>{{ '18:00' | persianDigit }}</span>
            <span>
              {{ '23:59' | persianDigit }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
@Component
export default class component_name extends Vue {}
</script>
