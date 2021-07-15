<style lang="scss" scoped></style>

<template>
  <v-container class="mt-5">
    <v-btn color="error" @click="logout">خروج</v-btn>
    <v-row>
      <v-col cols="12" sm="12" xs="12">
        <ProfileProgress
          :percentage="'25'"
          class="pa-5"
          @editProfile="onDialogEditProfile"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" xs="12">
        <PersonalInformation
          class="pa-4"
          :profile="profile"
          @edit="onDialogEditProfile"
        />
      </v-col>
      <v-col cols="12" sm="6" xs="12">
        <FavoriteSpecialists class="pa-4" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" xs="12">
        <CallHistory class="pa-4" />
      </v-col>
      <v-col cols="12" sm="6" xs="12">
        <HistoryTestResults class="pa-4" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PersonalInformation from '@/components/Pages/Patient/Profile/PersonalInformation/PersonalInformation.vue'
import DialogEditPersonalInformation from '@/components/Pages/Patient/Profile/PersonalInformation/DialogEditPersonalInformation.vue'
import ProfileProgress from '@/components/Pages/Patient/Profile/ProfileProgress/ProfileProgress.vue'
import FavoriteSpecialists from '@/components/Pages/Patient/Profile/FavoriteSpecialists/FavoriteSpecialists.vue'
import CallHistory from '@/components/Pages/Patient/Profile/CallHistory/CallHistory.vue'
import HistoryTestResults from '@/components/Pages/Patient/Profile/HistoryTestResults/HistoryTestResults.vue'
import { Profile } from '@/models/Auth'

Component.registerHooks(['fetch', 'head'])

@Component({
  middleware: 'auth',
  layout: 'withoutFooter',
  components: {
    PersonalInformation,
    ProfileProgress,
    FavoriteSpecialists,
    CallHistory,
    HistoryTestResults,
    DialogEditPersonalInformation,
  },
})
export default class profile extends Vue {
  dialogEditPersonalInformation = false

  profile = {}

  public head() {
    return {
      title: 'پروفایل بیمار',
      bodyAttrs: {
        class: 'page-patient-profile',
      },
    }
  }

  async onDialogEditProfile() {
    const dialogProfile = await this.$dialog.show({
      component: DialogEditPersonalInformation,
      scope: this.profile,
    })
  }

  async getProfile() {
    try {
      const userId = this.$auth.user.userId
      const { result: resProfile } = await this.$service.auth.getProfile(userId)
      this.profile = resProfile.profile
    } catch (error) {}
  }

  mounted() {
    this.getProfile()
  }

  logout() {
    this.$auth.logout()
  }
}
</script>
