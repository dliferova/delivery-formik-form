import { DeliveryFormValuesTypes } from "../../../types/types.ts"
import { useFormikContext } from "formik"
import { DeliveryVariants } from "../../../types/enums.ts"

export const PhoneInputRemark = () => {
  const { values }: { values: DeliveryFormValuesTypes } = useFormikContext()

  return (
    <>
      {(() => {
        switch (values.deliveryVariant) {
          case DeliveryVariants.PickUp:
            return (
              <span className="text-sm text-slate-300">
                Товар на складе будет привязан к номеру телефона. В пункте
                выдачи назовите номер телефона, чтобы получить ваш заказ.
              </span>
            )
          case DeliveryVariants.CourierDelivery:
            return (
              <span className="text-sm text-slate-300">
                Курьер позвонит на указанный номер за час до доставки заказа.
              </span>
            )
          default:
            return null
        }
      })()}
    </>
  )
}
