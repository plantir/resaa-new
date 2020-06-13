<style lang="scss" scoped>
.doctors-list {
  .pagination-wrapper {
    margin-top: 30px;
    text-align: left;
  }
}
</style>

<template>
  <div class="doctors-list">
    <Doctor v-for="(item, index) in 10" :key="index" class="mt-6" />

    <div class="pagination-wrapper">
      <v-pagination
        v-model="page"
        :length="100"
        :circle="false"
        :total-visible="10"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Doctor from '@/components/Common/Doctor/Doctor.vue'

@Component({
  components: {
    Doctor,
  },
})
export default class DoctorsList extends Vue {
  page = 1
}
</script>
