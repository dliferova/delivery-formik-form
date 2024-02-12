import { PaymentVariants } from "../../types/enums.ts"
import { useState } from "react"
import CardPayment from "../cardPayment/cardPayment.tsx"
import CashPayment from "../cashPayment/cashPayment.tsx"
import { deliveryVariantTypes } from "../../types/types.ts"
import RadioButton from "../ui/radioButton/radioButton.tsx"

type activePaymentMethod = PaymentVariants.Cash | PaymentVariants.Card

const PaymentMethodSelector = ({
  activeDeliveryType,
}: {
  activeDeliveryType: deliveryVariantTypes
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
        <h2 className="h2">Способ оплаты</h2>
        <div
          role="group"
          className="input-wrapper--radio-group flex flex-row mb-[29px] flex-wrap relative"
        >
          <RadioButton
            inputId={PaymentVariants.Card}
            name={"card payment"}
            value={PaymentVariants.Card}
            checked={activePaymentVariant === PaymentVariants.Card}
            onChange={(e) => handleRadioChange(e)}
            label={"Карта"}
          />
          <RadioButton
            inputId={PaymentVariants.Cash}
            name={"cash payment"}
            value={PaymentVariants.Cash}
            checked={activePaymentVariant === PaymentVariants.Cash}
            onChange={(e) => handleRadioChange(e)}
            label={"Наличные"}
          />
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
