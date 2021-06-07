<style lang="scss" scoped>
.specialties-checkbox {
  margin-top: 5px;
  max-height: 330px;
  overflow-y: hidden;
  padding: 0 10px;
  ::v-deep {
    .v-input--selection-controls {
      margin: 0;
      margin-bottom: 4px;
      .v-label {
        font-size: 14px;
        font-weight: 500;
        color: #4b4b4b;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .v-messages {
        display: none;
      }
    }
  }
}
</style>

<template>
  <div class="specialties-checkbox">
    <div class="specialty" v-for="item in specialtiesFilter" :key="item.id">
      <v-checkbox
        v-model="selected"
        :label="item.title"
        :value="item.id"
        dense
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class SpecialtiesCheckBox extends Vue {
  @Prop({
    required: true,
  })
  readonly query!: any

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
  items!: any[]
  // specialties = [
  //   {
  //     id: 1,
  //     title: 'بیهوشی',
  //     description: 'Anesthesiology',
  //   },
  //   {
  //     id: 2,
  //     title: 'قلب',
  //     description: 'Cardiology',
  //   },
  //   {
  //     id: 3,
  //     title: 'جراحی قلب و عروق',
  //     description: 'Cardiovascular Surgery',
  //   },
  //   {
  //     id: 4,
  //     title: 'علوم آزمایشگاهی',
  //     description: 'Clinical Laboratory Sciences',
  //   },
  //   {
  //     id: 5,
  //     title: 'جراحی کولورکتال',
  //     description: 'Colon and Rectal Surgery',
  //   },
  //   {
  //     id: 6,
  //     title: 'جراحی دندان و دهان و فک و صورت',
  //     description: 'Dental, Oral and Maxillofacial Surgery',
  //   },
  //   {
  //     id: 7,
  //     title: 'پوست',
  //     description: 'Dermatology',
  //   },
  //   {
  //     id: 8,
  //     title: 'طب اورژانس',
  //     description: 'Emergency Medicine',
  //   },
  //   {
  //     id: 9,
  //     title: 'غدد',
  //     description: 'Endocrinology',
  //   },
  //   {
  //     id: 10,
  //     title: 'گوارش',
  //     description: 'Gastroenterology',
  //   },
  //   {
  //     id: 11,
  //     title: 'جراحی عمومی',
  //     description: 'General Surgery',
  //   },
  //   {
  //     id: 12,
  //     title: 'ایمنی‌شناسی',
  //     description: 'Immunology',
  //   },
  //   {
  //     id: 13,
  //     title: 'بیماری‌های عفونی',
  //     description: 'Infectious Disease',
  //   },
  //   {
  //     id: 14,
  //     title: 'پزشکی داخلی',
  //     description: 'Internal Medicine',
  //   },
  //   {
  //     id: 15,
  //     title: 'رادیولوژی مداخله‌ای',
  //     description: 'Interventional Radiology',
  //   },
  //   {
  //     id: 16,
  //     title: 'پزشکی قانونی',
  //     description: 'Legal Medicine',
  //   },
  //   {
  //     id: 17,
  //     title: 'میکروب‌شناسی',
  //     description: 'Microbiology',
  //   },
  //   {
  //     id: 18,
  //     title: 'تخصص نوزادان',
  //     description: 'Neonatology',
  //   },
  //   {
  //     id: 19,
  //     title: 'کلیه',
  //     description: 'Nephrology',
  //   },
  //   {
  //     id: 20,
  //     title: 'مغز و اعصاب',
  //     description: 'Neurology',
  //   },
  //   {
  //     id: 21,
  //     title: 'جراحی مغز و اعصاب',
  //     description: 'Neurosurgery',
  //   },
  //   {
  //     id: 22,
  //     title: 'پزشکی هسته‌ای',
  //     description: 'Nuclear Medicine',
  //   },
  //   {
  //     id: 23,
  //     title: 'زنان و زایمان',
  //     description: 'Obstetrics and Gynaecology',
  //   },
  //   {
  //     id: 24,
  //     title: 'طب کار',
  //     description: 'Occupational Medicine',
  //   },
  //   {
  //     id: 25,
  //     title: 'چشم',
  //     description: 'Ophthalmology',
  //   },
  //   {
  //     id: 26,
  //     title: 'ارتوپدی',
  //     description: 'Orthopaedics',
  //   },
  //   {
  //     id: 27,
  //     title: 'گوش و حلق و بینی',
  //     description: 'Otorhinolaryngology ',
  //   },
  //   {
  //     id: 28,
  //     title: 'قلب کودکان',
  //     description: 'Paediatric Cardiology',
  //   },
  //   {
  //     id: 29,
  //     title: 'کودکان',
  //     description: 'Paediatrics',
  //   },
  //   {
  //     id: 30,
  //     title: 'جراحی کودکان',
  //     description: 'Paediatrics Surgery',
  //   },
  //   {
  //     id: 31,
  //     title: 'آسیب‌شناسی',
  //     description: 'Pathology',
  //   },
  //   {
  //     id: 32,
  //     title: 'داروشناسی',
  //     description: 'Pharmacology',
  //   },
  //   {
  //     id: 33,
  //     title: 'طب فیزیکی و توانبخشی',
  //     description: 'Physical Medicine and Rehabilitation',
  //   },
  //   {
  //     id: 34,
  //     title: 'جراحی پلاستیک ترمیمی و زیبایی',
  //     description: 'Plastic, Reconstructive and Aesthetic Surgery',
  //   },
  //   {
  //     id: 35,
  //     title: 'روانپزشکی',
  //     description: 'Psychiatry',
  //   },
  //   {
  //     id: 36,
  //     title: 'رادیولوژی',
  //     description: 'Radiology',
  //   },
  //   {
  //     id: 37,
  //     title: 'روماتولوژی',
  //     description: 'Rheumatology',
  //   },
  //   {
  //     id: 38,
  //     title: 'طب ورزش',
  //     description: 'Sports Medicine',
  //   },
  //   {
  //     id: 39,
  //     title: 'پزشکی مجاری ادراری',
  //     description: 'Urology',
  //   },
  //   {
  //     id: 40,
  //     title: 'طب عروق',
  //     description: 'Vascular Medicine',
  //   },
  // ]

  async getSpecialties() {
    try {
      const data = await this.$axios.get('/Rubika/Doctors/MedicalSpecialties')
      // console.log('SpecialtiesCheckBox -> getSpecialties -> data', data)
    } catch (error) {}
  }

  mounted() {
    // this.getSpecialties()
  }

  get specialtiesFilter() {
    let filter = this.items
    if (this.query) {
      filter = this.items.filter((item) => item.title.includes(this.query))
    }
    return filter
  }
}
</script>
