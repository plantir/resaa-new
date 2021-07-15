<style lang="scss" scoped>
.box {
  margin: 2rem;
  .font-style {
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }
  .card_header {
    h2 {
      @extend .font-style;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.07;
      text-align: right;
      color: #212121;
    }
    padding: 2rem 1rem 1rem;
    margin-bottom: 2rem;
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
  .card_body {
    padding-bottom: 2rem;
    > div {
      display: flex;
      padding: 0 1rem 1rem;
      div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 1rem;
      }
      span {
        @extend .font-style;
        font-size: 10px;
        line-height: 1;
        text-align: right;
        color: #707070;
        padding-bottom: 0.8rem;
      }

      span:last-child {
        @extend .font-style;
        font-size: 12px;
        font-weight: bold;
        line-height: 1.08;
        text-align: right;
        color: #212121;
      }
    }
  }
}
</style>
<template>
  <div class="box">
    <v-card>
      <div class="card_header">
        <h2>
          سوابق پزشک
        </h2>
      </div>
      <div class="card_body">
        <div>
          <div>
            <img src="@/assets/img/ic_time.png" alt="" />
          </div>
          <div>
            <span>سابقه طبابت</span>
            <span>{{ 15 | persianDigit }} سال</span>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/img/ic_post_specialist.png" alt="" />
          </div>
          <div>
            <span>فوق تخصص</span>
            <span>روماتولوژی از دانشگاه شهید بهشتی</span>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/img/ic_specialist.png" alt="" />
          </div>
          <div>
            <span>تخصص</span>
            <span>داخلی از دانشگاه شهید بهشتی</span>
          </div>
        </div>

        <div>
          <div>
            <img src="@/assets/img/ic_education.png" alt="" />
          </div>
          <div>
            <span>سابقه علمی</span>
            <span> عضو هیات عملی دانشگاه علوم پزشکی تهران </span>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class component_name extends Vue {
  doctor = {}
}
</script>
