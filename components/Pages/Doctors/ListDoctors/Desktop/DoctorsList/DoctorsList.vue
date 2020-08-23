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
    <div class="doctors" v-if="loading">
      <AppSkeleton
        section="Doctor"
        v-for="(item, index) in 10"
        :key="index"
        class="mt-6"
      />
    </div>

    <div class="doctors" v-if="!loading">
      <Doctor
        v-for="(doctor, index) in doctors"
        :key="index"
        class="mt-6"
        :doctor="doctor"
      />
    </div>

    <div class="pagination-wrapper" v-if="!loading">
      <v-pagination
        v-model="page"
        :length="total"
        :circle="false"
        :total-visible="6"
        @input="pageChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Doctor from '@/components/Common/Doctor/Doctor.vue'

@Component({
  components: {
    Doctor,
  },
})
export default class DoctorsList extends Vue {
  @Prop({
    type: Boolean,
    required: true,
  })
  readonly loading!: Boolean

  @Prop({
    type: Number,
    required: true,
  })
  readonly pageCurrent!: Number

  @Prop({
    type: Number,
    required: true,
  })
  readonly total!: Number

  @Prop({
    type: Function,
    required: true,
  })
  readonly pageChange!: Function

  @Prop({
    required: true,
  })
  readonly doctors!: any[]

  get page() {
    return this.pageCurrent
  }
  set page(val) {
    this.$emit('pageCurrent', val)
  }
}
</script>
