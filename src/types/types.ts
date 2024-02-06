import { PaymentVariants } from "./enums.ts"

export type deliveryMethodType = 0 | 1

export type paymentMethodType = PaymentVariants.Cash | PaymentVariants.Card

export type pointsResponseData = {
  cities: cityData[]
  requests: []
}

export interface cityData {
  id: number
  city: string
  cityId: string
  deliveryPoints: deliveryPoint[]
}

export type deliveryPoint = {
  address: string
  coordinates: number[]
}
