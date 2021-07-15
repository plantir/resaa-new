<style lang="scss" scoped>
.box {
  margin: 60px 0;
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
    a {
      @extend .font-style;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: bold;
      line-height: 1.08;
      color: var(--v-primary-base);
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
      height: 2px;
      width: 100%;
      content: '';
      position: absolute;
      bottom: 0;
    }
    &::after {
      background-color: var(--v-primary-base);
      height: 2px;
      width: 30px;
      content: '';
      position: absolute;
      bottom: 0px;
      right: 10px;
    }
  }
  .card_wrapper {
    display: flex;
    // justify-content: space-around;
    margin-top: 16px;
    .item {
      margin-left: 24px;
    }
    .v-card {
      width: 180px;
      height: 242px;
      padding: 8px;
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
          &::before {
            height: 2px;
          }
          &::after {
            background-color: var(--v-secondary-base);
            position: absolute;
            bottom: 0px;
            height: 2px;
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
    .add-doctor {
      border: 1px dashed #13d1f3;
      // border-image: url('@/assets/img/border.png') 50% round;
      // width: 245px;
      // height: 242px;
      cursor: pointer;
      padding: 1rem;
      text-align: center;
      display: flex;
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
        <h2>متخصصین {{ doctor.specialtyTitle }} مشابه</h2>
        <nuxt-link :to="otherDoctorsLink">
          مشاهده همه
          <img src="@/assets/img/arrow-left.png" alt />
        </nuxt-link>
      </div>
      <div class="card_wrapper">
        <nuxt-link
          class="item"
          :to="doctorLink(doctor)"
          v-for="doctor in doctor.relatedDoctors.slice(0, 3)"
          :key="doctor.id"
        >
          <v-card>
            <div class="text-center">
              <v-img height="110" :src="`/api/${doctor.imagePath}`"></v-img>
            </div>
            <div class="wrapper">
              <div class="doctorName">{{ doctor.fullNameWithTitle }}</div>
              <div class="Specialist">
                <h3>{{ doctor.specialtyTitle }}</h3>
              </div>
            </div>
            <div class="numberOfCalls">۱۴ تماس موفق</div>
          </v-card>
        </nuxt-link>

        <div class="add-doctor" @click="addDoctor">
          <div>پزشکی را با این تخصص می‌شناسید؟</div>
          <div class="img">
            <img src="@/assets/img/plus.png" alt />
          </div>
          <div class="introduce">به ما معرفی کنید</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
import RecommendationDoctorCompoent from '~/components/Common/Doctor/Recommendation.vue'
import { Doctor } from '~/models/Doctor'
@Component({
  components: { RecommendationDoctorCompoent },
})
export default class component_name extends Vue {
  @Prop()
  doctor!: Doctor
  swiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 15,
  }

  get otherDoctorsLink() {
    let category = this.doctor.categories.find((item) => {
      return (
        item.type == 2 || item.englishTitle == this.doctor.specialtyEnglishTitle
      )
    })
    if (category) {
      return `/categories/${category.englishTitle.replace(/ /g, '-')}/${
        category.id
      }`
    }
    return ''
  }

  doctorLink(doctor: Doctor) {
    return `/doctors/${(
      doctor.specialtyEnglishTitle || doctor.specialtyEnglishTitle
    )
      .toLowerCase()
      .replace(/ /g, '-')}/${doctor.subscriberNumber}`
  }

  async addDoctor() {
    this.$dialog.destroy()
    let data = await this.$dialog.show({
      component: RecommendationDoctorCompoent,
    })
    if (data) {
      this.$toast.success().showSimple('از وقتی که گذاشتید سپاس گزاریم')
    }
  }
}
</script>
