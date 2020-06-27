<template>
  <li>
    <nuxt-link
      v-if="menu.internalLink"
      :to="menu.link"
      :target="menu.newTab?'_blank':'_self'"
    >{{ menu.label }}</nuxt-link>
    <a v-else :href="menu.link" :target="menu.newTab?'_blank':'_self'">{{ menu.label }}</a>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { MainMenu } from '@/models/MainMenu'

@Component
export default class MenuItem extends Vue {
  @Prop({ type: Object, required: true })
  readonly menu!: MainMenu
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  margin-left: 20px;
  a {
    color: #6c6c6c;
    &.nuxt-link-exact-active {
      color: #212121;
      font-weight: 500;
    }
  }
}
</style>
