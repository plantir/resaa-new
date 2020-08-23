<style lang="scss" scoped>
.filter-specialty {
  > button {
    border: 1px solid #797979;
    padding: 0 15px;
    border-radius: 8px;
    line-height: 32px;
    color: #797979;
    &.active {
      border-color: $primary-color;
      color: $primary-color;
    }
  }
  .dialog {
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    width: 100%;
    background-color: #fff;
    .header {
      line-height: 60px;
      width: 100%;
      .main-title {
        font-weight: bold;
        color: #6d6d6d;
      }
    }
    .content-body {
      box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.15);
      padding: 20px;
      ::v-deep {
        .v-text-field__details {
          display: none;
        }
        .specialties-checkbox {
          overflow-y: auto;
        }
      }
    }
    .footer {
      background-color: #fff;
      line-height: 56px;
      padding: 8px 20px;
    }
  }
}
</style>

<template>
  <div class="filter-specialty">
    <button
      :class="{
        active: selected.length > 0,
      }"
      @click="visibleFilter = !visibleFilter"
      type="button"
    >
      بیماری
    </button>

    <div v-if="visibleFilter" class="dialog">
      <div class="header text-center">
        <div class="main-title">فیلتر بر اساس بیماری</div>
      </div>
      <div class="content-body">
        <v-text-field
          v-model="query"
          placeholder="جستجوی بیماری"
          name="query"
          clearable
          outlined
          dense
        />

        <SpecialtiesCheckBox v-model="selected" :query="query" />
      </div>
      <div class="footer d-flex justify-space-between">
        <v-btn text @click="visibleFilter = false">انصراف</v-btn>
        <v-btn :disabled="selected.length === 0">تایید و اعمال فیلتر</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import SpecialtiesCheckBox from '../../../SpecialtiesCheckBox/SpecialtiesCheckBox.vue'

@Component({
  components: {
    SpecialtiesCheckBox,
  },
})
export default class FilterBySickness extends Vue {
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

  visibleFilter = false
  query = null

  @Watch('visibleFilter')
  onVisibleFilter(val: Boolean) {
    if (process.client) {
      if (val) {
        const elm = document.createElement('div')
        elm.id = 'overlay-filter'
        document.body.append(elm)
      } else {
        const elm = document.getElementById('overlay-filter')
        if (elm) {
          elm.remove()
        }
      }
    }
  }
}
</script>
