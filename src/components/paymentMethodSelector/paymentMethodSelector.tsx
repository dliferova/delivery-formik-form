import { PaymentVariants } from "../../types/enums.ts"
import { useState } from "react"
import CardPayment from "../cardPayment/cardPayment.tsx"
import CashPayment from "../cashPayment/cashPayment.tsx"
import { deliveryMethodType } from "../../types/types.ts"

type activePaymentMethod = PaymentVariants.Cash | PaymentVariants.Card

const PaymentMethodSelector = ({
  activeDeliveryType,
}: {
  activeDeliveryType: deliveryMethodType
}) => {
  const [activePaymentVariant, setActivePaymentVariant] =
    useState<activePaymentMethod>(PaymentVariants.Card)

  const handleRadioChange = (event: {
    target: { value: PaymentVariants.Cash | PaymentVariants.Card }
  }) => {
    setActivePaymentVariant(event.target.value)
  }

  return (
    <>
      <div id="payment-method-radio-group">
        <h2 className="text-xl tracking-wide mb-[16px]">Способ оплаты</h2>
        {/* TODO -> радио кнопка для выбора метода оплаты КАРТА | НАЛИЧНЫЕ <- */}
        <div
          role="group"
          aria-labelledby="payment-method-radio-group"
          className="flex flex-row relative gap-2"
        >
          <label>
            <input
              id={PaymentVariants.Card}
              value={PaymentVariants.Card}
              checked={activePaymentVariant === PaymentVariants.Card}
              onChange={(e) => handleRadioChange(e)}
              type="radio"
            />
            Карта
          </label>
          <label>
            <input
              id={PaymentVariants.Cash}
              value={PaymentVariants.Cash}
              checked={activePaymentVariant === PaymentVariants.Cash}
              onChange={(e) => handleRadioChange(e)}
              type="radio"
            />
            Наличные
          </label>
        </div>
      </div>

      {(() => {
        switch (activePaymentVariant) {
          case PaymentVariants.Cash:
            return <CashPayment activeDeliveryType={activeDeliveryType} />
          case PaymentVariants.Card:
            return <CardPayment activeDeliveryType={activeDeliveryType} />
          default:
            return null
        }
      })()}
    </>
  )
}

export default PaymentMethodSelector
