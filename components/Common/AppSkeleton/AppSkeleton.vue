<style lang="scss" scoped></style>

<template>
  <component :is="section" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {
    WeblogDesktop: () => import('./Sections/Weblog/WeblogDesktop.vue'),
    WeblogMobile: () => import('./Sections/Weblog/WeblogMobile.vue'),
    Testimonial: () => import('./Sections/Testimonial/Testimonial.vue'),
    DoctorSwiper: () => import('./Sections/DoctorSwiper/DoctorSwiper.vue'),
  },
})
export default class AppSkeleton extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly section!: String
}
</script>
