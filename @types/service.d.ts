export interface IResponse<T> {
  status: string
  code?: any
  messages: any[]
  result: T
}
