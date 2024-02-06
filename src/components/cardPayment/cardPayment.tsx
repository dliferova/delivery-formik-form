import CustomInput from "../ui/customInput/customInput.tsx"
import { deliveryMethodType } from "../../types/types.ts"
import { PhoneInputRemark } from "../ui/phoneInputRemark/phoneInputRemark.tsx"
import CardInput from "../ui/cardInput/cardInput.tsx"

const CardPayment = ({
  activeDeliveryType,
}: {
  activeDeliveryType: deliveryMethodType
}) => {
  return (
    <div>
      <h2>Card Payment</h2>
      <CardInput />
      <CustomInput label={"Номер телефона"} placeholder={"+7(999)999-99-99"} />
      <PhoneInputRemark activeDeliveryType={activeDeliveryType} />
    </div>
  )
}

export default CardPayment
