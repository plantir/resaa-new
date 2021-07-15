<style lang="scss" scoped>
.package {
  box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.16);
  border-radius: 15px !important;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @include media(sm) {
    width: 256px;
  }
  @include media(xl) {
    width: 350px;
  }
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 210px;
    .border-white {
      border: 1px solid;
      border-radius: 100%;
      padding: 15px;
      &.one {
        border-color: rgb(255, 255, 255, 0.1);
      }
      &.two {
        border-color: rgb(255, 255, 255, 0.3);
      }
      &.three {
        border-color: rgb(255, 255, 255, 0.5);
      }
      &.four {
        border-color: rgb(255, 255, 255, 0.8);
      }
    }
    .watch {
      height: 84px;
      width: 84px;
      position: relative;
      background: url('/images/watch.png');
      background-size: cover;
    }
    .count {
      position: absolute;
      top: 22px;
      bottom: 0;
      margin: 0 auto;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      border-radius: 100%;
      width: 38px;
      height: 38px;
    }
    .name {
      position: absolute;
      bottom: 10px;
      color: #fff;
      font-weight: bold;
      font-size: 21px;
      // margin-top: 20px;
    }
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    // height: 250px;
    padding: 0 20px;
    @include media(sm) {
      justify-content: space-between;
    }
    .main-title {
      font-size: 13px;
      font-weight: 900;
      margin-top: 20px;
      color: #000000;
      @include media(sm) {
        font-size: 18px;
      }
    }
    .desc {
      color: #767676;
      line-height: 24px;
      font-size: 12px;
      text-align: center;
      font-weight: bold;
      height: 65px;
      overflow: hidden;
      text-overflow: ellipsis;
      @include media(sm) {
        font-size: 16px;
        height: 85px;
      }
    }
    .price {
      font-size: 15px;
      font-weight: bold;
    }
    button {
      text-align: center;
      line-height: 40px;
      border-radius: 5px;
      width: 144px;
      height: 38px;
      color: #fff;
      @include media(sm) {
        width: 192px;
        height: 40px;
      }
    }
  }
}
</style>

<template>
  <v-card class="package">
    <div class="top" :style="classBackGround">
      <div class="border-white one">
        <div class="border-white two">
          <div class="border-white three">
            <div class="border-white four">
              <div class="watch">
                <div class="count" :style="classcolor">
                  {{ count | persianDigit }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="name">
        {{ name }}
      </div>
    </div>

    <div class="bottom">
      <div class="main-title">
        {{ title }}
      </div>
      <div class="desc">
        {{ desc }}
      </div>
      <div class="price" :style="classcolor">
        {{ price | currency | persianDigit }} تومان
      </div>
      <button
        type="button"
        :style="classBackGround"
        class="mt-2 mb-5"
        @click="$emit('click', price)"
      >
        انتخاب بسته
      </button>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Package extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly color!: String

  @Prop({
    type: String,
    required: true,
  })
  readonly name!: String

  @Prop({
    type: Number,
    required: true,
  })
  readonly count!: Number

  @Prop({
    type: String,
    required: true,
  })
  readonly title!: String

  @Prop({
    type: String,
    required: true,
  })
  readonly desc!: String

  @Prop({
    type: Number,
    required: true,
  })
  readonly price!: Number

  get classcolor() {
    return {
      color: this.color,
    }
  }

  get classBackGround() {
    return {
      backgroundColor: this.color,
    }
  }
}
</script>
