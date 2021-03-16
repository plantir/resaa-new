<style lang="scss" scoped>
.doctor {
  position: relative;
  width: calc(100% - 20px);
  height: auto;
  @include media(sm) {
    margin-right: 30px;
    width: 100%;
    height: 192px;
  }
  .avatar {
    position: absolute;
    right: -10px;
    top: 0px;
    width: 110px;
    height: 110px;
    border-radius: 8px;
    overflow: hidden;
    ::v-deep {
      .v-image__image {
        // background-size: 146%;
      }
    }
    @include media(sm) {
      position: relative;
      top: auto;
      margin-right: -15px;
      width: 160px;
      height: 160px;
    }
  }
  .left-side {
    width: 100%;
    padding: 15px 10px 15px 10px;
    height: 100%;
    @include media(sm) {
      width: calc(100% - 160px);
      height: 100%;
      padding: 35px 25px 25px 5px;
    }

    .top {
      width: 100%;
      flex-direction: column;
      @include media(sm) {
        flex-direction: row;
      }
      .main-title {
        margin-right: 100px;
        font-size: 14px;
        @include media(sm) {
          margin-right: 0;
          font-size: 18px;
        }

        .full-name {
          color: #212121;
        }
        .line,
        .skill {
          color: #5e696e;
        }
        a {
          display: flex;
          flex-direction: column;
          @include media(sm) {
            flex-direction: row;
          }
          .main-title {
            font-size: 18px;
          }
          .line {
            display: none;
            @include media(sm) {
              display: block;
            }
          }
        }
      }
      ::v-deep {
        .status {
          margin-right: 100px;
          margin-top: 10px;
          padding: 0 15px;
          width: max-content;
          @include media(sm) {
            margin-right: 0;
          }
        }
      }
    }

    .middle {
      margin-top: 30px;
      font-size: 10px;
      font-weight: 500;
      line-height: 18px;
      @include media(sm) {
        margin-top: 0;
        font-size: 12px;
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;

      flex-direction: column;
      font-size: 12px;
      font-weight: bold;
      color: #212121;
      @include media(sm) {
        flex-direction: row;
      }
      .description-wrapper {
        flex-wrap: wrap;
        width: 100%;
        @include media(sm) {
          display: flex;
          align-items: center;
          width: calc(100% - 160px);
        }
        .value {
          margin-right: 5px;
        }
        .items {
          display: flex;
          align-items: center;
          @include media(sm) {
            padding-left: 30px;
          }
        }
        .description-top {
          display: flex;
          justify-content: space-between;
        }
        .price {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          @include media(sm) {
            margin-top: 0;
          }
          .price-wrapper {
            display: flex;
            align-items: center;
          }
        }
      }

      .view-profile {
        text-align: center;
        margin-top: 20px;
        border: 1px solid #35d6c1;
        border-radius: 8px;
        line-height: 36px;
        color: #35d6c1;
        padding: 0 40px;
        font-weight: bold;
      }
    }
  }
}
</style>

<template>
  <v-card class="doctor d-flex align-center">
    <div class="avatar">
      <ImageLoader
        :src="doctorImage"
        :alt="fullname"
        width="160"
        height="160"
      />
    </div>

    <div class="left-side d-flex flex-column justify-space-between">
      <div class="top d-flex justify-space-between">
        <h3 class="main-title">
          <nuxt-link :to="doctorLink">
            <span class="full-name">{{ fullname }}</span>
            <span class="line mb-1 mx-2">-</span>
            <span class="skill">
              {{
                doctor.specialty
                  ? doctor.specialty.title
                  : doctor.specialtyTitle
              }}
            </span>
          </nuxt-link>
        </h3>

        <OnlineStatus :status="false" />
      </div>

      <div class="middle">
        <p class="skills">
          <!-- فوق تخصص روماتولوژی، تخصص داخلی، عضو هیت علمی دانشگاه علوم‌پزشکی تهران -->
          {{ doctor.expertise }}
        </p>
      </div>

      <div class="bottom">
        <div class="description-wrapper">
          <div class="description-top">
            <div class="items">
              <v-img
                src="/images/icons/ic_check.png"
                width="24px"
                height="24px"
              ></v-img>
              <span class="value">۱۲ سال سابقه</span>
            </div>
            <div class="items">
              <v-img
                src="/images/icons/ic_call.png"
                width="24px"
                height="24px"
              ></v-img>
              <span class="value">۲۵ تماس موفق</span>
            </div>
          </div>
          <div class="price">
            <div class="price-wrapper">
              <v-img
                src="/images/icons/money.png"
                width="24px"
                height="24px"
              ></v-img>
              <span class="value">۳,۰۰۰ تومان در دقیقه</span>
            </div>
          </div>
        </div>

        <nuxt-link class="view-profile" :to="doctorLink">
          مشاهده پروفایل
        </nuxt-link>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icon from '@/components/Common/Icon/Icon.vue'
import OnlineStatus from '@/components/Common/OnlineStatus/OnlineStatus.vue'

@Component({
  components: {
    Icon,
    OnlineStatus,
  },
})
export default class Doctor extends Vue {
  @Prop({
    required: true,
  })
  doctor!: any

  get fullname() {
    return (
      this.doctor.fullNameWithTitle ||
      `${this.doctor.title ? this.doctor.title : ''} ${this.doctor.firstName} ${
        this.doctor.lastName
      }`
    )
  }
  get doctorImage() {
    if (this.doctor.imagePath) {
      return `/api/${this.doctor.imagePath}`
    } else {
      return '/images/icons/avatar.png'
    }
  }
  get doctorLink() {
    if (this.doctor.specialty) {
      return `/doctors/${(this.doctor.specialty
        ? this.doctor.specialty.description
        : this.doctor.specialtyEnglishTitle
      )
        .toLowerCase()
        .replace(/ /g, '-')}/${this.doctor.subscriberNumber}`
    } else {
      return `/doctors/${this.doctor.specialityEnglishTitle
        .toLowerCase()
        .replace(/ /g, '-')}/${this.doctor.subscriberNumber}`
    }
  }
}
</script>
