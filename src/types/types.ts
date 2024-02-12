import { DeliveryVariants, PaymentVariants } from "./enums.ts"

export type paymentMethodType = PaymentVariants.Cash | PaymentVariants.Card

export interface DeliveryFormValuesTypes {
  deliveryVariant: DeliveryVariants
  cityId: string
  pickUpPointAddress: string | null
  deliveryAddress: string | null
  deliveryData: string | null
  deliveryTime: string | null
  paymentMethod: paymentMethodType
  cardNumber: string | null
  phoneNumber: string
}
