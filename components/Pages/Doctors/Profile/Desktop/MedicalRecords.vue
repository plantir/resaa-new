<style lang="scss" scoped>
.box {
  .v-card {
    height: 425px;
    overflow: hidden;
  }
  .font-style {
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }
  .card_header {
    h2 {
      @extend .font-style;
      font-size: 16px;
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
    height: 290px;
    overflow: hidden;
    position: relative;
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
        font-size: 12px;
        font-weight: bold;
        line-height: 1;
        text-align: right;
        color: #707070;
        padding-bottom: 0.8rem;
      }

      span:last-child {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.08;
        text-align: right;
        color: #212121;
      }
      .medical-history-item {
        line-height: 1.8 !important;
      }
    }
  }
  .showMore {
    &.v-card {
      height: auto;
    }
    .card_body {
      height: auto;
    }
  }
  .card_footer {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    a {
      @extend .font-style;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.79;
      color: #35d6c1;
    }
  }
}
.boxes_wrapper {
  .v-card {
    display: flex;
    align-items: center;
    padding: 1.4rem 1rem;
    + .v-card {
      margin-top: 1rem;
    }
    > div {
      display: flex;
      div:last-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 1rem;
      }
      span {
        @extend .font-style;
        font-size: 12px;
        font-weight: bold;
        line-height: 1;
        text-align: right;
        color: #707070;
        padding-bottom: 0.8rem;
      }
      span:last-child {
        font-size: 14px;
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
  <v-row>
    <v-col md="6">
      <div class="box">
        <v-card :class="{ showMore: showMore }">
          <div class="card_header">
            <h2>سوابق پزشک</h2>
          </div>
          <div class="card_body" id="medicalRecords">
            <div>
              <div>
                <img src="@/assets/img/ic_time.png" alt />
              </div>
              <div>
                <span>سابقه طبابت</span>
                <span>{{ 15 | persianDigit }} سال</span>
              </div>
            </div>
            <div v-if="doctor.expertise && doctor.expertise != ' '">
              <div>
                <img src="@/assets/img/ic_post_specialist.png" alt />
              </div>
              <div>
                <span>فوق تخصص</span>
                <span>{{ doctor.expertise }}</span>
              </div>
            </div>
            <div>
              <div>
                <img src="@/assets/img/ic_specialist.png" alt />
              </div>
              <div>
                <span>تخصص</span>
                <span>{{ doctor.specialtyTitle }}</span>
              </div>
            </div>
            <div>
              <div>
                <img src="@/assets/img/ic_education.png" alt />
              </div>
              <div>
                <span>سابقه علمی</span>
                <span class="medical-history-item">
                  {{ doctor.aboutDoctor.join(',') }}
                </span>
              </div>
            </div>
          </div>
          <div class="card_footer">
            <a @click="showMore = !showMore" v-if="showMoreButton">{{
              showMore ? 'مشاهده کمتر' : 'مشاهده بیشتر'
            }}</a>
          </div>
        </v-card>
      </div>
    </v-col>
    <v-col md="6">
      <div class="boxes_wrapper">
        <v-card>
          <div>
            <div>
              <img src="@/assets/img/ic_timer.png" alt />
            </div>
            <div>
              <span>میانگین مدت تماس برای رسیدن به نتیجه:</span>
              <span>۵ دقیقه و ۳۲ ثانیه</span>
            </div>
          </div>
        </v-card>
        <v-card>
          <div>
            <div>
              <img src="@/assets/img/ic_save_money.png" alt />
            </div>
            <div>
              <span>میانگین هزینه تماس با این پزشک:</span>
              <span>۱۵,۹۰۰ تومان</span>
            </div>
          </div>
        </v-card>
        <v-card>
          <div>
            <div>
              <img src="@/assets/img/ic_traffic.png" alt />
            </div>
            <div>
              <span>مدت زمان رفت و آمد در ترافیک:</span>
              <span>صفر</span>
            </div>
          </div>
        </v-card>
        <v-card>
          <div>
            <div>
              <img src="@/assets/img/Page-1.png" alt />
            </div>
            <div>
              <span>مدت زمان انتظار در مطب برای صحبت با پزشک:</span>
              <span>صفر</span>
            </div>
          </div>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Doctor } from '~/models/Doctor'
@Component
export default class component_name extends Vue {
  @Prop()
  doctor!: Doctor
  showMore = false
  showMoreButton = false
  mounted() {
    let medicalDiv = document.querySelectorAll('.card_body > div')
    let calc = 0
    for (let item in medicalDiv) {
      try {
        calc += parseInt(
          window
            .getComputedStyle(medicalDiv[item], null)
            .getPropertyValue('height')
        )
      } catch (error) {}
    }
    if (calc > 290) {
      this.showMoreButton = true
    }
  }
}
</script>
