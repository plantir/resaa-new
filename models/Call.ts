export interface Caller {
  subscriberNumber: string
  phoneNumber: string
  fullName: string
}

export interface Receiver {
  subscriberNumber: string
  phoneNumber: string
  fullName: string
}

export interface Transaction {
  id: number
  amount: number
}

export interface Call {
  id: number
  state: string
  startedAt: Date
  effectiveDuration: string
  caller: Caller
  receiver: Receiver
  transactions: Transaction[]
}

export interface ResultCalls {
  calls: Call[]
  callsTotalCount: number
}
