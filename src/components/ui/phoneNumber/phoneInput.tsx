import TextInput from "../textInput/textInput.tsx"
import { PhoneInputRemark } from "./phoneInputRemark.tsx"

const PhoneInput = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <TextInput
        id="phone-number"
        name="phoneNumber"
        label={"Номер телефона"}
        placeholder={"+7(999)999-99-99"}
      />
      <PhoneInputRemark />
    </div>
  )
}

export default PhoneInput
