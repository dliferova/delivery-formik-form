import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
  deliveryVariant: Yup.string().required("Выберите вариант доставки"),
  cityId: Yup.string().required("Field is required"),
  // pickUpPointAddress: Yup.object().when(["deliveryVariant"], {
  //   is: DeliveryVariants.PickUp,
  //   then: Yup.object().shape({
  //     address: Yup.string().required("Укажите адрес для самовывоза"),
  //   }),
  //   otherwise: Yup.object().shape({
  //     address: Yup.string().nullable(),
  //     coordinates: Yup.string().nullable(),
  //   }),
  // }),
})
