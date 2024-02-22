import * as Yup from "yup"
import { DeliveryVariants } from "../../types/enums.ts"

export const validationSchema = {
  deliveryVariant: Yup.string().required("Выберите вариант доставки"),
  cityId: Yup.string().required("Field is required"),
  pickUpPointAddress: Yup.object().when("deliveryVariant", {
    is: (deliveryVariant: DeliveryVariants) =>
      deliveryVariant === DeliveryVariants.PickUp,
    then: Yup.object().shape({
      address: Yup.string().required("Укажите адрес для самовывоза"),
      coordinates: Yup.string().required("Укажите координаты для самовывоза"),
    }),
    otherwise: Yup.object().shape({
      address: Yup.string().nullable(),
      coordinates: Yup.string().nullable(),
    }),
  }),
}
