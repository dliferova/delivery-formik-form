import DeliveryDate from "../deliveryDate/deliveryDate.tsx"
import TextInput from "../ui/textInput/textInput.tsx"

const CourierDeliveryInfo = () => {
  return (
    <div>
      <div className="mb-[12px]">
        <TextInput id="delivery-address" name="deliveryAddress" label="Адрес" />
      </div>
      <div className="mb-4">
        <DeliveryDate />
      </div>
    </div>
  )
}

export default CourierDeliveryInfo
