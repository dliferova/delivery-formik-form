import { deliveryVariantTypes } from "../../../types/types.ts"

export const PhoneInputRemark = ({
  activeDeliveryType,
}: {
  activeDeliveryType: deliveryVariantTypes
}) => {
  return activeDeliveryType === 0 ? (
    <span className="text-sm text-slate-300">
      Товар на складе будет привязан к номеру телефона. В пункте выдачи назовите
      номер телефона, чтобы получить ваш заказ.
    </span>
  ) : (
    <span className="text-sm text-slate-300">
      Курьер позвонит на указанный номер за час до доставки заказа.
    </span>
  )
}
