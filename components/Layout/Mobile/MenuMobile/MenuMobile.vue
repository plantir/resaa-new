<style lang="scss" scoped>
.navigation {
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  pointer-events: none;
  &.open {
    pointer-events: initial;
  }
  // right: -206px;
}

.v-list {
  transform: translateX(220px);
  transition: transform 0.2s ease-in-out;
  width: 220px;
  height: 100%;
}
.open {
  .v-list {
    transform: translateX(0);
  }
}
.v-list-item a {
  display: flex;
  color: rgba(0, 0, 0, 0.87);
  .v-list-item__icon {
    margin-left: 12px;
  }
}
</style>

<template>
  <section class="navigation" :class="{ open: drawer }">
    <div class="backdrop" v-if="drawer" @click="drawer = false"></div>
    <!-- <v-navigation-drawer v-model="drawer" :right="true" app fixed> -->
    <v-list dense nav class="py-0">
      <v-list-item two-line>
        <v-list-item-avatar>
          <v-img src="/icon.png" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>رسا سامانه سلامت ایرانیان</v-list-item-title>
          <!-- <v-list-item-subtitle></v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-subheader inset>منوی اصلی</v-subheader>
      <template v-for="(item, index) in $store.state.navigation.items">
        <v-list-item :key="index" v-if="!item.child">
          <nuxt-link :to="item.link" v-if="item.internalLink">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item-content>
          </nuxt-link>
          <a v-else :href="item.link" target="_blank">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item-content>
          </a>
        </v-list-item>
        <v-list-group :prepend-icon="item.icon" :key="index" v-else>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(child, i) in item.child" :key="i" link>
            <v-list-item-icon>
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ child.label }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
    <!-- </v-navigation-drawer> -->
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class MenuMobile extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly value!: Boolean

  get drawer() {
    return this.value
  }

  set drawer(val) {
    this.$emit('input', val)
  }
}
</script>
