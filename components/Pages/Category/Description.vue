<style lang="scss">
#specoality-description {
  &.card {
    overflow: hidden;
    z-index: 1;
    position: relative;
    padding: 30px;
    @include media(xl) {
      padding: 70px;
    }
    .resaa-element {
      width: 480px;
      height: 320px;
      position: absolute;
      left: -3px;
      top: 0px;
      opacity: 0.2;
      fill: $secondary-color;
      z-index: -1;
      @include media(sm) {
        display: none;
      }
    }
  }
  h2 {
    color: #0fc7e3;
    margin-bottom: 12px;
    font-weight: 500;
    font-size: 18px;
  }
  h3 {
    color: #0fc7e3;
    padding-right: 20px;
    margin-top: 12px;
    margin-bottom: 2px;
    font-weight: normal;
    font-size: 16px;
    + p {
      padding-right: 20px;
    }
  }
  .content {
    color: #707070;
    font-size: 14px;
    text-align: justify;
    p {
      margin-bottom: 6px;
    }
  }
  .half-width {
    max-width: 100%;
    @include media(xl) {
      max-width: calc(100% - 430px);
    }
  }
  .item {
    ul {
      margin: 0;
      padding: 0;
      li {
        position: relative;
        padding-right: 16px;
        + li {
          margin-top: 8px;
        }
        &:before {
          position: absolute;
          right: -3px;
          top: 8px;
          content: '';
          width: 6px;
          height: 6px;
          background: $secondary-color;
          border-radius: 100%;
          display: inline-block;
        }
      }
    }
    + .item {
      margin-top: 40px;
    }
  }
}
</style>
<template>
  <div class="card" id="specoality-description">
    <div
      class="item"
      v-for="(item, index) in content"
      :key="index"
      :class="{ 'half-width': index == 0 }"
    >
      <div v-html="item.title"></div>
      <div class="content" v-html="item.description"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'

@Component
export default class CategoryDescription extends Vue {
  @Prop()
  content: any
}
</script>
