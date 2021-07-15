<style lang="scss" scoped>
.box {
  margin: 5rem 1rem 2rem 1rem;
  .v-card {
    text-align: center;
    border-radius: 8px;
  }
  .img {
    position: relative;
    width: 192px;
    height: 192px;
    margin: 0 auto;
    .v-image {
      // margin-top: -20px;
      position: absolute;
      top: -20px;
    }
    .available {
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      bottom: 30px;
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      color: #058e4b;
      background-color: #e9fbf3;
      border-radius: 30px;
      padding: 0.4rem 0.3rem;
      width: 80px;
    }
  }
  .doctor_name {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: #000000;
    }
    > div {
      display: flex;
      align-items: center;
      span {
        margin: 0.5rem 0;
        font-size: 15px;
        color: #707070;
        img {
          margin-right: -1rem;
          margin-left: 0.5rem;
        }
      }
    }
  }
  .experiement_info {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 2rem 2rem 1rem;
      li {
        > div {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          color: #6c6c6c;
          font-size: 15px;
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
            font-size: 11px;
            font-weight: 600;
            color: #3d3d3d;
          }
          .color_orange {
            color: #f9a429;
          }
          .available {
            text-align: center;
            font-size: 12px;
            font-weight: 500;
            border-radius: 30px;
            padding: 0.4rem 1rem;
            &.online {
              background-color: #e9fbf3;
              color: #058e4b;
              font-size: 12px;
            }
            &.offline {
              background-color: #fbdde2;
              color: #eb5470;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
  .buttons {
    padding: 0 1.5rem 2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.36;
    letter-spacing: normal;
    font-size: 14px;
    text-align: center;
    .increase_credit {
      padding: 1rem;
      margin-bottom: 1.3rem;
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.5);
      background-image: linear-gradient(256deg, #13d1f3, #35d6c1);
      color: #ffffff;
    }
    .cancel {
      padding: 1rem;
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 2px 8px 0 rgba(19, 209, 243, 0.3);
      border: solid 1px #35d6c1;
      background-color: #ffffff;
      color: #35d6c1;
    }
  }
}
</style>
<template>
  <div class="box">
    <v-card>
      <div class="img">
        <v-img
          width="100%"
          height="100%"
          :src="`/api/${doctorInfo.imagePath}`"
          :alt="fullName"
        />
        <span class="available" :class="statusClass">{{ statusText }}</span>
      </div>
      <div class="doctor_name">
        <h3>{{ fullName }}</h3>
      </div>
      <div class="experiement_info">
        <ul>
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
      <div class="buttons">
        <button class="increase_credit">افزایش اعتبار و ارسال</button>
        <button class="cancel">انصراف و بازگشت به صفحه پزشک</button>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
@Component
export default class component_name extends Vue {
  @Prop({})
  readonly doctorInfo!: any
  get fullName() {
    return `${this.doctorInfo.title ? this.doctorInfo.title : ''} ${
      this.doctorInfo.firstName
    } ${this.doctorInfo.lastName}`
  }
  get statusClass() {
    return this.doctorInfo.isCurrentlyAvailable ? 'online' : 'offline'
  }

  get statusText() {
    return this.doctorInfo.isCurrentlyAvailable ? 'در دسترس' : 'خارج از دسترس'
  }
}
</script>
