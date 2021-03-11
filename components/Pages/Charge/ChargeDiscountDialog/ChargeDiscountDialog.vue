<style lang="scss" scoped>
.v-card {
  width: 392px;
  height: 320px;
  border-radius: 8px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 29px 43px 24px;
  .icon-discount {
    border: 1px solid #707070;
    width: 76px;
    height: 65px;
    border-radius: unset !important;
  }
  .text {
    padding: 10px 0 0;
    line-height: 25px;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
  }
  .discount {
    width: 100%;
  }
  .actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .resaa-btn {
      height: 36px;
      margin-right: 20px;
    }
  }
}
</style>

<template>
  <v-card>
    <div class="icon-discount"></div>
    <div class="text">
      لطفا کد تخفیف خود را وارد و سپس دکمه ثبت را انتخاب کنید.
    </div>
    <div class="discount">
      <v-text-field
        v-model="discount"
        class="mt-4"
        placeholder="کد تخفیف"
        outlined
      ></v-text-field>
    </div>
    <div class="actions">
      <v-btn text color="#13d1f3" @click="$emit('hide')">انصراف</v-btn>
      <v-btn class="resaa-btn" :disabled="!discount" @click="save"
        >ثبت کد تخفیف</v-btn
      >
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'

@Component({
  components: {
    Icon,
  },
})
export default class DiscountCharge extends Vue {
  @Prop({
    type: Object,
  })
  readonly scope!: any
  discount = null
  save() {
    this.scope.done(this.discount)
    this.$emit('hide')
  }
}
</script>
