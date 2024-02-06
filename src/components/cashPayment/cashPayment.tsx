import CustomInput from "../ui/customInput/customInput.tsx"
import { PhoneInputRemark } from "../ui/phoneInputRemark/phoneInputRemark.tsx"
import { deliveryMethodType } from "../../types/types.ts"

const CashPayment = ({
  activeDeliveryType,
}: {
  activeDeliveryType: deliveryMethodType
}) => {
  return (
    <div>
      <h2>Cash Payment</h2>
      <CustomInput label={"Номер телефона"} placeholder={"+7(999)999-99-99"} />
      <PhoneInputRemark activeDeliveryType={activeDeliveryType} />
    </div>
  )
}

export default CashPayment
