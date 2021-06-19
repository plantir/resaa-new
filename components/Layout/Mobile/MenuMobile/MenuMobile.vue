<style lang="scss" scoped></style>

<template>
  <v-navigation-drawer v-model="drawer" :right="true" app fixed>
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
        <v-list-item
          :key="index"
          link
          :href="item.link"
          :target="item.internalLink ? '_self' : '_blank'"
          v-if="!item.child"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
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
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

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

  items = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard' },
    { title: 'Photos', icon: 'mdi-image' },
    { title: 'About', icon: 'mdi-help-box' },
  ]
}
</script>
