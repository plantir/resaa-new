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
      font-size: 16px;
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
      width: 95%;
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
  .wrapper {
    .comments_wrapper {
      .comment_item {
        display: flex;
        width: 100%;
        padding: 2rem 2rem 1rem;
        position: relative;
        &::before {
          background-color: #d9d9d9;
          height: 1px;
          width: 92%;
          content: '';
          position: absolute;
          bottom: 0;
          right: 20px;
        }
        &::after {
          background-color: #f9a429;
          height: 3px;
          width: 30px;
          content: '';
          position: absolute;
          bottom: -1px;
          right: 20px;
        }
        .right_side {
          display: flex;
          flex-direction: column;
          width: 20%;
          span {
            @extend .font-style;
            font-size: 14px;
            font-weight: 600;
            line-height: 2;
            padding-top: 1rem;
            text-align: right;
            color: #212121;
          }
          span:last-child {
            @extend .font-style;
            font-size: 10px;
            font-weight: 500;
            line-height: 1;
            padding-top: 0.5rem;
            text-align: right;
            color: #6c6c6c;
          }
        }
        .left_side {
          width: 70%;
          position: relative;
          .message_text {
            padding: 1rem 0;
            @extend .font-style;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.71;
            text-align: right;
            color: #4b4b4b;
            margin-right: 20px;
            @include media(xl) {
              margin-right: 0;
            }
          }
          min-height: 100px;
          &::before {
            content: '';
            border: 1px solid #d9d9d9;
            height: 100%;
            position: absolute;
            right: -40px;
            margin-right: 20px;
            @include media(xl) {
              margin-right: 0;
            }
          }
        }
      }
      .agree_comment {
        display: flex;
        align-items: center;
        padding: 1rem 1.5rem 1rem;
        .agree_question {
          @extend .font-style;
          font-size: 12px;
          font-weight: bold;
          line-height: 1.08;
          text-align: right;
          color: #707070;
        }
        .yes_or_no {
          padding-right: 2rem;
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
      .answer_wrapper {
        width: 94%;
        display: flex;
        justify-content: flex-end;
        padding-top: 1rem;
        padding-bottom: 2rem;
        .comment_answer {
          display: flex;
          padding: 1rem;
          background-color: #f2f2f2;
          border-radius: 10px;
          width: 88%;
          @include media(xl) {
            width: 92%;
          }
          .support {
            display: flex;
            flex-direction: column;
            width: 20%;
            span {
              @extend .font-style;
              font-size: 14px;
              font-weight: 600;
              line-height: 2;
              padding-top: 1rem;
              text-align: right;
              color: #212121;
            }
            span:last-child {
              @extend .font-style;
              font-size: 10px;
              font-weight: 500;
              line-height: 1;
              padding-top: 0.5rem;
              text-align: right;
              color: #6c6c6c;
            }
          }
          .support_answer {
            width: 70%;
            position: relative;

            .support_text {
              padding: 1rem 0;
              @extend .font-style;
              font-size: 14px;
              font-weight: bold;
              line-height: 1.36;
              text-align: right;
              color: #212121;
              margin-right: 20px;
              @include media(xl) {
                margin-right: 0;
              }
            }
            min-height: 100px;
            &::before {
              content: '';
              border: 1px solid #d9d9d9;
              height: 100%;
              position: absolute;
              right: -40px;
              margin-right: 30px;
              @include media(xl) {
                margin-right: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="box">
    <div class="title">
      <h2>نظرات مراجعین</h2>
    </div>
    <div class="wrapper">
      <div
        class="comments_wrapper"
        v-for="comment in comments"
        :key="comment.id"
      >
        <div class="comment_item">
          <div class="right_side">
            <span>{{ comment.authorDisplayName }}</span>
            <span>
              در تاریخ
              {{
                comment.createdAt | persianDate('jDD jMMM jYYYY') | persianDigit
              }}
            </span>
          </div>
          <div class="left_side">
            <div class="message_text">
              <span>
                {{ comment.feedback }}
              </span>
            </div>
          </div>
        </div>
        <div class="agree_comment">
          <div class="agree_question">با این نظر موافقید؟</div>
          <div class="yes_or_no">
            <span @click="aggreeComment(comment)">
              {{ comment.likeCount | persianDigit }} بله
            </span>
            <span @click="disaggreeComment(comment)">
              {{ comment.dislikeCount | persianDigit }} خیر
            </span>
          </div>
        </div>
        <!-- <div class="answer_wrapper" v-if="n < 2">
          <div class="comment_answer">
            <div class="support">
              <span>پاسخ پشتیبانی</span>
              <span>در تاریخ ۶ آذر ۱۳۹۸</span>
            </div>
            <div class="support_answer">
              <div class="support_text">
                <span>
                  از این تماس بسیار راضی بودن. خانم دکتر با دقت به حرف‌های من
                  گوش کرد و راهکار مناسب بهم .پیشنهاد کرد .

                  <br />
                  <br />
                  در نهایت خیلی خوشحالم که مجبور نشدن تا مطب برم و توی ترافیک
                  بمونم
                </span>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
@Component
export default class component_name extends Vue {
  @Prop()
  doctor!: any
  comments = []
  async mounted() {
    let { result } = await this.$service.doctors.getComments(
      this.doctor.subscriberNumber
    )
    this.comments = result.surveys
  }

  async aggreeComment(comment: any) {
    if (!this.$auth.loggedIn) {
      return this.$toast
        .warning()
        .showSimple(
          'برای تایید یا عدم تایید نظر ابتدا باید وارد حساب کاربری خود شوید'
        )
    }
    if (comment.userAction == 2) {
      this.$service.callbookSurveys.withdrawSurvey(comment.id)
    } else {
      this.$service.callbookSurveys.likeSurvey(comment.id)
    }
  }
  async disaggreeComment(comment: any) {
    if (!this.$auth.loggedIn) {
      return this.$toast
        .warning()
        .showSimple(
          'برای تایید یا عدم تایید نظر ابتدا باید وارد حساب کاربری خود شوید'
        )
    }
    if (comment.userAction == 1) {
      this.$service.callbookSurveys.withdrawSurvey(comment.id)
    } else {
      this.$service.callbookSurveys.dislikeSurvey(comment.id)
    }
  }
}
</script>
