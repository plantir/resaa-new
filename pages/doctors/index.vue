<style lang="scss" scoped>
main.doctors-main {
  margin-top: 30px;
}
</style>

<template>
  <main class="doctors-main">
    <v-container>
      <div class="d-flex flex-wrap">
        <template v-if="$device.isMobile">
          <FilterMobile v-model="filter" />
          <ListDoctorsMobile />
        </template>
        <template v-else>
          <FilterDesktop v-model="filter" />
          <ListDoctorsDesktop @sort="onSort" />
        </template>
      </div>
    </v-container>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
Component.registerHooks(['head'])
@Component({
  // head: (data) => {
  //   return {
  //     title: 'پزشکان و متخصصان سامانه رسا',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content:
  //           'با جستجو در بین پزشکان سامانه رسا در تخصص های زنان و زایمان، اطفال، مغز و اعصاب، روانشناسی و ... متخصص مورد نظر خود را انتخاب کنید و به صورت تلفنی به پاسخ سوالات خود برسید.',
  //       },
  //     ],
  //   }
  // },
  components: {
    FilterMobile: () =>
      import('@/components/Pages/Doctors/Filter/Mobile/FilterMobile.vue'),
    FilterDesktop: () =>
      import('@/components/Pages/Doctors/Filter/Desktop/FilterDesktop.vue'),
    ListDoctorsMobile: () =>
      import(
        '@/components/Pages/Doctors/ListDoctors/Mobile/ListDoctorsMobile.vue'
      ),
    ListDoctorsDesktop: () =>
      import(
        '@/components/Pages/Doctors/ListDoctors/Desktop/ListDoctorsDesktop.vue'
      ),
  },
})
export default class DoctorsPage extends Vue {
  filter = {
    query: null,
    specialty: [],
    sickness: [],
    orderBy: 'NONE',
  }
  seo = {
    title: 'پزشکان و متخصصان سامانه رسا',
  }
  public head() {
    return {
      title: this.seo.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'با جستجو در بین پزشکان سامانه رسا در تخصص های زنان و زایمان، اطفال، مغز و اعصاب، روانشناسی و ... متخصص مورد نظر خود را انتخاب کنید و به صورت تلفنی به پاسخ سوالات خود برسید.',
        },
      ],
    }
  }

  onSort(sort: any) {
    this.filter.orderBy = sort
  }
}
</script>
