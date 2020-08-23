<style lang="scss" scoped>
.packages {
  @include media(sm) {
    ::v-deep {
      .package {
        margin-left: 32px;
        &:last-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>

<template>
  <div class="packages d-flex justify-space-between mt-10">
    <Package
      v-for="(item, index) in packages"
      :key="index"
      :color="item.color"
      :count="item.count"
      :name="item.name"
      :title="item.title"
      :desc="item.desc"
      :price="item.price"
      @click="onClick"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Package from '../Package/Package.vue'

@Component({
  components: {
    Package,
  },
})
export default class PackagesDesktop extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  readonly packages!: Array<Object>

  onClick() {
    alert('a')
  }
}
</script>
