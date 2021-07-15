<style lang="scss" scoped>
.social-item {
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.15);
  border-right: 4px solid #0088cc;
  border-radius: 4px;
  background-color: #ffffff;
  display: inline-flex;
  line-height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  position: relative;
  margin-right: 66px;
  color: #6c6c6c;
  font-size: 16px;
  font-weight: 600;
  padding: 0 16px;
  width: 208px;
  &::before {
    width: 56px;
    height: 56px;
    content: '';
    position: absolute;
    border-radius: 4px;
    right: -64px;
  }
  &.telegram {
    &::before {
      background: url('/images/icons/telegram.png') no-repeat center center
        #0088cc;
    }
  }
  &.instagram {
    border-right-color: #cc2366;
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
  <a class="social-item" :class="network" :href="link" target="_blank">
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  network!: String
  @Prop({
    type: String,
    required: true,
  })
  link!: String
}
</script>
