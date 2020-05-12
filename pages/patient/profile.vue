<style lang="scss" scoped></style>

<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="12" sm="12" xs="12">
        <ProfileProgress
          :percentage="'25'"
          class="pa-5"
          @editProfile="onDialogEditPersonalInformation"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6" xs="12">
        <PersonalInformation
          class="pa-4"
          :profile="profile"
          @edit="onDialogEditPersonalInformation"
        />
        <DialogEditPersonalInformation v-model="dialogEditPersonalInformation" />
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
import { Component, Vue } from 'vue-property-decorator'
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

  public onDialogEditPersonalInformation() {
    this.dialogEditPersonalInformation = !this.dialogEditPersonalInformation
  }

  mounted() {
    this.profile = this.$auth.user
  }
}
</script>
