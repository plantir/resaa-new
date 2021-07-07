<style lang="scss" scoped>
.card-specialtie {
  .v-card {
    width: 160px;
    height: 160px;
    @include media(sm) {
      width: 128px;
      height: 128px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
  <nuxt-link :to="link" class="card-specialtie">
    <v-card class="d-flex flex-column align-center justify-center">
      <!-- <Icon fileName="ic_pregnancy.png" /> -->
      <v-icon size="56"> la-stethoscope </v-icon>
      <h2 class="mt-2">{{ item.title }}</h2>
    </v-card>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class CardSpecialtie extends Vue {
  @Prop({
    required: true,
    type: Object,
  })
  readonly item!: any

  get link() {
    let title: string = this.item.englishTitle || this.item.description || ''
    title = title.toLowerCase().replace(/ /g, '-')
    return `/categories/${title}/${this.item.id}`
  }
}
</script>
