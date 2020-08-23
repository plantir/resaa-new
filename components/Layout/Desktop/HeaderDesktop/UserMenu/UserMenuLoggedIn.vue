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
    let fullName = `${this.$auth.user?.firstName} ${this.$auth.user?.lastName}`
    if (
      this.$auth.user?.firstName === null &&
      this.$auth.user?.lastName === null
    ) {
      fullName = this.$auth.user.phoneNumber
    }
    return fullName
  }
}
</script>
