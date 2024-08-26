import { FundInterface } from "./FundInterface";

export interface ResponseModel {
  "fundModel": FundInterface,
  "message": string | null,
  "success": boolean
}
