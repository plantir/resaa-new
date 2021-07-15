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
      line-height: 1.38;
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
  .content {
    @extend .font-style;
    font-size: 14px;
    font-weight: 500;
    padding: 0.8rem 0.6rem 0;
    line-height: 2;
    text-align: right;
    color: #3d3d3d;
  }
}
</style>
<template>
  <div class="box">
    <div class="title">
      <h2>خدمات پزشک</h2>
    </div>
    <div class="content">
      <span v-for="(item, index) in doctor.categories" :key="item.id">
        <nuxt-link v-if="item.isPageActive" :to="categoryLink(item)">{{
          item.title
        }}</nuxt-link>
        <span v-else>{{ item.title }}</span>
        <template v-if="index < doctor.categories.length - 1">,</template>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'nuxt-property-decorator'
import { Doctor } from '~/models/Doctor'
@Component
export default class component_name extends Vue {
  @Prop()
  doctor!: Doctor

  categoryLink(category: any) {
    return `/categories/${
      category.englishTitle
        ? category.englishTitle.replace(/ /g, '-')
        : 'undifiend'
    }/${category.id}`
  }
}
</script>
