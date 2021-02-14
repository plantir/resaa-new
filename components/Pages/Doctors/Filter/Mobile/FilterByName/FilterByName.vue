<style lang="scss" scoped>
::v-deep {
  .v-text-field__details {
    display: none;
  }
  .v-input__slot {
    height: 48px;
  }
}
</style>

<template>
  <v-text-field
    v-model="query"
    placeholder="نام و نام خانوادگی پزشک"
    name="query"
    clearable
    outlined
    dense
  >
    <template v-slot:append>
      <img
        width="32px"
        height="32px"
        src="/images/icons/ic_search.png"
        alt="search"
      />
    </template>
  </v-text-field>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class FilterByName extends Vue {
  @Prop({
    required: true,
  })
  readonly value!: any

  get query() {
    return this.value
  }

  set query(val) {
    this.$emit('input', val)
  }
}
</script>
