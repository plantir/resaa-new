<style lang="scss" scoped>
.intro {
  padding: 0 0 50px;
  margin-top: -40px;
  min-height: 620px;
  @include media(sm) {
    margin-top: 0;
    padding: 30px 0;
    min-height: 800px;
  }
  .doctor-bg {
    background: url('/images/home/intro_doctor_mobile.webp') no-repeat;
    position: absolute;
    width: 240px;
    height: 244px;
    left: -80px;
    top: -40px;
    z-index: 1;
    @include media(sm) {
      background: url('/images/home/intro_doctor_desktop.webp') no-repeat;
      width: 640px;
      height: 649px;
      left: 50px;
      top: -20px;
    }
  }
  .bg {
    background: url('/images/home/img_phone.webp') no-repeat;
    width: 100%;
    height: 1019px;
    position: absolute;
    top: -100px;
    background-size: 100%;
    background-position: 0px 0;
    @include media(sm) {
      background-size: unset;
      background-position: unset;
    }
  }

  .intro-text {
    position: relative;
    .right {
      width: 60%;
      @include media(sm) {
        width: 500px;
      }
      h1 {
        line-height: 35px;
        font-size: 16px;
        @include media(sm) {
          line-height: 45px;
          font-size: 26px;
        }
        ::v-deep {
          span {
            color: #13d1f3;
            position: relative;
            &::before {
              content: '';
              height: 5px;
              border-radius: 10px;
              background-color: #13d1f3;
              position: absolute;
              bottom: -5px;
              right: 0;
              width: 100%;
            }
          }
        }
      }
      p {
        font-weight: 500;
        font-size: 10px;
        line-height: 24px;
        color: #5e696e;
        @include media(sm) {
          font-size: 16px;
        }
      }
    }
    .resaa-btn {
      display: none;
      font-size: 1.3rem;
      min-width: 320px;
      @include media(sm) {
        display: block;
        margin-top: 40px;
      }
    }
  }
}
</style>

<template>
  <section class="intro">
    <div class="doctor-bg"></div>

    <div class="bg"></div>

    <div class="intro-text">
      <v-container>
        <div class="right">
          <template v-if="pageInfo.h1">
            <h1 v-html="pageInfo.h1"></h1>
            <p class="text-justify mt-3">
              {{ pageInfo.description }}
            </p>
          </template>
          <v-skeleton-loader type="article" v-else> </v-skeleton-loader>
        </div>
        <v-btn class="resaa-btn" color="primary" x-large @click="onDoctors">
          مشاهده لیست پزشکان
        </v-btn>
      </v-container>
    </div>

    <Doctors :doctors="doctors" :loading="loading" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Doctors from './Doctors.vue'
import { Doctor } from '~/models/Doctor'

@Component({
  components: {
    Doctors,
  },
})
export default class Intro extends Vue {
  @Prop()
  doctors!: Doctor[]

  @Prop({
    type: Boolean,
    required: true,
  })
  readonly loading!: Boolean

  @Prop({
    type: Object,
    required: true,
  })
  readonly pageInfo!: Object

  onDoctors() {
    this.$router.push('/doctors')
  }
}
</script>
