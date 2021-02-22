<style lang="scss" scoped>
.result {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  .list {
    width: 100%;
  }
  .result-title {
    font-size: 14px;
    font-weight: bold;
    line-height: 15px;
    color: #212121;
    margin: 44px 0 16px;
  }
  .view-all {
    margin: 56px 0 98px;
    border: 1px solid $primary-color;
    color: $primary-color;
    line-height: 48px;
    border-radius: 8px;
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  .empty {
    padding: 40px 0;
    @include media(sm) {
      width: 450px;
    }
    @include media(md) {
      width: 550px;
    }
    img {
      width: 100%;
    }
  }
}
</style>

<template>
  <div class="result">
    <div class="list" v-if="doctors.length > 0">
      <div class="result-title">نتایج جستجو:</div>
      <Doctor v-for="doctor in doctors" :key="doctor.id" :doctor="doctor" />

      <nuxt-link class="view-all" to="/"> مشاهده همه </nuxt-link>
    </div>
    <div class="empty mt-5" v-else>
      <img src="/images/home/skills.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Doctor from './Doctor.vue'

@Component({
  components: {
    Doctor,
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
