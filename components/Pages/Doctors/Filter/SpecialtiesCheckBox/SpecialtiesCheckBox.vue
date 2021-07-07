<style lang="scss" scoped>
.specialties-checkbox {
  margin-top: 5px;
  max-height: 330px;
  overflow-y: hidden;
  padding: 0 10px;
  ::v-deep {
    .v-input--selection-controls {
      margin: 0;
      margin-bottom: 4px;
      .v-label {
        font-size: 14px;
        font-weight: 500;
        color: #4b4b4b;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .v-messages {
        display: none;
      }
    }
  }
}
</style>

<template>
  <div class="specialties-checkbox">
    <div class="specialty" v-for="item in specialtiesFilter" :key="item.id">
      <v-checkbox
        v-model="selected"
        :label="item.title"
        :value="item.id"
        dense
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SpecialtiesCheckBox extends Vue {
  @Prop({
    required: true,
  })
  readonly query!: any

  @Prop({
    type: Array,
    required: true,
  })
  readonly value!: Array<String | Number>

  @Prop()
  items!: any[]

  get selected() {
    return this.value
  }

  set selected(val) {
    this.$emit('input', val)
  }

  get specialtiesFilter() {
    let filter = this.items
    if (this.query) {
      filter = this.items.filter((item) => item.title.includes(this.query))
    }
    return filter
  }
}
</script>
