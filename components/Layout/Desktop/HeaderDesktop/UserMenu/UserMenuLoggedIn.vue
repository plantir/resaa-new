<style lang="scss" scoped></style>

<template>
  <nuxt-link to="/patient/profile" class="left-header d-flex align-center">
    <div class="full-name ml-4">
      {{ fullName }}
    </div>
    <v-avatar>
      <img src="/images/icons/ic_account_circle.svg" :alt="fullName" />
    </v-avatar>
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
export default class UserMenuNotLoggedIn extends Vue {
  get fullName() {
    if (this.$auth.user && this.$auth.user.phoneNumber) {
      let fullName = this.$auth.user.phoneNumber
      if (this.$auth.user?.firstName && this.$auth.user?.lastName) {
        fullName = `${this.$auth.user?.firstName} ${this.$auth.user?.lastName}`
      }
      return fullName
    } else {
      let info = this.$storage.getUniversal('profile')
      let fullName = info.phoneNumber

      if (info?.firstName && info?.lastName) {
        fullName = `${info?.firstName} ${info?.lastName}`
      }
      return fullName
    }
  }
}
</script>
