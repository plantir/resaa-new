export interface ReqLogin {
  username: string
  password: string
  grant_type: string
}

export interface SubscriberCard {
  subscriberNumber: string
  credit: number
  state: string
}

export interface Profile {
  firstName?: any
  lastName?: any
  gender: string
  phoneNumber: string
  subscriberCards: SubscriberCard[]
}

export interface Result {
  profile: Profile
}

export interface ProfileResult {
  status: string
  code?: any
  messages: any[]
  result: Result
}
