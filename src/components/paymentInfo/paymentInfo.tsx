import { PaymentVariants } from "../../types/enums.ts"
import PhoneInput from "../ui/phoneNumber/phoneInput.tsx"
import { Field, useFormikContext } from "formik"
import { DeliveryFormValuesTypes } from "../../types/types.ts"
import CardNumberInput from "../ui/cardNumberInput/cardNumberInput.tsx"

const PaymentInfo = () => {
  const { values }: { values: DeliveryFormValuesTypes } = useFormikContext()

  return (
    <>
      <div id="payment-method-radio-group">
        <h2 className="h2">Способ оплаты</h2>
        <div
          role="group"
          className="input-wrapper--radio-group flex flex-row mb-[29px] flex-wrap relative"
        >
          <>
            <Field
              id="payment-method-card"
              type="radio"
              name="paymentMethod"
              className="hidden-radio-input"
              value={PaymentVariants.Card}
            />
            <label htmlFor="payment-method-card">Карта</label>
          </>
          <>
            <Field
              id="payment-method-cash"
              type="radio"
              name="paymentMethod"
              className="hidden-radio-input"
              value={PaymentVariants.Cash}
            />
            <label htmlFor="payment-method-cash">Наличные</label>
          </>
        </div>
      </div>
      {values.paymentMethod === PaymentVariants.Card ? (
        <CardNumberInput />
      ) : null}
      <PhoneInput />
    </>
  )
}

export default PaymentInfo
