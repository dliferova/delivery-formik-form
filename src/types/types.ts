import { DeliveryVariants, PaymentVariants } from "./enums.ts"
import { FormikErrors, FormikTouched, useFormikContext } from "formik"

export type paymentMethodType = PaymentVariants.Cash | PaymentVariants.Card

type deliveryTimeType = {
  fromMinutes: number
  toMinutes: number
}

export interface DeliveryFormValuesTypes {
  deliveryVariant: DeliveryVariants
  cityId: string
  pickUpPointAddress: {
    address: string
    coordinates: number[]
  } | null
  deliveryAddress: string | null
  deliveryDate: string | null
  deliveryTime: deliveryTimeType | null
  paymentMethod: paymentMethodType
  cardNumber: string | null
  phoneNumber: string | null
}

export interface FormikOptions {
  values: DeliveryFormValuesTypes
  errors: FormikErrors<DeliveryFormValuesTypes>
  touched: FormikTouched<DeliveryFormValuesTypes>
}
