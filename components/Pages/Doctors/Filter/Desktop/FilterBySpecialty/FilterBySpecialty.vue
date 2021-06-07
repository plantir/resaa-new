<style lang="scss">
.filter-specialties {
  .card-body.full {
    overflow-y: hidden !important;

    .specialties-checkbox {
      overflow-y: auto;
    }
  }
}
</style>
<style lang="scss" scoped>
::v-deep {
  .v-text-field__details {
    display: none;
  }
  .show-all.full {
    margin-top: 0;
  }
  .v-text-field--outlined fieldset {
    border-color: #6c6c6c;
  }
}
</style>

<template>
  <FilterCard class="filter-specialties" title="تخصص">
    <div class="px-4">
      <v-text-field
        v-model="query"
        placeholder="جستجوی تخصص"
        name="query"
        clearable
        outlined
        dense
      />
    </div>
    <SpecialtiesCheckBox
      v-model="selected"
      :items="specialities"
      :query="query"
    />
  </FilterCard>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FilterCard from '../FilterCard/FilterCard.vue'
import SpecialtiesCheckBox from '../../SpecialtiesCheckBox/SpecialtiesCheckBox.vue'

@Component({
  components: {
    FilterCard,
    SpecialtiesCheckBox,
  },
})
export default class FilterBySpecialty extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  readonly value!: Array<String | Number>

  get selected() {
    return this.value
  }

  set selected(val) {
    this.$emit('input', val)
  }

  @Prop()
  specialities!: any[]

  query = null
}
</script>
