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
    <SearchDcotor @submit="getSearch" :search="querySearch" />
    <TopSpecialties class="top-specialties" :data="topSpecialties" />
    <TagList class="tag-list" :tags="tags" />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SearchDcotor from '@/components/Pages/Specialties/SearchDcotor/SearchDcotor.vue'
import TopSpecialties from '@/components/Pages/Specialties/TopSpecialties/TopSpecialties.vue'
import TagList from '@/components/Pages/Specialties/TagList/TagList.vue'
Component.registerHooks(['fetch'])
@Component({
  components: {
    SearchDcotor,
    TopSpecialties,
    TagList,
  },
})
export default class SpecialtiesPage extends Vue {
  topSpecialties: any = []
  tags: any = []
  search = ''
  async fetch() {
    try {
      let { result } = await this.$service.doctors.getTopCategories()
      result.medicalSpecialties.map((items: any) => {
        this.topSpecialties.push(items)
      })
      result.categories.map((items: any) => {
        this.topSpecialties.push(items)
      })
      let tags = await this.$service.doctors.MedicalSpecialties()
      this.tags = tags.result.medicalSpecialties
    } catch (err) {
      console.log(err)
    }
  }
  getSearch(val: string) {
    this.search = val
  }
  async querySearch() {
    try {
      let { result } = await this.$service.doctors.searchCategory({
        query: this.search,
      })
      this.topSpecialties = []
      result.doctors.map((items: any) => {
        this.topSpecialties.push(items)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
</script>
