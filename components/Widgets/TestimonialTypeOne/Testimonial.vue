<style lang="scss" scoped>
.testimonial {
  .header {
    font-size: 12px;
    font-weight: bold;
  }
}
</style>

<template>
  <div class="testimonial d-flex flex-column">
    <div class="header my-3 d-flex justify-space-between align-center">
      <div class="right d-flex align-center">
        <v-avatar size="46">
          <img :src="'/api/' + item.authorImagePath" :alt="item.author" />
        </v-avatar>
        <div class="full-name mr-3">{{ item.author }}</div>
      </div>
      <div class="date">98.12.25 (اینو نداریم)</div>
    </div>
    <div class="content" v-sanitize="item.body"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Testimonial extends Vue {
  @Prop()
  item!: any
}
</script>
