<style lang="scss" scoped>
.box {
  // margin: 2rem 2rem 2rem 0;
  // width: 466px;
  .font-style {
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
  }
  .card_header {
    h3 {
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
    }
  }
  .card_footer {
    text-align: center;
    padding: 1rem 0;
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
  <v-layout>
    <v-flex md6 px-3>
      <div class="box">
        <v-card>
          <div class="card_header">
            <h3>سوابق پزشک</h3>
          </div>
          <div class="card_body">
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
                <span>{{ doctor.aboutDoctor.join(',') }}</span>
              </div>
            </div>
          </div>
          <!-- <div class="card_footer">
            <a href>مشاهده همه سوابق</a>
          </div>-->
        </v-card>
      </div>
    </v-flex>
    <v-flex md6 px-3>
      <div class="boxes_wrapper">
        <!-- <div> -->
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
        <!-- </div> -->
      </div>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import { Doctor } from '~/models/Doctor'
@Component
export default class component_name extends Vue {
  @Prop()
  doctor!: Doctor
}
</script>
