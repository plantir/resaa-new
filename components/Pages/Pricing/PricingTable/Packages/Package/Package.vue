<style lang="scss" scoped>
.package {
  box-shadow: 0 15px 50px 0 rgba(0, 0, 0, 0.16);
  border-radius: 8px !important;
  background-color: #fff;
  .top {
    position: relative;
    height: 210px;
    // overflow: hidden;
    &::after,
    &::before {
      // position: absolute;
      // background: inherit;
      // right: 0;
      // bottom: -18px;
      // content: '';
      // width: 50%;
      // height: 36px;
      // border-radius: 100%;
    }
    &::after {
      //   height: 36px;
      //   bottom: -18px;
      //   background: #fff;
      //   right: auto;
      //   left: 0;
    }
    .count {
      background-color: #fff;
      border-radius: 100%;
      width: 38px;
      height: 38px;
    }
    .name {
      color: #fff;
      font-weight: bold;
      font-size: 21px;
    }
  }

  .bottom {
    height: 250px;
    padding: 0 20px;
    .main-title {
      font-size: 16px;
      font-weight: bold;
    }
    .desc {
      color: #767676;
      line-height: 24px;
      font-size: 16px;
    }
    button {
      text-align: center;
      line-height: 40px;
      border-radius: 5px;
      width: 192px;
      color: #fff;
    }
  }
}
</style>

<template>
  <v-card class="package d-flex flex-column justify-space-between">
    <div class="top d-flex flex-column align-center" :style="classBackGround">
      <div class="count d-flex align-center justify-center" :style="classcolor">
        {{ count | persianDigit }}
      </div>
      <div class="name mt-5">
        {{ name }}
      </div>
    </div>

    <div class="bottom d-flex flex-column justify-space-between align-center">
      <div class="main-title mt-5">
        {{ title }}
      </div>
      <div class="desc text-center">
        {{ desc }}
      </div>
      <div class="price mt-12" :style="classcolor">
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
import { Component, Vue, Prop } from 'vue-property-decorator'

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
