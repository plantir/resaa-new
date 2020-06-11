<style lang="scss" scoped>
.box {
  margin: 2rem;
  .font-style {
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }
  .title {
    h3 {
      @extend .font-style;
      font-size: 16px;
      font-weight: bold;
      line-height: 1.07;
      text-align: right;
      color: #212121;
    }
    a {
      @extend .font-style;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.08;
      color: #13d1f3;
      img {
        padding-right: 0.7rem;
      }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem 1rem;
    position: relative;
    width: 95%;
    &::before {
      background-color: #d9d9d9;
      height: 1px;
      width: 100%;
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
  .card_wrapper {
    display: flex;
    // justify-content: space-around;
    .v-card {
      padding: 0.7rem;
      margin: 2rem 1rem 2rem 0;
      width: 180px;
      height: 242px;
      .wrapper {
        padding: 1rem 0;
        .doctorName {
          @extend .font-style;
          font-size: 14px;
          font-weight: bold;
          line-height: 1.07;
          text-align: right;
          color: #212121;
        }
        .Specialist {
          @extend .title;
          padding: 1.5rem 0 1rem;
          &::after {
            position: absolute;
            bottom: -1px;
            right: 0;
          }
          h3 {
            @extend .font-style;
            font-size: 14px;
            font-weight: bold;
            line-height: 1.07;
            text-align: right;
            color: #707070;
          }
        }
      }
      .numberOfCalls {
        padding-bottom: 0.5rem;
        @extend .font-style;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.07;
        text-align: right;
        color: #4b4b4b;
      }
    }
    .add_doctor {
      border: 1px dashed #13d1f3;
      // border-image: url('@/assets/img/border.png') 50% round;
      // width: 245px;
      // height: 242px;
      padding: 1rem;
      text-align: center;
      display: flex;
      margin: 2rem 2rem 2rem 0;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      div:first-child {
        @extend .font-style;
        font-size: 14px;
        font-weight: 500;
        line-height: 2;
        color: #212121;
      }
      .img {
        padding: 1rem 0;
      }
      .introduce {
        @extend .font-style;
        font-size: 14px;
        font-weight: bold;
        line-height: 1.36;
        color: #13d1f3;
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="box">
      <div class="title">
        <h3>
          متخصصین طب سنتی مشابه
        </h3>
        <a href="">
          مشاهده همه
          <img src="@/assets/img/arrow-left.png" alt="" />
        </a>
      </div>
      <div class="card_wrapper">
        <v-card v-for="n in 3" :key="n">
          <v-img :src="doctor.img || require('@/assets/img/image.png')">
          </v-img>
          <div class="wrapper">
            <div class="doctorName">مصطفی حیدری</div>
            <div class="Specialist">
              <h3>
                دندانپزشک
              </h3>
            </div>
          </div>
          <div class="numberOfCalls">۱۴ تماس موفق</div>
        </v-card>
        <div class="add_doctor">
          <div>
            پزشکی را با این تخصص می‌شناسید؟
          </div>
          <div class="img">
            <img src="@/assets/img/plus.png" alt="" />
          </div>
          <div class="introduce">
            به ما معرفی کنید
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
@Component
export default class component_name extends Vue {
  doctor = {}
  swiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 15,
  }
}
</script>
