<style lang="scss" scoped>
.testimonial-type-one {
  padding: 25px 15px;
  .main-title {
    font-size: 16px;
    font-weight: 800;
    color: #212121;
  }
}
</style>

<template>
  <v-card class="testimonial-type-one">
    <div class="main-title">چگونه دیگران از رسا سود بردند</div>
    <div class="items">
      <Testimonial v-for="(item, index) in items" :item="item" :key="index" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Testimonial from './Testimonial.vue'

@Component({
  components: {
    Testimonial,
  },
})
export default class TestimonialTypeOne extends Vue {
  @Prop()
  items!: any[]
}
</script>
