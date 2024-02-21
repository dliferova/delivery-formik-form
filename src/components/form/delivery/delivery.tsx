import { citiesDeliveryDataTypes } from "../../../types/api.ts"
import { DeliveryFormValuesTypes } from "../../../types/types.ts"
import { Field } from "formik"
import CitiesRadioGroup from "../../citiesRadioGroup/citiesRadioGroup.tsx"
import DeliveryDate from "../../deliveryDate/deliveryDate.tsx"

const Delivery = ({
  citiesData,
  values,
}: {
  citiesData: citiesDeliveryDataTypes
  values: DeliveryFormValuesTypes
}) => {
  return (
    <div>
      <div className="flex flex-col">
        <CitiesRadioGroup citiesData={citiesData} />
        <div className="mb-[12px]">
          <label
            className="block text-zinc-500 mb-[12px]"
            htmlFor={"delivery-address"}
          >
            Адрес
          </label>
          <Field
            className="input"
            id="delivery-address"
            type="text"
            name="deliveryAddress"
          />
        </div>
        <DeliveryDate values={values} />
      </div>
    </div>
  )
}

export default Delivery
