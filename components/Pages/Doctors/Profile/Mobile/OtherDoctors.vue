<style lang="scss" scoped>
.box {
  margin: 2rem;
}
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
  a {
    @extend .font-style;
    display: flex;
    align-items: center;
    font-size: 12px;
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

.swiper-container {
  margin-right: 2.5rem;
  padding: 10px;
  .swiper-slide {
    width: 180px;
    .v-card {
      padding: 0.7rem;
      .wrapper {
        padding: 2rem 0;
        .doctorName {
          @extend .font-style;
          font-size: 14px;
          font-weight: bold;
          line-height: 1.07;
          text-align: right;
          color: #212121;
          white-space: nowrap;
        }
        .Specialist {
          @extend .title;
          padding: 2rem 0 1rem;
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
  }
}
</style>
<template>
  <section>
    <div class="box">
      <div class="title">
        <h2>متخصصین طب سنتی مشابه</h2>
        <nuxt-link :to="otherDoctorsLink">
          مشاهده همه
          <img src="@/assets/img/arrow-left.png" alt />
        </nuxt-link>
      </div>
    </div>
    <swiper ref="swiper" :options="swiperOptions">
      <swiper-slide v-for="doctor in doctor.relatedDoctors" :key="doctor.id">
        <nuxt-link class="item" :to="doctorLink(doctor)">
          <v-card>
            <div class="text-center">
              <img height="110" :src="`/api/${doctor.imagePath}`" />
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
      </swiper-slide>
    </swiper>
  </section>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
import { Doctor } from '~/models/Doctor'
@Component
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
    return `/categories/${category.englishTitle.replace(/ /g, '-')}/${
      category.id
    }`
  }
  doctorLink(doctor: Doctor) {
    return `/doctors/${doctor.specialtyEnglishTitle
      .toLowerCase()
      .replace(/ /g, '-')}/${doctor.subscriberNumber}`
  }
}
</script>
