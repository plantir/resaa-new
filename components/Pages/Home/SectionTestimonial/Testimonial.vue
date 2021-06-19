<style lang="scss" scoped>
.testimonial {
  transition: all 0.35s ease-in;
  transform: scale(0.8);
  opacity: 0.6;
  @include media(xs-only) {
    padding: 0 20px;
  }
  .card {
    background-color: #fff;
    box-shadow: 0 15px 40px 0 rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    // max-width: 550px;
    direction: rtl;
    position: relative;
    @include media(xs-only) {
      width: 100%;
    }
    &::before {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 21px 19px 0 19px;
      border-color: #ffffff transparent transparent transparent;
      content: '';
      position: absolute;
      bottom: -19px;
      right: 0;
      left: 0;
      margin: auto;
    }

    .content {
      position: relative;
      &::before {
        background-image: linear-gradient(to bottom, #13d1f3, #35d6c1);
        border-radius: 100%;
        width: 64px;
        height: 64px;
        content: '';
        position: absolute;
        top: -52px;
        right: 0;
        left: 0;
        margin: auto;
        @include media(sm) {
          right: 20px;
          left: auto;
        }
      }
      &::after {
        background: url('/images/icons/quote-2.png') no-repeat;
        width: 40px;
        height: 32px;
        content: '';
        position: absolute;
        top: -36px;
        right: 0;
        left: 0;
        margin: auto;
        @include media(sm) {
          right: 31px;
          left: auto;
        }
      }
    }
    p {
      line-height: 28px;
      margin-top: 20px;
    }
  }

  .v-avatar {
    margin-top: 50px;
    border: 1px solid #9ee7db;
    padding: 2px;
    // img {
    //   width: 65px;
    //   height: 65px;
    //   border-radius: 100%;
    // }
  }
  .author {
    color: #212121;
    font-size: 12px;
    font-weight: bold;
    line-height: 25px;
  }
}
</style>

<template>
  <div class="testimonial d-flex flex-column align-center">
    <div class="card">
      <div class="content">
        <p class="text-justify pa-5">
          {{ content.body }}
        </p>
      </div>
    </div>
    <div class="avatar d-flex flex-column">
      <v-avatar size="70">
        <v-img src="/images/home/doctors/1.png" alt />
      </v-avatar>
    </div>
    <div class="author">
      {{ content.author }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Testimonial extends Vue {
  @Prop({
    type: Object,
  })
  content!: Object
}
</script>
