<style lang="scss" scoped>
main {
  .top-specialties {
    margin-top: 20px;
    @include media(sm) {
      margin-top: 100px;
    }
  }
  .tag-list {
    margin-top: 56px;
  }
}
</style>

<template>
  <main>
    <SearchDcotor />
    <TopSpecialties class="top-specialties" />
    <TagList class="tag-list" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SearchDcotor from '@/components/Pages/Specialties/SearchDcotor/SearchDcotor.vue'
import TopSpecialties from '@/components/Pages/Specialties/TopSpecialties/TopSpecialties.vue'
import TagList from '@/components/Pages/Specialties/TagList/TagList.vue'

@Component({
  components: {
    SearchDcotor,
    TopSpecialties,
    TagList,
  },
})
export default class SpecialtiesPage extends Vue {}
</script>
