<style lang="scss">
#overlay-filter {
  background-color: rgba($color: #000000, $alpha: 0.3);
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
<style lang="scss" scoped>
::v-deep {
  .v-text-field__details {
    display: none;
  }

  .search {
    .v-input__slot {
      height: 48px;
    }
  }
}

.filter-specialty {
  > button {
    // padding: 0 15px;
    border-radius: 8px;
    // line-height: 32px;
    width: 94px;
    height: 32px;
    border: 1px solid #6c6c6c;
    color: #6c6c6c;
    font-weight: bold;
    font-size: 12px;
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
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: #fff;
      height: 56px;
      .confirm {
        height: 40px;
        width: 144px;
        border-radius: 8px;
        background-color: #e1e2e1 !important;
        color: #6c6c6c;
        font-size: 14px;
        font-weight: bold;
        margin-right: 67px;
        margin-left: 24px;
      }
      .cancel {
        padding: 0;
        margin: 0;
        color: #35d6c1;
      }
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
      تخصص
    </button>

    <div v-if="visibleFilter" class="dialog">
      <div class="header text-center">
        <div class="main-title">فیلتر بر اساس تخصص</div>
      </div>
      <div class="content-body">
        <v-text-field
          class="search"
          v-model="query"
          placeholder="جستجوی تخصص"
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

        <SpecialtiesCheckBox
          :items="specialities"
          v-model="selected"
          :query="query"
        />
      </div>
      <div class="footer">
        <v-btn class="cancel" text @click="onCancle">انصراف</v-btn>
        <v-btn
          class="confirm"
          depressed
          @click="submit"
          :disabled="selected.length === 0"
          >تایید و اعمال فیلتر</v-btn
        >
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
export default class FilterBySpecialty extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  readonly value!: Array<String | Number>
  selected: any[] = []
  @Prop()
  specialities!: any[]
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
  @Watch('value')
  onValueChange() {
    this.selected = this.value
  }

  mounted() {
    this.selected = this.value
  }
  onCancle() {
    this.visibleFilter = false
    this.selected = this.value
  }
  submit() {
    this.$emit('input', this.selected)
    this.visibleFilter = false
  }
}
</script>
