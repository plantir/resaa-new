<style lang="scss" scoped>
.box {
  margin: 2rem;
  .font-style {
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }
  .title {
    h2 {
      @extend .font-style;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.07;
      text-align: right;
      color: #212121;
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
  .comment_wrapper {
    padding: 1.2rem 1.5rem 0.5rem;
    .author_name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        @extend .font-style;
        font-size: 14px;
        font-weight: 500;
        line-height: 2;
        text-align: right;
        color: #212121;
      }
      span:last-child {
        @extend .font-style;
        font-size: 10px;
        font-weight: 500;
        line-height: 1;
        text-align: right;
        color: #6c6c6c;
      }
    }
    .message {
      .message_text {
        @extend .font-style;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.71;
        text-align: right;
        color: #4b4b4b;
        padding: 1rem 0 1.5rem;
        position: relative;
        width: 100%;
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
          right: 0px;
        }
      }
      .agree_comment {
        padding: 1rem 0;
        display: flex;
        .agree_question {
          @extend .font-style;
          font-size: 12px;
          font-weight: bold;
          line-height: 1.08;
          text-align: right;
          color: #707070;
        }
        .yes_or_no {
          width: 60%;
          text-align: center;
          span {
            @extend .font-style;
            line-height: 1.08;
            font-weight: bold;
            text-align: right;
            color: #707070;
            font-size: 12px;
            background: #f2f2f2;
            padding: 0.2rem 0.8rem;
            border-radius: 5px;
            margin: 0 0.3rem;
          }
        }
      }
      .message_answer {
        background: #f2f2f2;
        border-radius: 10px;
        padding: 0.5rem 1rem 1rem;
        width: 90%;
        margin-right: 2rem;
        .support {
          @extend .author_name;
        }
        .support_answer {
          font-size: 14px;
          font-weight: 500;
          padding-top: 0.5rem;
          line-height: 1.71;
          text-align: right;
          color: #4b4b4b;
        }
      }
    }
  }
}
</style>
<template>
  <div class="box">
    <div class="title">
      <h2>
        نظرات مراجعین
      </h2>
    </div>
    <div class="comment_wrapper" v-for="n in 2" :key="n">
      <div class="author_name">
        <span>محمدرضا محمدی</span>
        <span>در تاریخ ۶ آذر ۱۳۹۸</span>
      </div>
      <div class="message">
        <div class="message_text">
          <span>
            از این تماس بسیار راضی بودن. خانم دکتر با دقت به حرف‌های من گوش کرد
            و راهکار مناسب بهم .پیشنهاد کرد .در نهایت خیلی خوشحالم که مجبور نشدن
            تا مطب برم و توی ترافیک بمونم
          </span>
        </div>
        <div class="agree_comment">
          <div class="agree_question">با این نظر موافقید؟</div>
          <div class="yes_or_no">
            <span>
              ۱۳ بله
            </span>
            <span>
              ۳ خیر
            </span>
          </div>
        </div>
        <div class="message_answer" v-if="n < 2">
          <div class="support">
            <span>پاسخ پشتیبانی</span>
            <span>در تاریخ ۶ آذر ۱۳۹۸</span>
          </div>
          <div class="support_answer">
            <span>
              از این تماس بسیار راضی بودن. خانم دکتر با دقت به حرف‌های من گوش
              کرد و راهکار مناسب بهم پیشنهاد کرد. در نهایت خیلی خوشحالم که مجبور
              نشدن تا مطب برم و توی ترافیک بمونم.
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
