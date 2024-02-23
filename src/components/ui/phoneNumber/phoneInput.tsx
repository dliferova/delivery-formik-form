import TextInput from "../textInput/textInput.tsx"
import { PhoneInputRemark } from "./phoneInputRemark.tsx"

const PhoneInput = () => {
  return (
    <div className="input-max-width">
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
