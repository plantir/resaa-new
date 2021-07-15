<style lang="scss" scoped>
.box {
  margin: 2rem;
  .v-card {
    text-align: center;
    border-radius: 8px;
  }
  .experiement_info {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 1rem 1.5rem;
      li {
        > div {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          color: #6c6c6c;
          font-size: 14px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.07;
          letter-spacing: normal;
          text-align: right;
          padding: 1rem 0;
          color: #212121;
          .title {
            font-size: 16px;
            font-weight: bold;
            color: #000000;
            line-height: 1.06;
            padding-bottom: 1rem;
          }
          .text {
            font-size: 12px;
            font-weight: 500;
          }
          .color_orange {
            color: #f9a429;
          }
          .available {
            text-align: center;
            font-size: 12px;
            font-weight: 500;
            color: #058e4b;
            background-color: #e9fbf3;
            border-radius: 30px;
            padding: 0.4rem 1rem;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="box">
    <v-card>
      <div class="experiement_info">
        <ul>
          <li>
            <div>
              <span class="title">
                دکتر مهیا ملکی
              </span>
              <span class="available">
                در دسترس
              </span>
            </div>
          </li>
          <li>
            <div>
              <span>هزینه بررسی آزمایش:</span>
              <span class="color_orange"
                >{{ 10000 | currency | persianDigit }} تومان</span
              >
            </div>
          </li>
          <li>
            <div>
              <span class="text"
                >برای ارسال آزمایش، لطفا اعتبار خود را افزایش دهید.</span
              >
            </div>
          </li>
          <li>
            <div>
              <span>اعتبار حساب شما:</span>
              <span>{{ 0 | currency | persianDigit }} ریال</span>
            </div>
          </li>
        </ul>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
@Component
export default class component_name extends Vue {}
</script>
