<style lang="scss" scoped>
.box {
  margin: 2rem;
  .v-card {
    border-radius: 8px;
    padding: 0 1rem;
    .card_header {
      h3 {
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.38;
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
    .card_body {
      .text {
        font-size: 14px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: normal;
        text-align: right;
        color: #212121;
      }
      .upload_wrapper {
        padding: 1.5rem 0 2rem;
        position: relative;
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
        .image_wrapper {
          .img {
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 133px;
            height: 133px;
            margin-right: 5px;

            border-radius: 4px;
            border: 2px dashed #35d6c1;
            span {
              font-size: 15px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              padding-top: 1rem;
              line-height: 1.4;
              letter-spacing: normal;
              text-align: center;
              color: #35d6c1;
            }
          }
        }
      }
      .hint {
        > div {
          display: flex;
          // justify-content: space-between;
          align-items: center;
          height: 60px;
          span {
            display: flex;
            align-items: center;
            img {
              width: 32px;
              height: 32px;
            }
          }
          span:last-child {
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            padding: 0 0.8rem;
            line-height: 2;
            letter-spacing: normal;
            text-align: right;
            color: #212121;
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
      <div class="card_header">
        <h3>
          بارگزاری تصاویر آزمایش
        </h3>
      </div>
      <div class="card_body">
        <div class="text">
          با استفاده از گزینه زیر، تصاویر صفحات آزمایش خود را به‌ترتیب بارگزاری
          کنید.
        </div>
        <div class="upload_wrapper">
          <div class="image_wrapper">
            <div class="img">
              <img src="@/assets/img/experiement/plus.png" alt="" />
              <span>
                افزودن تصویر
              </span>
            </div>
            <!-- <a href="">
            </a> -->
          </div>
        </div>
        <div class="hint">
          <div>
            <span>
              <img src="@/assets/img/experiement/attention@2x.png" alt="" />
            </span>
            <span>
              دریافت پاسخ آزمایش حداکثر ۷۲ ساعت طول می‌کشد
            </span>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
@Component
export default class component_name extends Vue {}
</script>
