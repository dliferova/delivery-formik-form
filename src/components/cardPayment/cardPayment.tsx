import CustomInput from "../ui/customInput/customInput.tsx"
import { deliveryVariantTypes } from "../../types/types.ts"
import { PhoneInputRemark } from "../ui/phoneInputRemark/phoneInputRemark.tsx"
import CardInput from "../ui/cardInput/cardInput.tsx"

const CardPayment = ({
  activeDeliveryType,
}: {
  activeDeliveryType: deliveryVariantTypes
}) => {
  return (
    <div>
      <div className="flex flex-col">
        <CardInput />
        <div className="w-[484px]">
          <CustomInput
            label={"Номер телефона"}
            placeholder={"+7(999)999-99-99"}
          />
          <PhoneInputRemark activeDeliveryType={activeDeliveryType} />
        </div>
      </div>
    </div>
  )
}

export default CardPayment
