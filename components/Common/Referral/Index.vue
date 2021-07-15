<style lang="scss" scoped>
.referral-wrapper {
  width: 100%;
  max-width: 428px;
  height: 325px;
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
}
</style>

<template>
  <div class="referral-wrapper">
    <div class="icon">
      <v-icon size="48">la-wallet</v-icon>
    </div>
    <RegisterMobile
      v-if="!showSuccess"
      @cancel="$emit('hide')"
      @getMobile="getMobile"
    />
    <RegisterSuccess v-else @close="$emit('hide')" :mobile="mobile" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import RegisterMobile from './RegisterMobile.vue'
import RegisterSuccess from './RegisterSuccess.vue'
@Component({
  components: {
    RegisterMobile,
    RegisterSuccess,
  },
})
export default class ReferralComponent extends Vue {
  mobile = null
  showSuccess = false
  getMobile(e: any) {
    this.mobile = e
    if (this.mobile) {
      this.showSuccess = true
    }
  }
}
</script>
