<style lang="scss" scoped>
.item {
  color: #212121;
  font-weight: 600;
}
</style>

<template>
  <div class="item d-flex mb-7 align-center">
    <Icon :fileName="faq.icon" />
    <div class="value mr-3">{{ faq.text }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class FaqItem extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  readonly faq!: Object
}
</script>
