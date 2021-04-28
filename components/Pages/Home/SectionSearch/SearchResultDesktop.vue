<style lang="scss" scoped></style>

<template>
  <section>
    <SearchResultItem :data="doctors" title="نتایج از بین پزشکان" :link="'/'" />
    <SearchResultItem
      :data="doctors"
      title="نتایج از بین تخصص ها"
      :link="'/'"
    />
    <SearchResultItem
      :data="doctors"
      title="نتایج از بین بیماری ها"
      :link="'/'"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SearchResultItem from './SearchResultItemDesktop.vue'
@Component({
  components: {
    SearchResultItem,
  },
})
export default class SearchResult extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  readonly doctors!: Array<object>
}
</script>
