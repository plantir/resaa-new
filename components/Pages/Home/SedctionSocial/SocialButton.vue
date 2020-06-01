<style lang="scss" scoped>
.social {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
  border-right: 4px solid #0088cc;
  border-radius: 4px;
  background-color: #ffffff;
  display: inline-block;
  line-height: 56px;
  text-align: center;
  border-radius: 4px;
  position: relative;
  margin-right: 66px;
  &::before {
    width: 56px;
    height: 56px;
    content: '';
    position: absolute;
    border-radius: 4px;
    right: -66px;
  }
  &.telegram {
    &::before {
      background: url('/images/icons/telegram.png') no-repeat center center
        #0088cc;
    }
  }
  &.instagram {
    &::before {
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #cc2366 75%,
        #bc1888 100%
      );
    }
    &::after {
      background: url('/images/icons/instagram.png') no-repeat center center;
      width: 56px;
      height: 56px;
      content: '';
      position: absolute;
      right: -66px;
    }
  }
}
</style>

<template>
  <a class="social" :class="network" href="">
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  network!: String
}
</script>
