<template>
  <li>
    <nuxt-link
      v-if="menu.internalLink"
      :to="menu.link"
      :target="menu.newTab ? '_blank' : '_self'"
      no-prefetch
    >
      {{ menu.label }}
    </nuxt-link>
    <a v-else :href="menu.link" :target="menu.newTab ? '_blank' : '_self'">{{
      menu.label
    }}</a>
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
    font-weight: 500;
    position: relative;
    padding: 0 10px;
    &.nuxt-link-exact-active {
      color: #212121;
      font-weight: 600;
      &::before {
        background-color: #35d6c1;
        box-shadow: 0 1px 3px rgba(53, 214, 193, 0.5);
        position: absolute;
        width: 100%;
        border-radius: 8px;
        height: 5px;
        content: '';
        right: 0;
        bottom: -10px;
      }
    }
  }
}
</style>
