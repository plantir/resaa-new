<style lang="scss" scoped>
.card-specialtie {
  .v-card {
    width: 160px;
    height: 160px;
    @include media(sm) {
      width: 128px;
      height: 128px;
    }
    @include media(xl) {
      width: 200px;
      height: 200px;
    }
  }
  h2 {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

<template>
  <nuxt-link to="/" class="card-specialtie">
    <v-card class="d-flex flex-column align-center justify-center">
      <Icon fileName="ic_pregnancy.png" />
      <h2 class="mt-2">زنان زایمان</h2>
    </v-card>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class CardSpecialtie extends Vue {}
</script>
