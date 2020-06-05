<style lang="scss" scoped>
.status {
  border-radius: 30px;
  padding: 0 20px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 500;
  &.online {
    background-color: #e9fbf3;
    color: #058e4b;
  }
  &.offline {
    background-color: #fbdde2;
    color: #eb5470;
  }
}
</style>

<template>
  <div class="status" :class="statusClass">
    {{ statusText }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class OnlineStatus extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly status!: Boolean

  get statusClass() {
    return this.status ? 'online' : 'offline'
  }

  get statusText() {
    return this.status ? 'در دسترس' : 'خارج از دسترس'
  }
}
</script>
