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
    <!-- <div class="doctors" v-if="loading">
      <AppSkeleton
        section="Doctor"
        v-for="(item, index) in 10"
        :key="index"
        class="mt-6"
      />
    </div> -->

    <div class="doctors" ref="doctorWrapper">
      <Doctor
        v-for="(doctor, index) in doctors"
        :key="index"
        class="mt-6"
        :doctor="doctor"
      />
      <div class="no-result" v-if="doctors.length == 0">
        نتیجه ای جهت نمایش یافت نشد
      </div>
    </div>

    <div class="pagination-wrapper" v-if="total">
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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
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

  @Watch('loading')
  onLoadingChange(val: boolean) {
    // if (val) this.$loader.show(this.$refs.doctorWrapper)
    // else this.$loader.destroy()
  }
}
</script>
