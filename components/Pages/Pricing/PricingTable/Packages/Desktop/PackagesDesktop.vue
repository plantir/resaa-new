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
.arrow {
  display: flex;
  justify-content: center;
  margin: 18px 0 56px;
}
</style>

<template>
  <section>
    <div class="packages d-flex justify-space-between mt-10">
      <Package
        v-for="(item, index) in packages"
        :key="index"
        :color="colors[index]"
        :count="item.chargePackage.durationInMinute"
        :name="item.chargePackage.packageTitle"
        :title="`${item.chargePackage.durationInMinute} دقیقه مکالمه`"
        :desc="item.chargePackage.description"
        :price="item.denomination.amount"
        @click="onClick"
      />
    </div>
    <div class="arrow">
      <a>
        <Icon fileName="arrow_down.svg" />
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Package from '../Package/Package.vue'
import Icon from '@/components/Common/Icon/Icon.vue'
@Component({
  components: {
    Package,
    Icon,
  },
})
export default class PackagesDesktop extends Vue {
  colors = ['#35d6c1', '#0bbad9', '#f9a429', '#c73260']
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
