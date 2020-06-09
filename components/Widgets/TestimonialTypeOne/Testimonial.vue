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
          <img src="/images/avatar/1.jpg" alt="علی پامناری" />
        </v-avatar>
        <div class="full-name mr-3">
          علی پامناری
        </div>
      </div>
      <div class="date">98.12.25</div>
    </div>
    <div class="content">
      از تماسم راضی بودم. خانم دکتر با دقت به حرفام گوش کرد و راهکار مناسب بهم
      پیشنهاد .کرد
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Testimonial extends Vue {}
</script>
