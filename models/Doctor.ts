export interface ResultRelatedDoctor {
  requestId: string
  relatedDoctorsTotalCount: number
  relatedDoctors: RelatedDoctor[]
}

export interface RelatedDoctor {
  subscriberNumber: string
  fullNameWithTitle: string
  aboutDoctor: string[]
  specialtyTitle: string
  specialtyEnglishTitle: string
  expertise: null | string
  previousPrice: null
  pricePerMinute: string
  satisfiedCalls: number
  currentlyAvailable: boolean
  imagePath: string
}

export interface Specialty {
  id: number
  title: string
  description: string
  iconPath: string
}

export interface Doctor {
  id: string
  subscriberNumber: string
  gender?: any
  title?: any
  firstName: string
  lastName: string
  medicalCouncilNumber?: any
  specialty: Specialty
  expertise: string
  currentlyAvailable?: any
  imagePath: string
  providesDiagnosticDocumentsService: boolean
  timetable?: any
  workplaces?: any
  tags?: any
  specialtyEnglishTitle: string
  specialtyTitle: string
  relatedDoctors?: Doctor[]
}

export interface ResultDoctor {
  doctors: Doctor[]
  doctorsTotalCount: number
}
