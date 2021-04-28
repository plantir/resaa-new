<style lang="scss" scoped></style>

<template>
  <section>
    <SearchResultItem :data="doctors" title="نتایج جستجو پزشکان:" :link="`/`" />
    <SearchResultItem
      :data="doctors"
      title="نتایج جستجو تخصص ها:"
      :link="`/`"
    />
    <SearchResultItem
      :data="doctors"
      title="نتایج جستجو بیماری ها:"
      :link="`/`"
    />
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import SearchResultItem from './SearchResultItemMobile.vue'
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
