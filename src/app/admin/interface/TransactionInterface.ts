import { FundInterface } from "./FundInterface";

export interface TransactionInterface {
  "id": string,
  "userId": string,
  "fund": FundInterface,
  "amount": number,
  "date": Date,
  "active": boolean
  "type": string
}
