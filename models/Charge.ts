export interface Denomination {
  id: number
  amount: number
  payableAmount: number
}

export interface ResultDenominations {
  denominations: Denomination[]
}

export interface ChargeMenuItem {
  amount: number
  value: number
}

export interface ChargeDenomination {
  id: number
  amount: number
  payableAmount: number
}

export interface SubmissionParameters {
  token: string
}

export interface Gateway {
  address: string
  submissionType: string
  submissionParameters: SubmissionParameters
}

export interface ResultInvoice {
  paymentRequestId: string
  issuedAt: Date
  subscriberNumber: string
  obfuscatedPhoneNumber: string
  chargeDenomination: ChargeDenomination
  gateWay: Gateway
}
